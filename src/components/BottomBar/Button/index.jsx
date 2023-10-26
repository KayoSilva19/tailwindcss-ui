export const Button = ({ active, children, handleChangeStateMenu }) => {
  const isActive = active
    ? 'bg-primary-300 dark:bg-primary-600'
    : 'bg-gray-200 dark:bg-gray-900'
  return (
    <>
      <button
        onClick={handleChangeStateMenu}
        className={`
          flex-1 p-2 mb-0.5 rounded-lg shadow
          text-gray-900 dark:text-gray-50
          ${isActive}
        `}
      >
        {children}
      </button>
    </>
  )
}
