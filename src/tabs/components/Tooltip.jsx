const Tooltip = ({ x, y, title, details, onClose }) => {
  console.log("Tooltip props:", { x, y, title, details }) // Debugging

  return (
    <div
      className="absolute bg-gray-800 text-white text-sm p-2 rounded shadow-lg z-50"
      style={{ top: y, left: x }}
    >
      <div className="font-bold">{title}</div>
      <div>{details || "No details available"}</div>
      <button onClick={onClose} className="mt-1 text-xs text-red-400">
        Close
      </button>
    </div>
  )
}

export default Tooltip
