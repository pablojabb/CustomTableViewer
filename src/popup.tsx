import "index.css"

import DarkModeToggle from "./DarkModeToggle "
import ReadMoreAccordion from "~ReadMoreAccordion"

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
      <div className="w-80 h-full flex flex-col justify-center items-center bg-light-bg dark:bg-dark-bg">
        <header className="w-full flex mb-2 justify-between items-center ">
          <h1 className="text-lg font-bold my-1 text-light-text dark:text-dark-text text-center px-2">
            CTV
          </h1>
          <DarkModeToggle />
        </header>
       <ReadMoreAccordion />
        <div className="w-[80%] mt-3  ">
          <h1 className="text-lg font-semibold text-left text-light-important-text dark:text-dark-important-text ">Status:</h1>
        </div>
        <div className="w-[80%] flex justify-between items-center">
          <button
            className="p-3 rounded-md my-2 font-semibold bg-light-m-btn dark:bg-dark-m-btn text-light-important-text dark:text-light-important-text"
            onClick={handleExtractTable}>
            Extract Table Data
          </button>

          <button
            className="p-3 rounded-md my-2 font-semibold bg-light-s-btn dark:bg-dark-s-btn text-light-important-text dark:text-dark-important-text"
            onClick={handleClick}>
            Open Table Page
          </button>
        </div>
        <footer className="w-full flex justify-center items-center mt-4 bg-gray-600">
          <h1 className="text-sm font-sans font-medium mb-1 mt-2 text-center px-2">
            Made with <span className="inline-block animate-pulse">❤️‍🔥</span> by{" "}
            <a
              className="font-semibold hover:underline underline-offset-4"
              href="https://github.com/pablojabb"
              target="_blank"
              rel="noopener noreferrer">
              @pablojabb
            </a>
          </h1>
        </footer>
      </div>
    </>
  )
}

export default IndexPopup
