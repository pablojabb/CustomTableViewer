import { useState } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

interface ReadMoreAccordionProps {
  title: string
  content: string[]
}

const ReadMoreAccordion: React.FC<ReadMoreAccordionProps> = ({
  title,
  content
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="w-[90%] rounded-md bg-light-content-bg dark:bg-dark-m-btn hover:bg-light-m-btn-hover dark:hover:bg-dark-m-btn-hover 
               active:bg-light-m-btn-active dark:active:bg-dark-m-btn-active p-3 my-2">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-sm dark:text-dark-content-text text-light-content-text text-center font-semibold">
          {title}
        </h2>
        {isOpen ? (
          <FiChevronUp className="text-dark-content-text dark:text-light-content-text text-lg" />
        ) : (
          <FiChevronDown className="text-dark-content-text dark:text-light-content-text text-lg" />
        )}
      </div>
      {isOpen && (
        <div className="mt-2 text-sm font-sans dark:text-dark-content-text text-light-content-text cursor-default">
          {content.map((sentence, index) => (
            <p key={index} className="text-justify text-xs py-1">
              {sentence}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default ReadMoreAccordion
