'use client'

import { Button } from '@/components/ui/button'
import { useSidebarContext } from '@/contexts/sidebar-context'
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from './theme-toggle'

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

  return (
    <div className='flex items-center justify-between gap-10 px-4 pt-2 pb-6 lg:gap-20'>
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form className={`grow gap-4 ${showFullWidthSearch ? 'flex' : 'hidden md:flex'}`}>
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(!showFullWidthSearch)}
            type='button'
            size='icon'
            className='border-secondary-foreground shrink-0 p-4'
          >
            <ArrowLeft />
          </Button>
        )}

        <div className={`flex grow ${!showFullWidthSearch && 'max-w-[600px]'}`}>
          <input
            type='search'
            placeholder='Search'
            className='border-foreground shadow-foreground/20 dark:focus:border-foreground w-full rounded-l-full border px-4 py-1 text-sm shadow-inner outline-none focus:border-blue-500'
          />
          <Button
            type='button'
            className='border-foreground shrink-0 rounded-l-none rounded-r-full border border-l-0 px-10 py-2'
          >
            <Search />
          </Button>
        </div>
        <Button type='button' size='icon' className='shrink-0'>
          <Mic />
        </Button>
      </form>
      <div className={`flex shrink-0 md:gap-2 ${showFullWidthSearch && 'hidden'}`}>
        <Button
          onClick={() => setShowFullWidthSearch(!showFullWidthSearch)}
          variant='ghost'
          size='icon'
          className='md:hidden'
        >
          <Search />
        </Button>
        <Button variant='ghost' size='icon'>
          <Upload />
        </Button>
        <Button variant='ghost' size='icon'>
          <Bell />
        </Button>
        <Button variant='ghost' size='icon'>
          <User />
        </Button>
        <ThemeToggle />
      </div>
    </div>
  )
}

type PageHeaderFirstSectionProps = {
  hidden?: boolean
}

export function PageHeaderFirstSection({ hidden = false }: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext()

  return (
    <div className={`flex shrink-0 items-center gap-4 ${hidden ? 'hidden' : 'flex'}`}>
      <Button onClick={toggle} variant='ghost' size='icon'>
        <Menu />
      </Button>
      <Link href='/'>
        <Image src='/logo.png' alt='TylooTube logo' width={75} height={36} priority />
      </Link>
    </div>
  )
}
