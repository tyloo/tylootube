import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const TRANSLATE_AMOUNT = 200

type CategoryPillsProps = {
  categories: string[]
  selectedCategory: string
  onSelect: (category: string) => void
}

export function CategoryPills({ categories, selectedCategory, onSelect }: CategoryPillsProps) {
  const [translate, setTranslate] = useState(0)
  const [isLeftVisible, setIsLeftVisible] = useState(true)
  const [isRightVisible, setIsRightVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current === null) {
      return
    }

    const observer = new ResizeObserver((entries) => {
      const container = entries[0].target
      if (container === null) {
        return
      }

      setIsLeftVisible(translate > 0)
      setIsRightVisible(translate + container.clientWidth < container.scrollWidth)
    })
    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [categories, translate])

  return (
    <div className='relative overflow-x-hidden' ref={containerRef}>
      <div
        className='flex w-[max-content] gap-1 whitespace-nowrap transition-transform'
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'secondary'}
            onClick={() => onSelect(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className='from-background absolute top-1/2 left-0 h-full w-24 -translate-y-1/2 bg-gradient-to-r from-50% to-transparent'>
          <Button
            asChild
            variant='ghost'
            size='icon'
            className='h-square aspect-auto w-auto p-1.5'
            onClick={() => {
              const newTranslate = translate - TRANSLATE_AMOUNT
              setTranslate(Math.max(0, newTranslate))
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className='from-background absolute top-1/2 right-0 flex h-full w-24 -translate-y-1/2 justify-end bg-gradient-to-l from-50% to-transparent'>
          <Button
            asChild
            variant='ghost'
            size='icon'
            className='h-square aspect-auto w-auto p-1.5'
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current === null) {
                  return translate
                }
                const newTranslate = translate + TRANSLATE_AMOUNT
                const edge = containerRef.current.scrollWidth
                const width = containerRef.current.clientWidth

                if (newTranslate + width >= edge) {
                  return edge - width
                }

                return newTranslate
              })
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  )
}
