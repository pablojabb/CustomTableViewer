import { useReducer } from "react"

import "index.css"

function IndexPopup() {
  const handleClick = async () => {
    // Send a message to background script to open new tab
    chrome.runtime.sendMessage({ action: "openNewTab" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error(
          "[Content Script] Error sending message:",
          chrome.runtime.lastError
        )
      } else {
        console.log(
          "[Content Script] Sent message to open new tab, response:",
          response
        )
      }
    })
  }

  //TODO: Clear storage if tab is closed
  //TODO: No table render diff panel

  return (
    <button className="p-4 rounded-lg m-3 bg-gray-400" onClick={handleClick}>
      Run Content Script
    </button>
  )
}

export default IndexPopup
