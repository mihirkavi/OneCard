const MERCHANT_CATEGORIES = {
  'amazon.com': { category: 'Online Shopping', bestCard: 'Sapphire Preferred', issuer: 'Chase', rate: '1x' },
  'walmart.com': { category: 'Groceries', bestCard: 'Blue Cash Preferred', issuer: 'Amex', rate: '6%' },
  'target.com': { category: 'Groceries', bestCard: 'Blue Cash Preferred', issuer: 'Amex', rate: '6%' },
  'costco.com': { category: 'Groceries', bestCard: 'Blue Cash Preferred', issuer: 'Amex', rate: '6%' },
  'starbucks.com': { category: 'Dining', bestCard: 'Custom Cash', issuer: 'Citi', rate: '5%' },
  'ubereats.com': { category: 'Dining', bestCard: 'Gold Card', issuer: 'Amex', rate: '4x' },
  'doordash.com': { category: 'Dining', bestCard: 'Gold Card', issuer: 'Amex', rate: '4x' },
  'netflix.com': { category: 'Streaming', bestCard: 'Blue Cash Preferred', issuer: 'Amex', rate: '6%' },
  'hulu.com': { category: 'Streaming', bestCard: 'Blue Cash Preferred', issuer: 'Amex', rate: '6%' },
  'spotify.com': { category: 'Streaming', bestCard: 'Blue Cash Preferred', issuer: 'Amex', rate: '6%' },
  'airbnb.com': { category: 'Travel', bestCard: 'Venture X', issuer: 'Capital One', rate: '5x' },
  'expedia.com': { category: 'Travel', bestCard: 'Venture X', issuer: 'Capital One', rate: '5x' },
  'hotels.com': { category: 'Travel', bestCard: 'Venture X', issuer: 'Capital One', rate: '5x' },
  'booking.com': { category: 'Travel', bestCard: 'Venture X', issuer: 'Capital One', rate: '5x' },
  'united.com': { category: 'Travel', bestCard: 'Sapphire Reserve', issuer: 'Chase', rate: '3x' },
  'delta.com': { category: 'Travel', bestCard: 'Sapphire Reserve', issuer: 'Chase', rate: '3x' },
  'shell.com': { category: 'Gas', bestCard: 'Custom Cash', issuer: 'Citi', rate: '5%' },
  'cvs.com': { category: 'Drugstores', bestCard: 'Freedom Flex', issuer: 'Chase', rate: '3%' },
  'walgreens.com': { category: 'Drugstores', bestCard: 'Freedom Flex', issuer: 'Chase', rate: '3%' },
};

function createBanner(data) {
  const banner = document.createElement('div');
  banner.id = 'onecard-banner';
  banner.innerHTML = `
    <div class="onecard-content">
      <div class="onecard-logo">OC</div>
      <div class="onecard-info">
        <div class="onecard-title">Best Card: <strong>${data.bestCard}</strong></div>
        <div class="onecard-rate">${data.rate} on ${data.category}</div>
      </div>
      <button class="onecard-close" id="onecard-close">&times;</button>
    </div>
  `;
  document.body.appendChild(banner);
  
  document.getElementById('onecard-close').addEventListener('click', () => {
    banner.remove();
  });
  
  setTimeout(() => {
    if (document.getElementById('onecard-banner')) {
      banner.classList.add('onecard-hidden');
      setTimeout(() => banner.remove(), 300);
    }
  }, 8000);
}

function init() {
  const domain = window.location.hostname.replace('www.', '');
  const merchantData = MERCHANT_CATEGORIES[domain];
  
  if (merchantData && !document.getElementById('onecard-banner')) {
    setTimeout(() => createBanner(merchantData), 1500);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
