chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openNewTab") {
    chrome.tabs.create(
      { url: chrome.runtime.getURL("./tabs/timetablePage.html") },
      (tab) => {
        sendResponse({ success: true, tabId: tab.id })
      }
    )
    return true
  }
})
