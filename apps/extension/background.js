chrome.runtime.onInstalled.addListener(() => {
  console.log('OneCard extension installed');
});

chrome.action.onClicked.addListener((tab) => {
  console.log('OneCard icon clicked');
});
