import Link from 'next/link';
import { db } from '@/lib/db';
import { creditCards, cardIssuers, rewardRules, categories } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

async function getCards() {
  try {
    const cards = await db.select({
      id: creditCards.id,
      name: creditCards.name,
      network: creditCards.network,
      annualFee: creditCards.annualFee,
      color: creditCards.color,
      issuerName: cardIssuers.name,
    })
    .from(creditCards)
    .leftJoin(cardIssuers, eq(creditCards.issuerId, cardIssuers.id));
    
    return cards;
  } catch {
    return [];
  }
}

async function getCardRewards(cardId: string) {
  try {
    const rules = await db.select({
      category: categories.name,
      rate: rewardRules.rewardRate,
      type: rewardRules.rewardType,
    })
    .from(rewardRules)
    .leftJoin(categories, eq(rewardRules.categoryId, categories.id))
    .where(eq(rewardRules.cardId, cardId));
    return rules;
  } catch {
    return [];
  }
}

export default async function CardsPage() {
  const cards = await getCards();

  return (
    <div className="min-h-screen">
      <header className="glass sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-onecard-purple to-primary-500 flex items-center justify-center font-bold text-xl">
              OC
            </div>
            <span className="text-xl font-semibold">OneCard</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="hover:text-onecard-purple transition">Dashboard</Link>
            <Link href="/cards" className="text-onecard-purple">My Cards</Link>
            <Link href="/recommend" className="px-4 py-2 rounded-lg card-gradient hover:opacity-90 transition">
              Get Recommendation
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Credit Cards</h1>
          <div className="text-gray-400">{cards.length} cards available</div>
        </div>

        {cards.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">💳</div>
            <h2 className="text-2xl font-semibold mb-2">No Cards Yet</h2>
            <p className="text-gray-400 mb-6">Run the database seed to populate credit cards with reward data.</p>
            <code className="block bg-black/30 p-4 rounded-lg text-sm text-left max-w-md mx-auto">
              npm run db:push && npm run db:seed
            </code>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div key={card.id} className="glass rounded-2xl overflow-hidden">
                <div 
                  className="h-40 flex items-end p-6"
                  style={{ background: card.color || 'linear-gradient(135deg, #4a90d9, #8b5cf6)' }}
                >
                  <div>
                    <div className="text-lg font-bold">{card.name}</div>
                    <div className="text-sm opacity-80">{card.issuerName}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-400">Network</span>
                    <span className="font-semibold">{card.network}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-400">Annual Fee</span>
                    <span className="font-semibold">${card.annualFee || 0}</span>
                  </div>
                  <button className="w-full py-3 rounded-xl bg-onecard-purple/20 text-onecard-purple font-semibold hover:bg-onecard-purple/30 transition">
                    Add to My Wallet
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
