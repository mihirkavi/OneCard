import Link from 'next/link';
import { db } from '@/lib/db';
import { creditCards, categories, rewardRules, cardIssuers } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

async function getStats() {
  try {
    const cards = await db.select().from(creditCards);
    const cats = await db.select().from(categories);
    return { cardCount: cards.length, categoryCount: cats.length };
  } catch {
    return { cardCount: 0, categoryCount: 0 };
  }
}

export default async function Dashboard() {
  const stats = await getStats();

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
            <Link href="/dashboard" className="text-onecard-purple">Dashboard</Link>
            <Link href="/cards" className="hover:text-onecard-purple transition">My Cards</Link>
            <Link href="/recommend" className="px-4 py-2 rounded-lg card-gradient hover:opacity-90 transition">
              Get Recommendation
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-bold text-onecard-purple">{stats.cardCount}</div>
            <div className="text-gray-400 mt-1">Credit Cards</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-bold text-green-400">{stats.categoryCount}</div>
            <div className="text-gray-400 mt-1">Categories</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-400">$0</div>
            <div className="text-gray-400 mt-1">Est. Monthly Rewards</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-bold text-yellow-400">0</div>
            <div className="text-gray-400 mt-1">Your Cards</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link href="/recommend" className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
                <div className="font-medium">Get Card Recommendation</div>
                <div className="text-sm text-gray-400">Find the best card for your next purchase</div>
              </Link>
              <Link href="/cards" className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
                <div className="font-medium">Manage Your Cards</div>
                <div className="text-sm text-gray-400">Add or remove cards from your wallet</div>
              </Link>
              <Link href="/categories" className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
                <div className="font-medium">Browse Categories</div>
                <div className="text-sm text-gray-400">See rewards by spending category</div>
              </Link>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-4">Top Categories for Rewards</h2>
            <div className="space-y-3">
              {['Dining', 'Travel', 'Groceries', 'Gas', 'Streaming'].map((cat, i) => (
                <div key={cat} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                  <span>{cat}</span>
                  <span className="text-onecard-purple font-semibold">{5 - i}x</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
