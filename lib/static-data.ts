export const staticIssuers = [
  { id: 'chase', name: 'Chase' },
  { id: 'amex', name: 'American Express' },
  { id: 'capital-one', name: 'Capital One' },
  { id: 'citi', name: 'Citi' },
  { id: 'discover', name: 'Discover' },
  { id: 'boa', name: 'Bank of America' },
  { id: 'wells-fargo', name: 'Wells Fargo' },
];

export const staticCategories = [
  { id: 'dining', name: 'Dining', icon: '🍽️' },
  { id: 'travel', name: 'Travel', icon: '✈️' },
  { id: 'groceries', name: 'Groceries', icon: '🛒' },
  { id: 'gas', name: 'Gas', icon: '⛽' },
  { id: 'streaming', name: 'Streaming', icon: '📺' },
  { id: 'online-shopping', name: 'Online Shopping', icon: '🛍️' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎬' },
  { id: 'drugstores', name: 'Drugstores', icon: '💊' },
  { id: 'home-improvement', name: 'Home Improvement', icon: '🏠' },
  { id: 'everything-else', name: 'Everything Else', icon: '📦' },
];

export const staticCards = [
  { id: 'sapphire-preferred', name: 'Sapphire Preferred', issuerId: 'chase', issuerName: 'Chase', network: 'Visa', annualFee: '95', color: 'linear-gradient(135deg, #1a237e, #303f9f)' },
  { id: 'sapphire-reserve', name: 'Sapphire Reserve', issuerId: 'chase', issuerName: 'Chase', network: 'Visa', annualFee: '550', color: 'linear-gradient(135deg, #0d47a1, #1565c0)' },
  { id: 'freedom-unlimited', name: 'Freedom Unlimited', issuerId: 'chase', issuerName: 'Chase', network: 'Visa', annualFee: '0', color: 'linear-gradient(135deg, #1565c0, #42a5f5)' },
  { id: 'freedom-flex', name: 'Freedom Flex', issuerId: 'chase', issuerName: 'Chase', network: 'Visa', annualFee: '0', color: 'linear-gradient(135deg, #1976d2, #64b5f6)' },
  { id: 'gold-card', name: 'Gold Card', issuerId: 'amex', issuerName: 'American Express', network: 'Amex', annualFee: '250', color: 'linear-gradient(135deg, #bf953f, #fcf6ba)' },
  { id: 'platinum-card', name: 'Platinum Card', issuerId: 'amex', issuerName: 'American Express', network: 'Amex', annualFee: '695', color: 'linear-gradient(135deg, #4a4a4a, #6e6e6e)' },
  { id: 'blue-cash-preferred', name: 'Blue Cash Preferred', issuerId: 'amex', issuerName: 'American Express', network: 'Amex', annualFee: '95', color: 'linear-gradient(135deg, #1976d2, #2196f3)' },
  { id: 'venture-x', name: 'Venture X', issuerId: 'capital-one', issuerName: 'Capital One', network: 'Visa', annualFee: '395', color: 'linear-gradient(135deg, #212121, #424242)' },
  { id: 'savor-one', name: 'Savor One', issuerId: 'capital-one', issuerName: 'Capital One', network: 'Visa', annualFee: '0', color: 'linear-gradient(135deg, #c62828, #ef5350)' },
  { id: 'custom-cash', name: 'Custom Cash', issuerId: 'citi', issuerName: 'Citi', network: 'Mastercard', annualFee: '0', color: 'linear-gradient(135deg, #0d47a1, #1976d2)' },
  { id: 'double-cash', name: 'Double Cash', issuerId: 'citi', issuerName: 'Citi', network: 'Mastercard', annualFee: '0', color: 'linear-gradient(135deg, #1565c0, #42a5f5)' },
  { id: 'it-card', name: 'it Card', issuerId: 'discover', issuerName: 'Discover', network: 'Discover', annualFee: '0', color: 'linear-gradient(135deg, #ff6f00, #ff9800)' },
];

export const staticMerchants = [
  { id: 'amazon', name: 'Amazon', domain: 'amazon.com', categoryId: 'online-shopping' },
  { id: 'walmart', name: 'Walmart', domain: 'walmart.com', categoryId: 'groceries' },
  { id: 'target', name: 'Target', domain: 'target.com', categoryId: 'groceries' },
  { id: 'costco', name: 'Costco', domain: 'costco.com', categoryId: 'groceries' },
  { id: 'starbucks', name: 'Starbucks', domain: 'starbucks.com', categoryId: 'dining' },
  { id: 'netflix', name: 'Netflix', domain: 'netflix.com', categoryId: 'streaming' },
  { id: 'uber', name: 'Uber', domain: 'uber.com', categoryId: 'travel' },
  { id: 'airbnb', name: 'Airbnb', domain: 'airbnb.com', categoryId: 'travel' },
  { id: 'shell', name: 'Shell', domain: 'shell.com', categoryId: 'gas' },
  { id: 'home-depot', name: 'Home Depot', domain: 'homedepot.com', categoryId: 'home-improvement' },
];

export const staticRewardRules = [
  { id: 'r1', cardId: 'sapphire-preferred', categoryId: 'dining', rewardRate: '3', rewardType: 'points', description: '3x points on Dining' },
  { id: 'r2', cardId: 'sapphire-preferred', categoryId: 'travel', rewardRate: '2', rewardType: 'points', description: '2x points on Travel' },
  { id: 'r3', cardId: 'sapphire-preferred', categoryId: 'online-shopping', rewardRate: '1', rewardType: 'points', description: '1x points on Online Shopping' },
  { id: 'r4', cardId: 'sapphire-reserve', categoryId: 'dining', rewardRate: '3', rewardType: 'points', description: '3x points on Dining' },
  { id: 'r5', cardId: 'sapphire-reserve', categoryId: 'travel', rewardRate: '3', rewardType: 'points', description: '3x points on Travel' },
  { id: 'r6', cardId: 'freedom-unlimited', categoryId: 'everything-else', rewardRate: '1.5', rewardType: 'cashback', description: '1.5x cashback on Everything Else' },
  { id: 'r7', cardId: 'freedom-flex', categoryId: 'dining', rewardRate: '3', rewardType: 'points', description: '3x points on Dining' },
  { id: 'r8', cardId: 'freedom-flex', categoryId: 'drugstores', rewardRate: '3', rewardType: 'points', description: '3x points on Drugstores' },
  { id: 'r9', cardId: 'gold-card', categoryId: 'dining', rewardRate: '4', rewardType: 'points', description: '4x points on Dining' },
  { id: 'r10', cardId: 'gold-card', categoryId: 'groceries', rewardRate: '4', rewardType: 'points', description: '4x points on Groceries' },
  { id: 'r11', cardId: 'platinum-card', categoryId: 'travel', rewardRate: '5', rewardType: 'points', description: '5x points on Travel' },
  { id: 'r12', cardId: 'blue-cash-preferred', categoryId: 'groceries', rewardRate: '6', rewardType: 'cashback', description: '6x cashback on Groceries' },
  { id: 'r13', cardId: 'blue-cash-preferred', categoryId: 'streaming', rewardRate: '6', rewardType: 'cashback', description: '6x cashback on Streaming' },
  { id: 'r14', cardId: 'venture-x', categoryId: 'travel', rewardRate: '5', rewardType: 'miles', description: '5x miles on Travel' },
  { id: 'r15', cardId: 'venture-x', categoryId: 'everything-else', rewardRate: '2', rewardType: 'miles', description: '2x miles on Everything Else' },
  { id: 'r16', cardId: 'savor-one', categoryId: 'dining', rewardRate: '3', rewardType: 'cashback', description: '3x cashback on Dining' },
  { id: 'r17', cardId: 'savor-one', categoryId: 'entertainment', rewardRate: '3', rewardType: 'cashback', description: '3x cashback on Entertainment' },
  { id: 'r18', cardId: 'savor-one', categoryId: 'streaming', rewardRate: '3', rewardType: 'cashback', description: '3x cashback on Streaming' },
  { id: 'r19', cardId: 'custom-cash', categoryId: 'dining', rewardRate: '5', rewardType: 'cashback', description: '5x cashback on Dining' },
  { id: 'r20', cardId: 'custom-cash', categoryId: 'gas', rewardRate: '5', rewardType: 'cashback', description: '5x cashback on Gas' },
  { id: 'r21', cardId: 'custom-cash', categoryId: 'groceries', rewardRate: '5', rewardType: 'cashback', description: '5x cashback on Groceries' },
  { id: 'r22', cardId: 'double-cash', categoryId: 'everything-else', rewardRate: '2', rewardType: 'cashback', description: '2x cashback on Everything Else' },
  { id: 'r23', cardId: 'it-card', categoryId: 'dining', rewardRate: '5', rewardType: 'cashback', description: '5x cashback on Dining' },
  { id: 'r24', cardId: 'it-card', categoryId: 'gas', rewardRate: '5', rewardType: 'cashback', description: '5x cashback on Gas' },
];

export function getCards() {
  return staticCards.map(card => ({
    id: card.id,
    name: card.name,
    network: card.network,
    annualFee: card.annualFee,
    color: card.color,
    issuerName: card.issuerName,
  }));
}

export function getCardRewards(cardId: string) {
  return staticRewardRules
    .filter(r => r.cardId === cardId)
    .map(r => {
      const cat = staticCategories.find(c => c.id === r.categoryId);
      return {
        category: cat?.name || 'Unknown',
        rate: r.rewardRate,
        type: r.rewardType,
      };
    });
}

export function getCategoriesWithBestCards() {
  return staticCategories.map(cat => {
    const rules = staticRewardRules
      .filter(r => r.categoryId === cat.id)
      .sort((a, b) => parseFloat(b.rewardRate) - parseFloat(a.rewardRate))
      .slice(0, 3);

    const topCards = rules.map(r => {
      const card = staticCards.find(c => c.id === r.cardId);
      return {
        cardName: card?.name || 'Unknown',
        issuerName: card?.issuerName || 'Unknown',
        rate: r.rewardRate,
        type: r.rewardType,
        color: card?.color || 'linear-gradient(135deg, #4a90d9, #8b5cf6)',
      };
    });

    return { ...cat, topCards };
  });
}

export function getStats() {
  return { cardCount: staticCards.length, categoryCount: staticCategories.length };
}

export function getTopCards() {
  return staticCards.slice(0, 6).map(card => ({
    id: card.id,
    name: card.name,
    issuerName: card.issuerName,
    color: card.color,
  }));
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

export function getRecommendation(input: { merchant?: string; categoryId?: string; amount: number }) {
  const { merchant, categoryId, amount } = input;

  let matchedCategoryId = categoryId;

  if (merchant && !categoryId) {
    const merchantMatch = staticMerchants.find(
      m => m.name.toLowerCase().includes(merchant.toLowerCase())
    );
    if (merchantMatch) {
      matchedCategoryId = merchantMatch.categoryId;
    }
  }

  let rules;
  if (matchedCategoryId) {
    rules = staticRewardRules
      .filter(r => r.categoryId === matchedCategoryId)
      .sort((a, b) => parseFloat(b.rewardRate) - parseFloat(a.rewardRate));
  } else {
    rules = [...staticRewardRules]
      .sort((a, b) => parseFloat(b.rewardRate) - parseFloat(a.rewardRate))
      .slice(0, 10);
  }

  if (rules.length === 0) {
    return { bestCard: null, allOptions: [] };
  }

  const allOptions = rules.map(rule => {
    const card = staticCards.find(c => c.id === rule.cardId);
    return {
      cardName: card?.name || 'Unknown Card',
      issuer: card?.issuerName || 'Unknown Issuer',
      rewardRate: rule.rewardRate,
      rewardType: rule.rewardType,
      color: card?.color || 'linear-gradient(135deg, #4a90d9, #8b5cf6)',
      estimatedReward: calculateReward(amount, parseFloat(rule.rewardRate), rule.rewardType),
    };
  });

  return { bestCard: allOptions[0], allOptions };
}
