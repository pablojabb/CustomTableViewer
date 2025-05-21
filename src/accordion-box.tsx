import { useState } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { cn } from "./lib/utils"

type Variant = "default" | "secondary" | "primary"

interface ReadMoreAccordionProps {
  title: string
  content: string[]
  variant?: Variant
  className?: string
}

const variantStyles: Record<Variant, string> = {
  default:
    "bg-light-content-bg dark:bg-dark-m-btn hover:bg-light-m-btn-hover dark:hover:bg-dark-m-btn-hover active:bg-light-m-btn-active dark:active:bg-dark-m-btn-active text-light-content-text dark:text-dark-content-text",
  secondary:
    "bg-light-surface dark:bg-dark-surface hover:bg-light-muted dark:hover:bg-dark-muted active:bg-light-muted/70 dark:active:bg-dark-muted/70 text-light-muted-foreground dark:text-dark-muted-foreground",
  primary:
    "bg-light-primary dark:bg-dark-primary hover:bg-light-primary-hover dark:hover:bg-dark-primary-hover active:bg-light-primary-active dark:active:bg-dark-primary-active text-light-on-primary dark:text-dark-on-primary",
}

const ReadMoreAccordion: React.FC<ReadMoreAccordionProps> = ({
  title,
  content,
  variant = "default",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        "w-[90%] rounded-md p-3 my-2 transition-colors motion-safe:transition-colors",
        variantStyles[variant],
        className
      )}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-sm font-semibold text-center">{title}</h2>
        <div
          className={cn(
            "text-lg transform motion-safe:transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        >
          <FiChevronDown />
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-500 ease-in-out motion-safe:animate-fade-in",
          isOpen ? "max-h-96 mt-2" : "max-h-0"
        )}
      >
        <div className="text-sm font-sans cursor-default space-y-2">
          {content.map((sentence, index) => (
            <p key={index} className="text-justify text-xs">
              {sentence}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReadMoreAccordion