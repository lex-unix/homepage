import { Command } from 'cmdk'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import React, { useEffect, useState, useContext } from 'react'
import { CommandMenuContext } from '@/utils/command-menu-observer'
import {
  EmailIcon,
  GitHubIcon,
  HomeIcon,
  SunIcon,
  Tools,
  TwitterIcon
} from './icons'

const CommandMenu: React.FC = () => {
  const { open, toggleMenu, closeMenu } = useContext(CommandMenuContext)
  const { theme, setTheme, systemTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        toggleMenu()
      }

      if (e.key === 'Enter') {
        closeMenu(false)
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
          <Item title="Home" icon={<HomeIcon />} href="/" />
          <Item title="Projects" icon={<HomeIcon />} href="/projects" />
          <Item title="Tools" icon={<Tools />} href="/tools" />
        </Command.Group>
        <Command.Group heading="Socials">
          <Item
            title="Email"
            icon={<EmailIcon />}
            href="mailto:alexmiyin@gmail.com"
          />
          <Item
            title="GitHub"
            icon={<GitHubIcon />}
            href="https://github.com/lex-unix"
          />
          <Item title="Twitter" icon={<TwitterIcon />} href="/tools" />
        </Command.Group>
        <Command.Group heading="Theme">
          <Item
            title={`Change Theme to ${theme === 'light' ? 'Dark' : 'Light'}`}
            icon={theme === 'light' ? <SunIcon /> : <SunIcon />}
            onSelect={toggleTheme}
          />
          <Item
            title="Change Theme to System"
            icon={<Tools />}
            onSelect={() => setTheme(systemTheme ? systemTheme : 'light')}
          />
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  )
}

interface ItemProps {
  title: string
  icon: React.ReactNode
  onSelect?: () => void
  href?: string
}

const Item: React.FC<ItemProps> = ({ title, icon, onSelect, href }) => {
  const router = useRouter()

  if (href) {
    return (
      <Command.Item onSelect={() => router.push(href)}>
        {icon}
        <a href={href}>{title}</a>
      </Command.Item>
    )
  }

  return (
    <Command.Item onSelect={onSelect}>
      {icon}
      {title}
    </Command.Item>
  )
}

export default CommandMenu
