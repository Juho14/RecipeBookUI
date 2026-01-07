import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import type { FC } from 'react'

interface GlobalDialogProps {
  title: string
  content: FC<{ onClose: () => void }>
  isOpen: boolean
  onClose?: (() => void) | null
}

const GlobalDialog = ({
  title,
  content: Content,
  isOpen,
  onClose,
}: GlobalDialogProps) => {
  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }
  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Content onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default GlobalDialog
