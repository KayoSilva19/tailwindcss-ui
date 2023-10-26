import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('dark')

  function handleChangeTheme() {
    const html = document.querySelector('html')

    if (theme === 'dark') {
      setTheme('light')
      return html.classList.remove('dark')
    }

    setTheme('dark')
    html.classList.add('dark')
  }

  return (
    <div
      className="
        h-screen bg-zinc-100 text-zinc-950 dark:bg-zinc-800 
         dark:text-zinc-50 grid place-content-center
    "
    >
      <h1 className="text-center text-3xl">Ready to start with Tailwind!</h1>
      <button
        className="
          block w-fit mx-auto my-r px-4 py-2 rounded-lg
          border-transparent hover:border-cyan-500 border-2 
          transition-colors
        "
        onClick={() => setCount(count + 1)}
      >
        Count is {count}
      </button>
      <button
        className="
          block w-fit mx-auto my-r px-4 py-2 rounded-lg
          border-transparent hover:border-cyan-500 border-2 
          transition-colors
        "
        onClick={handleChangeTheme}
      >
        Theme: {theme}
      </button>
    </div>
  )
}

export default App
