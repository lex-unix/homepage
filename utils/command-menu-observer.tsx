import React, { createContext, useCallback, useState } from 'react'

interface CommandMenuValue {
  open: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

// @ts-ignore
export const CommandMenuContext = createContext<CommandMenuValue>({})

interface Props {
  children: React.ReactNode
}

const CommandMenuObserver: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleMenuToggle = useCallback(() => {
    setOpen(open => !open)
  }, [])

  const handleMenuClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <CommandMenuContext.Provider
      value={{ open, toggleMenu: handleMenuToggle, closeMenu: handleMenuClose }}
    >
      {children}
    </CommandMenuContext.Provider>
  )
}

export default CommandMenuObserver
