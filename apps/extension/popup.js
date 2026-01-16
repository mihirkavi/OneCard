const MERCHANT_CATEGORIES = {
  'amazon.com': { category: 'Online Shopping', bestCard: 'Sapphire Preferred', issuer: 'Chase', rate: '1x', color: 'linear-gradient(135deg, #1a237e, #303f9f)' },
  'walmart.com': { category: 'Groceries', bestCard: 'Blue Cash Preferred', issuer: 'American Express', rate: '6%', color: 'linear-gradient(135deg, #1976d2, #2196f3)' },
  'target.com': { category: 'Groceries', bestCard: 'Blue Cash Preferred', issuer: 'American Express', rate: '6%', color: 'linear-gradient(135deg, #1976d2, #2196f3)' },
  'costco.com': { category: 'Groceries', bestCard: 'Blue Cash Preferred', issuer: 'American Express', rate: '6%', color: 'linear-gradient(135deg, #1976d2, #2196f3)' },
  'starbucks.com': { category: 'Dining', bestCard: 'Custom Cash', issuer: 'Citi', rate: '5%', color: 'linear-gradient(135deg, #0d47a1, #1976d2)' },
  'ubereats.com': { category: 'Dining', bestCard: 'Gold Card', issuer: 'American Express', rate: '4x', color: 'linear-gradient(135deg, #bf953f, #fcf6ba)' },
  'doordash.com': { category: 'Dining', bestCard: 'Gold Card', issuer: 'American Express', rate: '4x', color: 'linear-gradient(135deg, #bf953f, #fcf6ba)' },
  'grubhub.com': { category: 'Dining', bestCard: 'Gold Card', issuer: 'American Express', rate: '4x', color: 'linear-gradient(135deg, #bf953f, #fcf6ba)' },
  'netflix.com': { category: 'Streaming', bestCard: 'Blue Cash Preferred', issuer: 'American Express', rate: '6%', color: 'linear-gradient(135deg, #1976d2, #2196f3)' },
  'hulu.com': { category: 'Streaming', bestCard: 'Blue Cash Preferred', issuer: 'American Express', rate: '6%', color: 'linear-gradient(135deg, #1976d2, #2196f3)' },
  'spotify.com': { category: 'Streaming', bestCard: 'Blue Cash Preferred', issuer: 'American Express', rate: '6%', color: 'linear-gradient(135deg, #1976d2, #2196f3)' },
  'airbnb.com': { category: 'Travel', bestCard: 'Venture X', issuer: 'Capital One', rate: '5x', color: 'linear-gradient(135deg, #212121, #424242)' },
  'expedia.com': { category: 'Travel', bestCard: 'Venture X', issuer: 'Capital One', rate: '5x', color: 'linear-gradient(135deg, #212121, #424242)' },
  'hotels.com': { category: 'Travel', bestCard: 'Venture X', issuer: 'Capital One', rate: '5x', color: 'linear-gradient(135deg, #212121, #424242)' },
  'booking.com': { category: 'Travel', bestCard: 'Venture X', issuer: 'Capital One', rate: '5x', color: 'linear-gradient(135deg, #212121, #424242)' },
  'united.com': { category: 'Travel', bestCard: 'Sapphire Reserve', issuer: 'Chase', rate: '3x', color: 'linear-gradient(135deg, #0d47a1, #1565c0)' },
  'delta.com': { category: 'Travel', bestCard: 'Sapphire Reserve', issuer: 'Chase', rate: '3x', color: 'linear-gradient(135deg, #0d47a1, #1565c0)' },
  'homedepot.com': { category: 'Home Improvement', bestCard: 'Freedom Unlimited', issuer: 'Chase', rate: '1.5%', color: 'linear-gradient(135deg, #1565c0, #42a5f5)' },
  'lowes.com': { category: 'Home Improvement', bestCard: 'Freedom Unlimited', issuer: 'Chase', rate: '1.5%', color: 'linear-gradient(135deg, #1565c0, #42a5f5)' },
  'shell.com': { category: 'Gas', bestCard: 'Custom Cash', issuer: 'Citi', rate: '5%', color: 'linear-gradient(135deg, #0d47a1, #1976d2)' },
  'exxon.com': { category: 'Gas', bestCard: 'Custom Cash', issuer: 'Citi', rate: '5%', color: 'linear-gradient(135deg, #0d47a1, #1976d2)' },
  'cvs.com': { category: 'Drugstores', bestCard: 'Freedom Flex', issuer: 'Chase', rate: '3%', color: 'linear-gradient(135deg, #1976d2, #64b5f6)' },
  'walgreens.com': { category: 'Drugstores', bestCard: 'Freedom Flex', issuer: 'Chase', rate: '3%', color: 'linear-gradient(135deg, #1976d2, #64b5f6)' },
};

