'use client'

import { CategoryPills } from '@/components/category-pills'
import { PageHeader } from '@/components/page-header'
import { useState } from 'react'

export default function Home() {
  const categories = [
    'All',
    'Gaming',
    'Music',
    'Cooking',
    'Comedy',
    'Movies',
    'Animals',
    'Tech',
    'Sports',
    'Fashion',
    'News',
    'Learning',
    'Travel',
    'Vlog'
  ]

  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <div className='flex max-h-screen flex-col'>
      <PageHeader />
      <div className='grid grid-flow-col overflow-auto'>
        <div>Sidebar</div>
        <div className='overflow-x-hidden px-8 pb-4'>
          <div className='sticky top-0 z-10 bg-white pb-4'>
            <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          </div>
        </div>
      </div>
    </div>
  )
}
