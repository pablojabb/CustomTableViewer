import "index.css"

function IndexPopup() {
  const handleClick = async () => {
    handleExtractTable()
    // Send a message to the background script to open a new tab
    chrome.runtime.sendMessage({ action: "openNewTab" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error(
          "[Popup] Error sending message to background:",
          chrome.runtime.lastError
        )
      } else {
        console.log("[Popup] Sent message to open new tab, response:", response)
      }
    })
  }

  const handleExtractTable = async () => {
    // Send a message to the content script to extract table data
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) return

      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "extract_table" },
        (response) => {
          if (chrome.runtime.lastError) {
            console.error(
              "[Popup] Error sending message to content script:",
              chrome.runtime.lastError
            )
          } else {
            console.log(
              "[Popup] Triggered table extraction, response:",
              response
            )
          }
        }
      )
    })
  }

  return (
    <>
      <div className=" w-80 h-full flex flex-col justify-center items-center rounded-lg">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold my-3  text-center">
            Custom Table Viewer
          </h1>
          <p className="text-sm text-gray-700 text-center px-4 mb-3">
             Visualize your schedule and detect conflicts with a
            structured custom table viewer.
          </p>
          <button
            className="p-3 rounded-lg mb-2 bg-gray-400"
            onClick={handleClick}>
            Open Table Page
          </button>
        </div>

        {/* <button className="p-4 rounded-lg m-3 bg-blue-500 text-white" onClick={handleExtractTable}>
        Extract Table Data
      </button> */}
      </div>
    </>
  )
}

export default IndexPopup
