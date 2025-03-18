import { useState } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <footer className="w-full flex flex-col items-center mt-6 py-2 border-t-[1px] border-light-content-text dark:border-light-m-btn inset-shadow-md rounded-md inset-shadow-indigo-400/50">
      <div
        className="flex justify-between items-center cursor-pointer w-full py-2 px-3 "
        onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-xs font-sans font-medium text-light-important-text dark:text-dark-important-text text-center">
          {isOpen ? "Show Less" : "About the Dev"}
        </h2>
        {isOpen ? (
          <FiChevronUp className="text-light-important-text dark:text-dark-important-text text-lg" />
        ) : (
          <FiChevronDown className="text-light-important-text dark:text-dark-important-text text-lg" />
        )}
      </div>
      {isOpen && (
        <div className=" text-xs font-sans dark:text-dark-important-text text-light-important-text cursor-default text-center px-2 leading-5">
           <h1 className="mb-1 mt-2">
            🚀 Hey! If you love geeking over tech 🖥️, or just want to build something cool with me, check out my {" "}
            <a
              className="font-semibold underline underline-offset-4"
              href="https://bento4tfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio 
            </a>
            🌍.  If you're into business 💼 and need something developed, hit me up on {" "}
            <a
              className="font-semibold underline underline-offset-4"
              href="https://ko-fi.com/pablojabb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ko-fi
            </a>
            {" "} ☕ and let’s make it happen! 🔥🚀
          </h1>
          <h1 className="mb-3 mt-4">
            Made with <span className="inline-block animate-pulse">❤️‍🔥</span> by{" "}
            <a
              className="font-semibold underline underline-offset-4"
              href="https://github.com/pablojabb"
              target="_blank"
              rel="noopener noreferrer">
              @pablojabb
            </a>
          </h1>
        </div>
      )}
    </footer>
  )
}

export default Footer
