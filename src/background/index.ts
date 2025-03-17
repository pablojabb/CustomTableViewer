chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("[Background] Received message:", message)

  if (message.action === "openNewTab") {
    console.log("[Background] Opening new tab...")

    chrome.tabs.create(
      { url: chrome.runtime.getURL("./tabs/table-view.html") },
      (tab) => {
        console.log("[Background] New tab opened with ID:", tab.id)
        sendResponse({ success: true, tabId: tab.id })
      }
    )

    return true 
  }
})
