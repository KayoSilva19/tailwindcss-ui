import {
  Archive,
  EnvelopeOpen,
  FileText,
  PaperPlaneTilt,
  PencilSimpleLine,
  Trash,
  WarningCircle,
} from '@phosphor-icons/react'
import { Button } from './Button'
import { WriteButton } from './WriteButton'

export const SideBar = () => {
  const inlineIcon = 'inline mr-1 mb-1'

  return (
    <aside className="hidden md:flex flex-col items-start gap-2 grow-0 shrink basis-48">
      <WriteButton>
        <PencilSimpleLine size={18} className={inlineIcon} />
        Escrever
      </WriteButton>
      <Button active>
        <EnvelopeOpen size={18} className={inlineIcon} />
        Caixa de Entrada
      </Button>
      <Button>
        <PaperPlaneTilt size={18} className={inlineIcon} />
        Enviados
      </Button>
      <Button>
        <FileText size={18} className={inlineIcon} />
        Rascunhos
      </Button>
      <Button>
        <Archive size={18} className={inlineIcon} />
        Arquivados
      </Button>
      <Button>
        <WarningCircle size={18} className={inlineIcon} />
        Spam
      </Button>
      <Button>
        <Trash size={18} className={inlineIcon} />
        Lixeira
      </Button>
    </aside>
  )
}