const CATEGORY_CARDS = {
  'dining': { bestCard: 'Custom Cash', issuer: 'Citi', rate: '5%', color: 'linear-gradient(135deg, #0d47a1, #1976d2)' },
  'restaurant': { bestCard: 'Custom Cash', issuer: 'Citi', rate: '5%', color: 'linear-gradient(135deg, #0d47a1, #1976d2)' },
  'food': { bestCard: 'Gold Card', issuer: 'American Express', rate: '4x', color: 'linear-gradient(135deg, #bf953f, #fcf6ba)' },
  'travel': { bestCard: 'Venture X', issuer: 'Capital One', rate: '5x', color: 'linear-gradient(135deg, #212121, #424242)' },
  'hotel': { bestCard: 'Venture X', issuer: 'Capital One', rate: '5x', color: 'linear-gradient(135deg, #212121, #424242)' },
  'flight': { bestCard: 'Sapphire Reserve', issuer: 'Chase', rate: '3x', color: 'linear-gradient(135deg, #0d47a1, #1565c0)' },
  'airline': { bestCard: 'Sapphire Reserve', issuer: 'Chase', rate: '3x', color: 'linear-gradient(135deg, #0d47a1, #1565c0)' },
  'groceries': { bestCard: 'Blue Cash Preferred', issuer: 'American Express', rate: '6%', color: 'linear-gradient(135deg, #1976d2, #2196f3)' },
  'grocery': { bestCard: 'Blue Cash Preferred', issuer: 'American Express', rate: '6%', color: 'linear-gradient(135deg, #1976d2, #2196f3)' },
  'supermarket': { bestCard: 'Blue Cash Preferred', issuer: 'American Express', rate: '6%', color: 'linear-gradient(135deg, #1976d2, #2196f3)' },
  'gas': { bestCard: 'Custom Cash', issuer: 'Citi', rate: '5%', color: 'linear-gradient(135deg, #0d47a1, #1976d2)' },
  'fuel': { bestCard: 'Custom Cash', issuer: 'Citi', rate: '5%', color: 'linear-gradient(135deg, #0d47a1, #1976d2)' },
  'streaming': { bestCard: 'Blue Cash Preferred', issuer: 'American Express', rate: '6%', color: 'linear-gradient(135deg, #1976d2, #2196f3)' },
  'entertainment': { bestCard: 'Savor One', issuer: 'Capital One', rate: '3%', color: 'linear-gradient(135deg, #c62828, #ef5350)' },
  'movies': { bestCard: 'Savor One', issuer: 'Capital One', rate: '3%', color: 'linear-gradient(135deg, #c62828, #ef5350)' },
};

document.addEventListener('DOMContentLoaded', async () => {
  const siteName = document.getElementById('site-name');
  const recommendation = document.getElementById('recommendation');
  const noRecommendation = document.getElementById('no-recommendation');
  const cardName = document.getElementById('card-name');
  const cardIssuer = document.getElementById('card-issuer');
  const cardPreview = document.getElementById('card-preview');
  const rewardRate = document.getElementById('reward-rate');
  const rewardType = document.getElementById('reward-type');
  const searchBtn = document.getElementById('search-btn');
  const merchantInput = document.getElementById('merchant-input');
  const searchResult = document.getElementById('search-result');
  
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.url) {
      const url = new URL(tab.url);
      const domain = url.hostname.replace('www.', '');
      siteName.textContent = domain;
      
      const merchantData = MERCHANT_CATEGORIES[domain];
      if (merchantData) {
        recommendation.classList.remove('hidden');
        noRecommendation.classList.add('hidden');
        
        cardName.textContent = merchantData.bestCard;
        cardIssuer.textContent = merchantData.issuer;
        cardPreview.style.background = merchantData.color;
        rewardRate.textContent = merchantData.rate;
        rewardType.textContent = `on ${merchantData.category}`;
      } else {
        recommendation.classList.add('hidden');
        noRecommendation.classList.remove('hidden');
      }
    }
  } catch (e) {
    siteName.textContent = 'Unknown';
  }
  
  function searchMerchant() {
    const query = merchantInput.value.toLowerCase().trim();
    if (!query) return;
    
    for (const [domain, data] of Object.entries(MERCHANT_CATEGORIES)) {
      if (domain.includes(query) || data.category.toLowerCase().includes(query)) {
        showSearchResult(data);
        return;
      }
    }
    
    for (const [category, data] of Object.entries(CATEGORY_CARDS)) {
      if (category.includes(query)) {
        showSearchResult(data);
        return;
      }
    }
    
    searchResult.innerHTML = `
      <div style="text-align: center; color: rgba(255,255,255,0.6);">
        No specific match found. Use your default cash back card.
      </div>
    `;
    searchResult.classList.remove('hidden');
  }
  
  function showSearchResult(data) {
    searchResult.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-weight: 600;">${data.bestCard}</div>
          <div style="font-size: 12px; color: rgba(255,255,255,0.6);">${data.issuer}</div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 20px; font-weight: 700; color: #8b5cf6;">${data.rate}</div>
        </div>
      </div>
    `;
    searchResult.classList.remove('hidden');
  }
  
  searchBtn.addEventListener('click', searchMerchant);
  merchantInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchMerchant();
  });
  
  document.getElementById('open-dashboard').addEventListener('click', (e) => {
    e.preventDefault();
    chrome.tabs.create({ url: 'https://onecard.replit.app' });
  });
});
