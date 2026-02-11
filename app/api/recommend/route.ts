import { NextRequest, NextResponse } from 'next/server';
import { getRecommendation, staticCategories, staticMerchants } from '@/lib/static-data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const merchant = searchParams.get('merchant');
  const category = searchParams.get('category');
  const amount = parseFloat(searchParams.get('amount') || '100');

  try {
    let matchedCategoryId: string | null = null;

    if (category) {
      const cat = staticCategories.find(
        c => c.name.toLowerCase().includes(category.toLowerCase())
      );
      if (cat) {
        matchedCategoryId = cat.id;
      }
    }

    if (merchant && !matchedCategoryId) {
      const merchantMatch = staticMerchants.find(
        m => m.name.toLowerCase().includes(merchant.toLowerCase())
      );
      if (merchantMatch) {
        matchedCategoryId = merchantMatch.categoryId;
      }
    }

    if (!matchedCategoryId) {
      return NextResponse.json({ 
        success: false, 
        message: 'No matching category found',
        bestCard: null 
      });
    }

    const result = getRecommendation({ categoryId: matchedCategoryId, amount });

    if (!result.bestCard) {
      return NextResponse.json({ success: false, bestCard: null });
    }

    return NextResponse.json({
      success: true,
      bestCard: {
        name: result.bestCard.cardName,
        issuer: result.bestCard.issuer,
        rate: result.bestCard.rewardRate,
        type: result.bestCard.rewardType,
        color: result.bestCard.color,
        estimatedReward: result.bestCard.estimatedReward,
      },
      alternatives: result.allOptions.slice(1).map(r => ({
        name: r.cardName,
        issuer: r.issuer,
        rate: r.rewardRate,
        type: r.rewardType,
      })),
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 });
  }
}
