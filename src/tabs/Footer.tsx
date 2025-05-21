import { useState,useEffect } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { cn } from "~lib/utils"  // Assuming you have the cn utility

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showTitle, setShowTitle] = useState("The Dev 🧑🏾‍💻")

  //dance with the devil (chose to advertise over component reusability)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(isOpen ? "Show Less " : "The Dev 🧑🏾‍💻")
    }, 200)

    return () => clearTimeout(timer)
  }, [isOpen])

  return (
    <footer className="w-full flex flex-col items-center mt-10 py-2 px-2 border-t-[1px] border-light-content-text dark:border-light-m-btn inset-shadow-md rounded-md inset-shadow-indigo-400/50">
      <div
        className="flex justify-center items-center cursor-pointer w-full py-1 px-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xs font-sans font-medium text-light-important-text dark:text-dark-important-text text-center">
          {showTitle}
        </h2>
        <div
          className={cn(
            "text-light-important-text dark:text-dark-important-text text-lg transform motion-safe:transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        >
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-500 ease-in-out",
          isOpen ? "max-h-96 mt-2" : "max-h-0"
        )}
      >
        <div className="text-xs font-sans dark:text-dark-important-text text-light-important-text cursor-default text-center px-2 leading-5">
          <h1 className="mb-1 mt-2">
            🚀 Hey! If you love geeking over tech 🖥️, or just want to build something cool with me, check out my{" "}
            <a
              className="font-semibold underline underline-offset-4"
              href="https://bento4tfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
            🌍. If you're into business 💼 and need something developed, hit me up on{" "}
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
              rel="noopener noreferrer"
            >
              @pablojabb
            </a>
          </h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer