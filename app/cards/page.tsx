import Link from 'next/link';
import { getCards, getCardRewards } from '@/lib/static-data';

export default function CardsPage() {
  const cards = getCards();

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const rewards = getCardRewards(card.id);
            return (
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
                  {rewards.length > 0 && (
                    <div className="mb-4 space-y-1">
                      {rewards.map((r, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-gray-400">{r.category}</span>
                          <span className="text-onecard-purple font-semibold">{r.rate}{r.type === 'cashback' ? '%' : 'x'} {r.type}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <button className="w-full py-3 rounded-xl bg-onecard-purple/20 text-onecard-purple font-semibold hover:bg-onecard-purple/30 transition">
                    Add to My Wallet
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
