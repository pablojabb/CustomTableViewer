chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // console.log("[Background] Received message:", message)

  if (message.action === "openNewTab") {

    chrome.tabs.create(
      { url: chrome.runtime.getURL("./tabs/table-view.html") },
      (tab) => {
        sendResponse({ success: true, tabId: tab.id })
      }
    )

    return true 
  }
})
