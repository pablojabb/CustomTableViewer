import { useState } from "react"

function IndexNewtab() {
  const [data, setData] = useState("")

  // Prevent component from loading unless it's opened explicitly
  if (window.location.href !== chrome.runtime.getURL("newtab.html")) {
    return null
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 16 }}>
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />
    </div>
  )
}

export default IndexNewtab
