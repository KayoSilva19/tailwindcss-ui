export const Button = ({ active, children }) => {
  const backgroundColor = active ? 'bg-gray-200 dark:bg-gray-900' : ''
  return (
    <>
      <button
        className={`
        py-2 px-4 w-full text-left rounded-lg
        ${backgroundColor}
        hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors
      `}
      >
        {children}
      </button>
    </>
  )
}
