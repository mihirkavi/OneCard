import Link from 'next/link';
import { RecommendForm } from './RecommendForm';
import { db } from '@/lib/db';
import { categories, creditCards, rewardRules, cardIssuers } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';

async function getCategories() {
  try {
    return await db.select().from(categories);
  } catch {
    return [];
  }
}

async function getTopCards() {
  try {
    const cards = await db.select({
      id: creditCards.id,
      name: creditCards.name,
      issuerName: cardIssuers.name,
      color: creditCards.color,
    })
    .from(creditCards)
    .leftJoin(cardIssuers, eq(creditCards.issuerId, cardIssuers.id))
    .limit(6);
    return cards;
  } catch {
    return [];
  }
}

export default async function RecommendPage() {
  const cats = await getCategories();
  const topCards = await getTopCards();

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
            <Link href="/cards" className="hover:text-onecard-purple transition">My Cards</Link>
            <Link href="/recommend" className="px-4 py-2 rounded-lg card-gradient">
              Get Recommendation
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Find Your Best Card</h1>
          <p className="text-gray-400 text-lg">Tell us where you're shopping and we'll recommend the best card to maximize your rewards</p>
        </div>

        <RecommendForm categories={cats} />

        {topCards.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Popular Cards</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {topCards.map((card) => (
                <div key={card.id} className="glass rounded-xl p-4">
                  <div 
                    className="h-24 rounded-lg mb-3 flex items-end p-3"
                    style={{ background: card.color || 'linear-gradient(135deg, #4a90d9, #8b5cf6)' }}
                  >
                    <span className="text-sm font-semibold">{card.name}</span>
                  </div>
                  <div className="text-xs text-gray-400">{card.issuerName}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
