import { useReducer } from "react"

import "index.css"

function IndexPopup() {
  const [count, increase] = useReducer((c) => c + 1, 0)


  return (
    <button
        onClick={() => {
          chrome.tabs.create({
            url: "./tabs/table-view.html"
          })
        }}>
        open tab page
      </button>
  )
}

export default IndexPopup
