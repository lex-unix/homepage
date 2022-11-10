import { Command } from 'cmdk'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import React, { useEffect, useMemo } from 'react'
import {
  EmailIcon,
  GitHubIcon,
  HomeIcon,
  MoonIcon,
  ProjectIcon,
  SunIcon,
  SystemIcon,
  DashboardIcon,
  TwitterIcon,
  WritingIcon
} from './icons'
import { commandState } from '@/states/command-menu'

const CommandMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useAtom(commandState)
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
      },
      {
        name: 'Writing',
        icon: <WritingIcon />,
        cb: () => router.push('/writing')
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
    setIsOpen(false)
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        setIsOpen(!isOpen)
      }

      if (e.key === 'Enter') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  })

  return (
    <>
      {isOpen && <div className="cmd-container"></div>}
      <Command.Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Command.Input placeholder="Search" />
        <Command.Separator />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Page">
            {pages.map(page => (
              <CommandItem
                key={page.name}
                {...page}
                onClick={handleItemClick}
              />
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
    </>
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
      value={name}
    >
      {icon} {name}
    </Command.Item>
  )
}

export default CommandMenu
