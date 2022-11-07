import { Command } from 'cmdk'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import React, { useEffect, useContext, useMemo } from 'react'
import { CommandMenuContext } from '@/utils/command-menu-observer'
import {
  EmailIcon,
  GitHubIcon,
  HomeIcon,
  MoonIcon,
  ProjectIcon,
  SunIcon,
  SystemIcon,
  DashboardIcon,
  TwitterIcon
} from './icons'

const CommandMenu: React.FC = () => {
  const { open, toggleMenu, closeMenu } = useContext(CommandMenuContext)
  const { theme, setTheme, systemTheme } = useTheme()
  const router = useRouter()

  const pages = useMemo(
    () => [
      {
        name: 'Home',
        icon: <HomeIcon />,
        cb: () => router.push('/')
      },
      {
        name: 'Projects',
        icon: <ProjectIcon />,
        cb: () => router.push('/projects')
      },
      {
        name: 'Dashboard',
        icon: <DashboardIcon />,
        cb: () => router.push('/dashboard')
      }
    ],
    [router]
  )

  const socials = useMemo(
    () => [
      {
        name: 'Emal',
        icon: <EmailIcon />,
        cb: () => router.push('mailto:alexmiyin@gmail.com')
      },
      {
        name: 'GitHub',
        icon: <GitHubIcon />,
        cb: () => window.open('https://github.com/lex-unix', '_blank')
      },
      {
        name: 'Twitter',
        icon: <TwitterIcon />,
        cb: () => window.open('https://twitter.com', '_blank')
      }
    ],
    [router]
  )

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleItemClick = () => {
    closeMenu()
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        toggleMenu()
      }

      if (e.key === 'Enter') {
        closeMenu()
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  })

  return (
    <Command.Dialog open={open} onOpenChange={toggleMenu}>
      <Command.Input placeholder="Search" />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Page">
          {pages.map(page => (
            <CommandItem key={page.name} {...page} onClick={handleItemClick} />
          ))}
        </Command.Group>
        <Command.Group heading="Socials">
          {socials.map(social => (
            <CommandItem
              key={social.name}
              {...social}
              onClick={handleItemClick}
            />
          ))}
        </Command.Group>
        <Command.Group heading="Theme">
          <CommandItem
            name={`Change Theme to ${theme === 'light' ? 'Dark' : 'Light'}`}
            icon={theme === 'light' ? <MoonIcon /> : <SunIcon />}
            cb={toggleTheme}
            onClick={handleItemClick}
          />
          <CommandItem
            name="Change Theme to System"
            icon={<SystemIcon />}
            cb={() => setTheme(systemTheme ? systemTheme : 'light')}
            onClick={handleItemClick}
          />
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  )
}

interface CommandItemProps {
  name: string
  icon: React.ReactNode
  cb: () => void
  onClick: () => void
}

const CommandItem: React.FC<CommandItemProps> = ({
  name,
  icon,
  cb,
  onClick
}) => {
  const handleSelectAndClick = () => {
    cb()
    onClick()
  }

  return (
    <Command.Item
      onSelect={handleSelectAndClick}
      onClick={handleSelectAndClick}
    >
      {icon} {name}
    </Command.Item>
  )
}

export default CommandMenu
