'use client'

import { CategoryPills } from '@/components/category-pills'
import { PageHeader } from '@/components/page-header'
import { Sidebar } from '@/components/sidebar'
import { VideoGridItem } from '@/components/video-grid-item'
import { categories } from '@/data/categories'
import { videos } from '@/data/videos'
import { useState } from 'react'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <div className='flex max-h-screen flex-col'>
      <PageHeader />
      <div className='grid grid-flow-col overflow-auto'>
        <Sidebar />
        <div className='overflow-x-hidden px-2 pb-4'>
          <div className='bg-background sticky top-0 z-10 pb-4'>
            <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          </div>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {videos.map((video) => (
              <VideoGridItem key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
