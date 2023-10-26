import { Lightning } from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import { Logo } from './Logo'
import { SearchForm } from './SearchForm'

export const Header = ({ handleChangeTheme, currentTheme }) => {
  return (
    <header
      className="
      px-4 xl:px-6 h-16 lg:h-20
      flex items-center justify-between
      gap-6 md:gap-16 xl:gap-32
      bg-gray-100 dark:bg-gray-800
    "
    >
      <Logo />
      <SearchForm />
      <button onClick={handleChangeTheme}>
        {currentTheme === 'dark' ? (
          <Lightning
            size={32}
            className="
              text-gray-50 transition-all ease-linear
              hover:scale-125 hover:text-primary-400 
            "
          />
        ) : (
          <Lightning
            size={32}
            weight="fill"
            className="
            text-gray-800 transition-all ease-linear
            hover:scale-125 hover:text-primary-400 
        "
          />
        )}
      </button>
      <Avatar />
    </header>
  )
}
