import { useState } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

interface AboutAccordion {
  title: string
  content: string[]
}

const AboutAccordion: React.FC<AboutAccordion> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="w-[90%] rounded-md transition-colors 
               bg-light-s-btn dark:bg-dark-s-btn 
               hover:bg-light-s-btn-hover dark:hover:bg-dark-s-btn-hover 
               active:bg-light-s-btn-active dark:active:bg-dark-s-btn-active
               text-light-important-text dark:text-dark-important-text p-3 my-2 ">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-sm  text-center font-semibold">{title}</h2>
        {isOpen ? (
          <FiChevronUp className=" text-lg" />
        ) : (
          <FiChevronDown className="text-lg" />
        )}
      </div>
      {isOpen && (
        <div className="mt-2 text-sm font-sans  cursor-default">
          {content.map((sentence, index) => (
            <p key={index} className="text-justify text-xs">
              {sentence}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default AboutAccordion
