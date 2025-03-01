import { useState } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

const ReadMoreAccordion = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-[90%] rounded-md bg-light-content-bg dark:bg-dark-content-bg p-3 my-2">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        <h1 className="text-sm dark:text-dark-content-text text-light-content-text text-center font-semibold">
          How to use?
        </h1>
        {isOpen ? (
          <FiChevronUp className="text-dark-content-text dark:text-light-content-text text-lg" />
        ) : (
          <FiChevronDown className="text-dark-content-text dark:text-light-content-text  text-lg" />
        )}
      </div>
      {isOpen && (
        <p className="mt-2 text-xs dark:text-dark-content-text text-light-content-text cursor-default">
          1st step: This is a guide on how to use the feature. Click the arrow. <br />
          2nd step: This is a guide on how to use the feature. Click the arrow <br />
          last step: This is a guide on how to use the feature. Click the arrow <br />
        </p>
      )}
    </div>
  )
}

export default ReadMoreAccordion
