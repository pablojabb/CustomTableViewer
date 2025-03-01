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
      <div className=" w-80 h-full flex flex-col justify-center items-center rounded-lg ">
        <header className="w-full flex mb-2 justify-between items-center bg-gray-600">
          <h1 className="text-xl font-bold my-1  text-center px-2">CTV</h1>
          <h1 className="text-sm text-gray-700 text-center px-2">Theme btn</h1>
        </header>
        <div className="w-[95%] flex rounded-lg justify-between items-center p-3 my-2 bg-blue-400">
          <p className="text-sm text-gray-700 text-center ">How to use?</p>
          <p className="text-sm text-gray-700 text-center  ">down icon</p>
        </div>
        <div className="w-[80%] mt-3 bg-green-100 ">
          <h1 className="text-lg font-bold text-left ">Status:</h1>
        </div>
        <div className="w-[80%] flex justify-between items-center">
          <button
            className="p-3 rounded-lg my-2 bg-blue-500 text-white"
            onClick={handleExtractTable}>
            Extract Table Data
          </button>

          <button
            className="p-3 rounded-lg my-2 bg-gray-400 text-white"
            onClick={handleClick}>
            Open Table Page
          </button>
        </div>
        <footer className="w-full flex justify-center items-center mt-4 bg-gray-600">
          <h1 className="text-sm font-serif mb-1 mt-2 text-center px-2">Made with <span className="inline-block animate-pulse">❤️‍🔥</span>—<a href="">pablojabb</a></h1>
        </footer>
      </div>
    </>
  )
}

export default IndexPopup
