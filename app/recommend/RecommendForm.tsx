'use client';

import { useState } from 'react';
import { getRecommendation } from './actions';

type Category = {
  id: string;
  name: string;
  icon: string | null;
};

type Recommendation = {
  cardName: string;
  issuer: string;
  rewardRate: string;
  rewardType: string;
  color: string;
  estimatedReward: string;
};

export function RecommendForm({ categories }: { categories: Category[] }) {
  const [merchant, setMerchant] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('100');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [allOptions, setAllOptions] = useState<Recommendation[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await getRecommendation({ merchant, categoryId: category, amount: parseFloat(amount) });
      if (result.bestCard) {
        setRecommendation(result.bestCard);
        setAllOptions(result.allOptions || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Merchant or Store</label>
            <input
              type="text"
              value={merchant}
              onChange={(e) => setMerchant(e.target.value)}
              placeholder="e.g., Amazon, Starbucks, Costco"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-onecard-purple focus:outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Or Select Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-onecard-purple focus:outline-none transition appearance-none"
            >
              <option value="">Select a category...</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">Purchase Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            step="0.01"
            className="w-full md:w-48 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-onecard-purple focus:outline-none transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading || (!merchant && !category)}
          className="w-full py-4 rounded-xl card-gradient font-semibold text-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Finding Best Card...' : 'Get Recommendation'}
        </button>
      </form>

      {recommendation && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Best Card for This Purchase</h3>
          <div className="glass rounded-2xl overflow-hidden max-w-md mx-auto pulse-glow">
            <div 
              className="h-48 flex flex-col justify-end p-6"
              style={{ background: recommendation.color || 'linear-gradient(135deg, #4a90d9, #8b5cf6)' }}
            >
              <div className="text-2xl font-bold">{recommendation.cardName}</div>
              <div className="opacity-80">{recommendation.issuer}</div>
            </div>
            <div className="p-6">
              <div className="flex justify-between mb-3">
                <span className="text-gray-400">Reward Rate</span>
                <span className="text-2xl font-bold text-onecard-purple">{recommendation.rewardRate}x</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="text-gray-400">Reward Type</span>
                <span className="font-semibold">{recommendation.rewardType}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-white/10">
                <span className="text-gray-400">Estimated Reward</span>
                <span className="text-xl font-bold text-green-400">{recommendation.estimatedReward}</span>
              </div>
            </div>
          </div>

          {allOptions.length > 1 && (
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Other Options</h4>
              <div className="space-y-3">
                {allOptions.slice(1, 4).map((opt, i) => (
                  <div key={i} className="glass rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <div className="font-medium">{opt.cardName}</div>
                      <div className="text-sm text-gray-400">{opt.issuer}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-onecard-purple">{opt.rewardRate}x</div>
                      <div className="text-sm text-green-400">{opt.estimatedReward}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
