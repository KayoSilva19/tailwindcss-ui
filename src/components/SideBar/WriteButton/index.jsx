export const WriteButton = ({ children }) => {
  return (
    <>
      <button
        className="
        bg-primary-300 hover:bg-primary-400 transition-all
        dark:bg-primary-500 dark:hover:bg-primary-600 
        py-2 w-full rounded-lg 
      "
      >
        {children}
      </button>
    </>
  )
}
