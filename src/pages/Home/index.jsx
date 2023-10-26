import { useState } from 'react'
import { Header } from '../../components/Header'
import { Container } from '../../components/Container'
import { SideBar } from '../../components/SideBar'
import { BottomBar } from '../../components/BottomBar'

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
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative">
          <SideBar />
          <div className="h-full">
            <p>a</p>
          </div>
          <BottomBar />
        </div>
      </Container>
    </>
  )
}
