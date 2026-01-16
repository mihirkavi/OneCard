import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="glass sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-onecard-purple to-primary-500 flex items-center justify-center font-bold text-xl">
              OC
            </div>
            <span className="text-xl font-semibold">OneCard</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="hover:text-onecard-purple transition">Dashboard</Link>
            <Link href="/cards" className="hover:text-onecard-purple transition">My Cards</Link>
            <Link href="/recommend" className="px-4 py-2 rounded-lg card-gradient hover:opacity-90 transition">
              Get Recommendation
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-20">
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Maximize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-onecard-purple to-primary-500">Card Rewards</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Stop leaving money on the table. OneCard tells you exactly which credit card to use for every purchase to earn maximum rewards.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard" className="px-8 py-4 rounded-xl card-gradient text-lg font-semibold hover:opacity-90 transition pulse-glow">
              Start Saving Now
            </Link>
            <Link href="/cards" className="px-8 py-4 rounded-xl glass text-lg font-semibold hover:bg-white/10 transition">
              Add Your Cards
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="glass rounded-2xl p-8">
            <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
            <p className="text-gray-400">Get instant recommendations for which card to use based on merchant, category, and your card portfolio.</p>
          </div>
          <div className="glass rounded-2xl p-8">
            <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Your Rewards</h3>
            <p className="text-gray-400">See how much you're earning across all your cards and optimize your spending strategy.</p>
          </div>
          <div className="glass rounded-2xl p-8">
            <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Lookup</h3>
            <p className="text-gray-400">Chrome extension automatically shows the best card while you shop online. Never miss a reward again.</p>
          </div>
        </section>

        <section className="glass rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-10">
            <div>
              <div className="w-12 h-12 rounded-full card-gradient mx-auto mb-4 flex items-center justify-center font-bold text-xl">1</div>
              <h4 className="font-semibold mb-2">Add Your Cards</h4>
              <p className="text-sm text-gray-400">Tell us which credit cards you have in your wallet</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full card-gradient mx-auto mb-4 flex items-center justify-center font-bold text-xl">2</div>
              <h4 className="font-semibold mb-2">Enter a Purchase</h4>
              <p className="text-sm text-gray-400">Tell us where you're shopping or what category</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full card-gradient mx-auto mb-4 flex items-center justify-center font-bold text-xl">3</div>
              <h4 className="font-semibold mb-2">Get Best Card</h4>
              <p className="text-sm text-gray-400">We analyze all your cards and pick the winner</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full card-gradient mx-auto mb-4 flex items-center justify-center font-bold text-xl">4</div>
              <h4 className="font-semibold mb-2">Earn More</h4>
              <p className="text-sm text-gray-400">Watch your rewards stack up over time</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="glass mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 OneCard. Maximize Your Rewards.</p>
        </div>
      </footer>
    </div>
  );
}
