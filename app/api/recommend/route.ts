import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { creditCards, cardIssuers, rewardRules, categories, merchants } from '@/lib/db/schema';
import { eq, desc, ilike } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const merchant = searchParams.get('merchant');
  const category = searchParams.get('category');
  const amount = parseFloat(searchParams.get('amount') || '100');

  try {
    let matchedCategoryId: string | null = null;

    if (category) {
      const cat = await db.select()
        .from(categories)
        .where(ilike(categories.name, `%${category}%`))
        .limit(1);
      if (cat.length > 0) {
        matchedCategoryId = cat[0].id;
      }
    }

    if (merchant && !matchedCategoryId) {
      const merchantMatch = await db.select()
        .from(merchants)
        .where(ilike(merchants.name, `%${merchant}%`))
        .limit(1);
      
      if (merchantMatch.length > 0 && merchantMatch[0].categoryId) {
        matchedCategoryId = merchantMatch[0].categoryId;
      }
    }

    if (!matchedCategoryId) {
      return NextResponse.json({ 
        success: false, 
        message: 'No matching category found',
        bestCard: null 
      });
    }

    const rules = await db.select({
      cardId: rewardRules.cardId,
      rewardRate: rewardRules.rewardRate,
      rewardType: rewardRules.rewardType,
      cardName: creditCards.name,
      cardColor: creditCards.color,
      issuerName: cardIssuers.name,
    })
    .from(rewardRules)
    .leftJoin(creditCards, eq(rewardRules.cardId, creditCards.id))
    .leftJoin(cardIssuers, eq(creditCards.issuerId, cardIssuers.id))
    .where(eq(rewardRules.categoryId, matchedCategoryId))
    .orderBy(desc(rewardRules.rewardRate))
    .limit(5);

    if (rules.length === 0) {
      return NextResponse.json({ success: false, bestCard: null });
    }

    const bestCard = rules[0];
    const reward = calculateReward(amount, parseFloat(bestCard.rewardRate || '1'), bestCard.rewardType || 'points');

    return NextResponse.json({
      success: true,
      bestCard: {
        name: bestCard.cardName,
        issuer: bestCard.issuerName,
        rate: bestCard.rewardRate,
        type: bestCard.rewardType,
        color: bestCard.cardColor,
        estimatedReward: reward,
      },
      alternatives: rules.slice(1).map(r => ({
        name: r.cardName,
        issuer: r.issuerName,
        rate: r.rewardRate,
        type: r.rewardType,
      })),
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 });
  }
}

function calculateReward(amount: number, rate: number, type: string): string {
  const baseReward = amount * (rate / 100);
  
  switch (type) {
    case 'cashback':
      return `$${baseReward.toFixed(2)} cash back`;
    case 'points':
      return `${Math.round(amount * rate)} points`;
    case 'miles':
      return `${Math.round(amount * rate)} miles`;
    default:
      return `${rate}x rewards`;
  }
}
