import { Lightning } from '@phosphor-icons/react'
import { Avatar } from '../Avatar'
import { Logo } from '../Logo'
import { SearchForm } from '../SearchForm'

export const Header = ({ handleChangeTheme, currentTheme }) => {
  return (
    <header
      className="
      px-4 xl:px-6 h-16 lg:h-20
      flex items-center justify-between
      gap-6 md:gap-16 xl:gap-32
      bg-zinc-100 dark:bg-zinc-800
    "
    >
      <Logo />
      <SearchForm />
      <button onClick={handleChangeTheme}>
        {currentTheme === 'dark' ? (
          <Lightning
            size={32}
            className="
              text-white transition-all ease-linear
              hover:scale-125 hover:text-emerald-400 
            "
          />
        ) : (
          <Lightning
            size={32}
            weight="fill"
            className="
            transition-all ease-linear
            hover:scale-125 hover:text-emerald-400 
        "
          />
        )}
      </button>
      <Avatar />
    </header>
  )
}
