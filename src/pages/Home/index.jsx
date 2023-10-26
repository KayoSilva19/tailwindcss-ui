import { useState } from 'react'
import { Header } from '../../components/Header'

export const Home = () => {
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
    <>
      <Header handleChangeTheme={handleChangeTheme} currentTheme={theme} />
    </>
  )
}
