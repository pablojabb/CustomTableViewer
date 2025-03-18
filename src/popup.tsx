import "index.css"

import { useState } from "react"

import AboutAccordion from "~AboutAccordion"
import ReadMoreAccordion from "~ReadMoreAccordion"
import Footer from "~tabs/Footer"

import DarkModeToggle from "./DarkModeToggle "

function IndexPopup() {
  const [status, setStatus] = useState("No table data extracted")

  const handleClick = async () => {
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
    setStatus("Extracting...")
    setTimeout(() => {
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

              // Check if the response contains the expected message
              if (response?.status === "Table extracted") {
                setStatus("Table data ready in new page")
              }
            }
          }
        )
      })
    }, 500)
  }

  return (
    <>
      <div className="w-80 h-full flex flex-col justify-center items-center bg-light-bg dark:bg-dark-bg">
        <header className="w-full flex mb-4 justify-between items-center ">
          <h1 className="text-lg font-bold font-sans my-1 text-light-important-text dark:text-dark-text text-center px-2">
            CTV
          </h1>
          <DarkModeToggle />
        </header>
        <AboutAccordion
          title="What is CTV?"
          content={[
            "Custom Table Viewer is designed for the EVSU Student Portal to help visualize schedules in a clear and organized manner."
          ]}
        />
        <ReadMoreAccordion
          title="How to use?"
          content={[
            "Step 1: Navigate to the Pre-registration or Subjects Enrolled page.",
            " ",
            "Step 2: Extract table data by clicking the 'Extract Table Data' button.",
            " ",
            "Last Step: Click the 'Open Table Page' button to open a new tab with the Custom Table.",
            " "
          ]}
        />
        <div className="w-[90%] mt-7 pl-2 ">
          <h1 className="text-lg  font-semibold text-left text-light-important-text dark:text-dark-important-text mb-1">
            Status: <span className="font-normal text-sm ml-1 ">{status}</span>
          </h1>
        </div>
        <div className="w-[90%] flex justify-center gap-4 items-center">
          <button
            className="px-2 py-3 text-sm font-semibold rounded-md my-2 transition-colors 
               bg-light-s-btn dark:bg-dark-s-btn 
               hover:bg-light-s-btn-hover dark:hover:bg-dark-s-btn-hover 
               active:bg-light-s-btn-active dark:active:bg-dark-s-btn-active
               text-light-important-text dark:text-dark-important-text"
            onClick={handleExtractTable}>
            Extract Table Data
          </button>
          <button
            className="px-2 py-3 text-sm font-semibold rounded-md my-2 transition-colors 
               bg-light-m-btn dark:bg-dark-m-btn 
               hover:bg-light-m-btn-hover dark:hover:bg-dark-m-btn-hover 
               active:bg-light-m-btn-active dark:active:bg-dark-m-btn-active
               text-light-content-text dark:text-dark-content-text"
            onClick={handleClick}>
            Open Table Page
          </button>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default IndexPopup
