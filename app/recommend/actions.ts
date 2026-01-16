'use server';

import { db } from '@/lib/db';
import { creditCards, cardIssuers, rewardRules, categories, merchants } from '@/lib/db/schema';
import { eq, desc, ilike } from 'drizzle-orm';

type RecommendInput = {
  merchant?: string;
  categoryId?: string;
  amount: number;
};

export async function getRecommendation(input: RecommendInput) {
  const { merchant, categoryId, amount } = input;

  try {
    let matchedCategoryId = categoryId;

    if (merchant && !categoryId) {
      const merchantMatch = await db.select()
        .from(merchants)
        .where(ilike(merchants.name, `%${merchant}%`))
        .limit(1);
      
      if (merchantMatch.length > 0 && merchantMatch[0].categoryId) {
        matchedCategoryId = merchantMatch[0].categoryId;
      }
    }

    let rules;
    if (matchedCategoryId) {
      rules = await db.select({
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
      .orderBy(desc(rewardRules.rewardRate));
    } else {
      rules = await db.select({
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
      .orderBy(desc(rewardRules.rewardRate))
      .limit(10);
    }

    if (rules.length === 0) {
      return { bestCard: null, allOptions: [] };
    }

    const allOptions = rules.map(rule => ({
      cardName: rule.cardName || 'Unknown Card',
      issuer: rule.issuerName || 'Unknown Issuer',
      rewardRate: rule.rewardRate || '1',
      rewardType: rule.rewardType || 'points',
      color: rule.cardColor || 'linear-gradient(135deg, #4a90d9, #8b5cf6)',
      estimatedReward: calculateReward(amount, parseFloat(rule.rewardRate || '1'), rule.rewardType || 'points'),
    }));

    return {
      bestCard: allOptions[0],
      allOptions,
    };
  } catch (error) {
    console.error('Recommendation error:', error);
    return { bestCard: null, allOptions: [] };
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
