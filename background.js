let count = 0;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ count });
});