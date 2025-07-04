import "index.css"

import { useEffect, useState } from "react"
import { FiChevronLeft, FiChevronRight, FiSettings } from "react-icons/fi"

import Footer from "~tabs/Footer"

import ReadMoreAccordion from "./accordionBox"
import DarkModeToggle from "./darkModeToggle"

function IndexPopup() {
  const [status, setStatus] = useState("No table data extracted")

  const openNewtab = async () => {
    chrome.runtime.sendMessage({ action: "openNewTab" }, (response) => {})
  }

  const handleExtractTable = async () => {
    setStatus("Extracting...")
    setTimeout(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) return

        chrome.tabs.sendMessage(
          tabs[0].id!,
          { action: "extract_table" },
          (response) => {
            if (chrome.runtime.lastError) {
              setStatus("No table data extracted")
            } else {
              if (response?.status === "Table extracted") {
                setStatus("Table data ready in new page")
              } else if (response?.status === "no_tabledata") {
                setStatus("No table extracted")
              } else {
                setStatus("No table data extracted")
              }
            }
          }
        )
      })
    }, 500)
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const [tableCount, setTableCount] = useState(0)

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      chrome.tabs.sendMessage(tab.id, { action: "get_table_count" }, (res) => {
        const count = res?.count || 0
        setTableCount(count)

        if (count > 0) {
          chrome.tabs.sendMessage(
            tab.id,
            { action: "highlight_table", index: 0 },
            (res) => {
              if (res?.status === "highlighted") {
                console.log("[DEBUG] Auto-highlighted first table")
                setCurrentIndex(0)
              } else {
                console.warn("[DEBUG] Failed to auto-highlight first table")
              }
            }
          )
        }
      })
    })
  }, [])

  const navigateTable = (direction: "prev" | "next") => {
    let newIndex = currentIndex + (direction === "next" ? 1 : -1)
    if (newIndex < 0) newIndex = 0
    if (newIndex >= tableCount) newIndex = tableCount - 1

    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      chrome.tabs.sendMessage(
        tab.id,
        { action: "highlight_table", index: newIndex },
        (res) => {
          if (res?.status === "highlighted") {
            setCurrentIndex(newIndex)
          }
        }
      )
    })
  }

  return (
    <>
      <div className=" w-[18rem] h-full flex flex-col justify-center items-center bg-light-bg dark:bg-dark-bg ">
        <header className="w-full flex justify-between items-center mb-4 py-1">
          <h1 className="text-lg font-bold font-sans my-1 text-light-important-text dark:text-dark-text text-center px-2">
            CTV
          </h1>
          <DarkModeToggle />
        </header>
        <ReadMoreAccordion
          title="What is CTV and How to Use It?"
          content={[
            "Custom Table Viewer is designed for the EVSU Student Portal to help visualize schedules in a clear and organized manner.",
            " ",
            "Step 1: Navigate to the Pre-registration or Subjects Enrolled page.",
            " ",
            "Step 2: Select the table and extract its data by clicking the 'Extract Data' button.",
            " ",
            "Last Step: Click the 'View Timetable' button to open a new tab with the Custom Table.",
            " "
          ]}
          variant="default"
        />

        <div className="w-[90%] mt-8 pl-2 ">
          <div className="flex justify-center gap-3 items-center mb-2">
            <button
              disabled={tableCount <= 1}
              className={`text-light-important-text dark:text-dark-important-text text-2xl ${
                tableCount <= 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => navigateTable("prev")}>
              <FiChevronLeft />
            </button>
            <h2 className="inline-flex text-2xl font-semibold text-left text-light-important-text dark:text-dark-important-text">
              Table {tableCount > 0 ? currentIndex + 1 : 0} out of {tableCount}
            </h2>
            <button
              disabled={tableCount <= 1}
              className={`text-light-important-text dark:text-dark-important-text text-2xl ${
                tableCount <= 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => navigateTable("next")}>
              <FiChevronRight />
            </button>
          </div>
          <h1 className="text-base text-center font-semibold text-light-important-text dark:text-dark-important-text mt-4">
            Status: <span className="font-normal text-sm ml-1 ">{status}</span>
          </h1>
        </div>
        <div className="w-[90%] mt-2 flex justify-center gap-4 items-center">
          <button
            className="px-3 py-2 text-sm font-semibold rounded-md my-1 transition-colors 
               bg-light-s-btn dark:bg-dark-s-btn 
               hover:bg-light-s-btn-hover dark:hover:bg-dark-s-btn-hover 
               active:bg-light-s-btn-active dark:active:bg-dark-s-btn-active
               text-light-important-text dark:text-dark-important-text"
            onClick={handleExtractTable}>
            Extract Data
          </button>
          <button
            className="px-3 py-2 text-sm font-semibold rounded-md my-1 transition-colors 
               bg-light-m-btn dark:bg-dark-m-btn 
               hover:bg-light-m-btn-hover dark:hover:bg-dark-m-btn-hover 
               active:bg-light-m-btn-active dark:active:bg-dark-m-btn-active
               text-light-content-text dark:text-dark-content-text"
            onClick={openNewtab}>
            View Timetable
          </button>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default IndexPopup
