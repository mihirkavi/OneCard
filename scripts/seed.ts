import { db } from '../lib/db';
import { cardIssuers, creditCards, categories, merchants, rewardRules } from '../lib/db/schema';

async function seed() {
  console.log('Seeding database...');

  const issuers = await db.insert(cardIssuers).values([
    { name: 'Chase' },
    { name: 'American Express' },
    { name: 'Capital One' },
    { name: 'Citi' },
    { name: 'Discover' },
    { name: 'Bank of America' },
    { name: 'Wells Fargo' },
  ]).returning();

  console.log(`Created ${issuers.length} issuers`);

  const cats = await db.insert(categories).values([
    { name: 'Dining', icon: '🍽️' },
    { name: 'Travel', icon: '✈️' },
    { name: 'Groceries', icon: '🛒' },
    { name: 'Gas', icon: '⛽' },
    { name: 'Streaming', icon: '📺' },
    { name: 'Online Shopping', icon: '🛍️' },
    { name: 'Entertainment', icon: '🎬' },
    { name: 'Drugstores', icon: '💊' },
    { name: 'Home Improvement', icon: '🏠' },
    { name: 'Everything Else', icon: '📦' },
  ]).returning();

  console.log(`Created ${cats.length} categories`);

  const categoryMap = Object.fromEntries(cats.map(c => [c.name, c.id]));
  const issuerMap = Object.fromEntries(issuers.map(i => [i.name, i.id]));

  const cards = await db.insert(creditCards).values([
    { 
      name: 'Sapphire Preferred', 
      issuerId: issuerMap['Chase'], 
      network: 'Visa',
      annualFee: '95',
      color: 'linear-gradient(135deg, #1a237e, #303f9f)'
    },
    { 
      name: 'Sapphire Reserve', 
      issuerId: issuerMap['Chase'], 
      network: 'Visa',
      annualFee: '550',
      color: 'linear-gradient(135deg, #0d47a1, #1565c0)'
    },
    { 
      name: 'Freedom Unlimited', 
      issuerId: issuerMap['Chase'], 
      network: 'Visa',
      annualFee: '0',
      color: 'linear-gradient(135deg, #1565c0, #42a5f5)'
    },
    { 
      name: 'Freedom Flex', 
      issuerId: issuerMap['Chase'], 
      network: 'Visa',
      annualFee: '0',
      color: 'linear-gradient(135deg, #1976d2, #64b5f6)'
    },
    { 
      name: 'Gold Card', 
      issuerId: issuerMap['American Express'], 
      network: 'Amex',
      annualFee: '250',
      color: 'linear-gradient(135deg, #bf953f, #fcf6ba)'
    },
    { 
      name: 'Platinum Card', 
      issuerId: issuerMap['American Express'], 
      network: 'Amex',
      annualFee: '695',
      color: 'linear-gradient(135deg, #4a4a4a, #6e6e6e)'
    },
    { 
      name: 'Blue Cash Preferred', 
      issuerId: issuerMap['American Express'], 
      network: 'Amex',
      annualFee: '95',
      color: 'linear-gradient(135deg, #1976d2, #2196f3)'
    },
    { 
      name: 'Venture X', 
      issuerId: issuerMap['Capital One'], 
      network: 'Visa',
      annualFee: '395',
      color: 'linear-gradient(135deg, #212121, #424242)'
    },
    { 
      name: 'Savor One', 
      issuerId: issuerMap['Capital One'], 
      network: 'Visa',
      annualFee: '0',
      color: 'linear-gradient(135deg, #c62828, #ef5350)'
    },
    { 
      name: 'Custom Cash', 
      issuerId: issuerMap['Citi'], 
      network: 'Mastercard',
      annualFee: '0',
      color: 'linear-gradient(135deg, #0d47a1, #1976d2)'
    },
    { 
      name: 'Double Cash', 
      issuerId: issuerMap['Citi'], 
      network: 'Mastercard',
      annualFee: '0',
      color: 'linear-gradient(135deg, #1565c0, #42a5f5)'
    },
    { 
      name: 'it Card', 
      issuerId: issuerMap['Discover'], 
      network: 'Discover',
      annualFee: '0',
      color: 'linear-gradient(135deg, #ff6f00, #ff9800)'
    },
  ]).returning();

  console.log(`Created ${cards.length} cards`);

  const cardMap = Object.fromEntries(cards.map(c => [`${c.issuerId}-${c.name}`, c.id]));

  await db.insert(merchants).values([
    { name: 'Amazon', domain: 'amazon.com', categoryId: categoryMap['Online Shopping'] },
    { name: 'Walmart', domain: 'walmart.com', categoryId: categoryMap['Groceries'] },
    { name: 'Target', domain: 'target.com', categoryId: categoryMap['Groceries'] },
    { name: 'Costco', domain: 'costco.com', categoryId: categoryMap['Groceries'] },
    { name: 'Starbucks', domain: 'starbucks.com', categoryId: categoryMap['Dining'] },
    { name: 'Netflix', domain: 'netflix.com', categoryId: categoryMap['Streaming'] },
    { name: 'Uber', domain: 'uber.com', categoryId: categoryMap['Travel'] },
    { name: 'Airbnb', domain: 'airbnb.com', categoryId: categoryMap['Travel'] },
    { name: 'Shell', domain: 'shell.com', categoryId: categoryMap['Gas'] },
    { name: 'Home Depot', domain: 'homedepot.com', categoryId: categoryMap['Home Improvement'] },
  ]);

  console.log('Created merchants');

  const rewardData = [
    { cardName: 'Sapphire Preferred', issuer: 'Chase', category: 'Dining', rate: '3', type: 'points' },
    { cardName: 'Sapphire Preferred', issuer: 'Chase', category: 'Travel', rate: '2', type: 'points' },
    { cardName: 'Sapphire Preferred', issuer: 'Chase', category: 'Online Shopping', rate: '1', type: 'points' },
    { cardName: 'Sapphire Reserve', issuer: 'Chase', category: 'Dining', rate: '3', type: 'points' },
    { cardName: 'Sapphire Reserve', issuer: 'Chase', category: 'Travel', rate: '3', type: 'points' },
    { cardName: 'Freedom Unlimited', issuer: 'Chase', category: 'Everything Else', rate: '1.5', type: 'cashback' },
    { cardName: 'Freedom Flex', issuer: 'Chase', category: 'Dining', rate: '3', type: 'points' },
    { cardName: 'Freedom Flex', issuer: 'Chase', category: 'Drugstores', rate: '3', type: 'points' },
    { cardName: 'Gold Card', issuer: 'American Express', category: 'Dining', rate: '4', type: 'points' },
    { cardName: 'Gold Card', issuer: 'American Express', category: 'Groceries', rate: '4', type: 'points' },
    { cardName: 'Platinum Card', issuer: 'American Express', category: 'Travel', rate: '5', type: 'points' },
    { cardName: 'Blue Cash Preferred', issuer: 'American Express', category: 'Groceries', rate: '6', type: 'cashback' },
    { cardName: 'Blue Cash Preferred', issuer: 'American Express', category: 'Streaming', rate: '6', type: 'cashback' },
    { cardName: 'Venture X', issuer: 'Capital One', category: 'Travel', rate: '5', type: 'miles' },
    { cardName: 'Venture X', issuer: 'Capital One', category: 'Everything Else', rate: '2', type: 'miles' },
    { cardName: 'Savor One', issuer: 'Capital One', category: 'Dining', rate: '3', type: 'cashback' },
    { cardName: 'Savor One', issuer: 'Capital One', category: 'Entertainment', rate: '3', type: 'cashback' },
    { cardName: 'Savor One', issuer: 'Capital One', category: 'Streaming', rate: '3', type: 'cashback' },
    { cardName: 'Custom Cash', issuer: 'Citi', category: 'Dining', rate: '5', type: 'cashback' },
    { cardName: 'Custom Cash', issuer: 'Citi', category: 'Gas', rate: '5', type: 'cashback' },
    { cardName: 'Custom Cash', issuer: 'Citi', category: 'Groceries', rate: '5', type: 'cashback' },
    { cardName: 'Double Cash', issuer: 'Citi', category: 'Everything Else', rate: '2', type: 'cashback' },
    { cardName: 'it Card', issuer: 'Discover', category: 'Dining', rate: '5', type: 'cashback' },
    { cardName: 'it Card', issuer: 'Discover', category: 'Gas', rate: '5', type: 'cashback' },
  ];

  for (const reward of rewardData) {
    const card = cards.find(c => c.name === reward.cardName);
    if (card) {
      await db.insert(rewardRules).values({
        cardId: card.id,
        categoryId: categoryMap[reward.category],
        rewardRate: reward.rate,
        rewardType: reward.type,
        description: `${reward.rate}x ${reward.type} on ${reward.category}`,
      });
    }
  }

  console.log('Created reward rules');
  console.log('Seeding complete!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
