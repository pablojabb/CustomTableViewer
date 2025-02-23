import { useReducer } from "react"

import "index.css"

function IndexPopup() {
  const [count, increase] = useReducer((c) => c + 1, 0)

  const openNewTab = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("newtab.html") })
  }

  return (
    <button
      onClick={openNewTab}
      type="button"
      className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-300 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Open New Tab
    </button>
  )
}

export default IndexPopup
