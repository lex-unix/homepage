import { Command } from 'cmdk'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import React, { useEffect, useContext } from 'react'
import { CommandMenuContext } from '@/utils/command-menu-observer'
import {
  EmailIcon,
  GitHubIcon,
  HomeIcon,
  MoonIcon,
  ProjectIcon,
  SunIcon,
  SystemIcon,
  ToolIcon,
  TwitterIcon
} from './icons'

const CommandMenu: React.FC = () => {
  const { open, toggleMenu, closeMenu } = useContext(CommandMenuContext)
  const { theme, setTheme, systemTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleItemClick = () => {
    toggleMenu()
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
          <Item
            title="Home"
            icon={<HomeIcon />}
            href="/"
            onClick={handleItemClick}
          />
          <Item
            title="Projects"
            icon={<ProjectIcon />}
            href="/projects"
            onClick={handleItemClick}
          />
          <Item
            title="Tools"
            icon={<ToolIcon />}
            href="/tools"
            onClick={handleItemClick}
          />
        </Command.Group>
        <Command.Group heading="Socials">
          <Item
            title="Email"
            icon={<EmailIcon />}
            href="mailto:alexmiyin@gmail.com"
            onClick={handleItemClick}
          />
          <Item
            title="GitHub"
            icon={<GitHubIcon />}
            href="https://github.com/lex-unix"
            onClick={handleItemClick}
          />
          <Item
            title="Twitter"
            icon={<TwitterIcon />}
            href="/tools"
            onClick={handleItemClick}
          />
        </Command.Group>
        <Command.Group heading="Theme">
          <Item
            title={`Change Theme to ${theme === 'light' ? 'Dark' : 'Light'}`}
            icon={theme === 'light' ? <MoonIcon /> : <SunIcon />}
            onSelect={toggleTheme}
            onClick={handleItemClick}
          />
          <Item
            title="Change Theme to System"
            icon={<SystemIcon />}
            onSelect={() => setTheme(systemTheme ? systemTheme : 'light')}
            onClick={handleItemClick}
          />
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  )
}

interface ItemProps {
  title: string
  icon: React.ReactNode
  href?: string
  onSelect?: () => void
  onClick: () => void
}

const Item: React.FC<ItemProps> = ({
  title,
  icon,
  href,
  onSelect,
  onClick
}) => {
  const router = useRouter()

  let select
  if (onSelect) {
    select = () => {
      onClick()
      onSelect()
    }
  } else {
    select = () => {
      onClick()
      router.push(href ? href : '#')
    }
  }

  if (href) {
    return (
      <Command.Item onSelect={select}>
        {icon}
        {title}
      </Command.Item>
    )
  }

  return (
    <Command.Item onSelect={select}>
      {icon}
      {title}
    </Command.Item>
  )
}

export default CommandMenu
