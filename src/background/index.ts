chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openNewTab") {
    chrome.tabs.create(
      { url: chrome.runtime.getURL("./tabs/table-view.html") },
      (tab) => {
        sendResponse({ success: true, tabId: tab.id })
      }
    )
    return true
  }

  if (message.action === "openSettingstab") {
    chrome.tabs.create(
      { url: chrome.runtime.getURL("./tabs/settingsPage.html") },
      (tab) => {
        sendResponse({ success: true, tabId: tab.id })
      }
    )
    return true
  }
})
