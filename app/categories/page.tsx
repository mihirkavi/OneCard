import Link from 'next/link';
import { getCategoriesWithBestCards } from '@/lib/static-data';

export default function CategoriesPage() {
  const categoriesData = getCategoriesWithBestCards();

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
            <Link href="/recommend" className="px-4 py-2 rounded-lg card-gradient hover:opacity-90 transition">
              Get Recommendation
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-4">Spending Categories</h1>
        <p className="text-gray-400 mb-10">See the best credit cards for each spending category</p>

        <div className="grid md:grid-cols-2 gap-6">
          {categoriesData.map((cat) => (
            <div key={cat.id} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{cat.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold">{cat.name}</h2>
                  <p className="text-sm text-gray-400">{cat.topCards.length} cards with bonus rewards</p>
                </div>
              </div>
              
              {cat.topCards.length > 0 ? (
                <div className="space-y-3">
                  {cat.topCards.map((card, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center justify-between p-4 rounded-xl ${i === 0 ? 'bg-onecard-purple/20 border border-onecard-purple/30' : 'bg-white/5'}`}
                    >
                      <div>
                        <div className="font-medium">{card.cardName}</div>
                        <div className="text-sm text-gray-400">{card.issuerName}</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${i === 0 ? 'text-onecard-purple text-xl' : 'text-white'}`}>
                          {card.rate}{card.type === 'cashback' ? '%' : 'x'}
                        </div>
                        <div className="text-xs text-gray-400">{card.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-400 py-4">
                  No specific bonus cards for this category
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
