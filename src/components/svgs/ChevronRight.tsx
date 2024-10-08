interface ChevronRightProps {
  className?: string
}

const ChevronRight: React.FC<ChevronRightProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    className={className ?? ""}
  >
    <path
      d="M9 20.6c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.2 0-1.6l6.7-6.7-6.7-6.7c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0l7.5 7.5c.4.4.4 1.2 0 1.6l-7.5 7.5c-.2.2-.5.3-.8.3z"
      fill="currentColor"
    ></path>
  </svg>
)

export default ChevronRight
