import {
  Archive,
  EnvelopeOpen,
  FileText,
  List,
  PaperPlaneTilt,
  PencilSimpleLine,
  Trash,
  WarningCircle,
  X,
} from '@phosphor-icons/react'
import { Button } from './Button'
import { useState } from 'react'

export const BottomBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const inlineIcon = 'inline mb-1 sm:mr-2'
  const smOnlyText = 'hidden sm:inline'

  function handleChangeStateMenu() {
    console.log(isMenuOpen)
    setIsMenuOpen((state) => !state)
  }
  return (
    <div className="w-full flex gap-2 md:hidden items-center relative">
      <Button>
        <PencilSimpleLine className={inlineIcon} />
        <span className={smOnlyText}>Escrever</span>
      </Button>
      <Button active>
        <FileText className={inlineIcon} />
        <span className={smOnlyText}>Caixa de Entrada</span>
      </Button>
      <Button>
        <EnvelopeOpen className={inlineIcon} />
        <span className={smOnlyText}>Rascunhos</span>
      </Button>
      <Button handleChangeStateMenu={handleChangeStateMenu}>
        {isMenuOpen ? (
          <>
            <X className={inlineIcon} />
            <span className={smOnlyText}>Fechar</span>
          </>
        ) : (
          <>
            <List className={inlineIcon} />
            <span className={smOnlyText}>Mais</span>
          </>
        )}
      </Button>

      <div
        className={`
          ${isMenuOpen ? 'absolute' : 'hidden'}
           right-0 bottom-12 flex flex-col gap-2 w-40
        `}
      >
        <Button>
          <PaperPlaneTilt size={18} className={inlineIcon} />
          <span className={smOnlyText}>Enviados</span>
        </Button>
        <Button>
          <Archive size={18} className={inlineIcon} />
          <span className={smOnlyText}>Arquivados</span>
        </Button>
        <Button>
          <WarningCircle size={18} className={inlineIcon} />
          <span className={smOnlyText}>Spam</span>
        </Button>
        <Button>
          <Trash size={18} className={inlineIcon} />
          <span className={smOnlyText}>Lixeira</span>
        </Button>
      </div>
    </div>
  )
}
