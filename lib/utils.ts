import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDuration(seconds: number) {
  const hours = Math.floor(seconds / 3600)
  const remainingMinutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60
  if (hours === 0) {
    return `${remainingMinutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }
  return `${hours}:${remainingMinutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
}

export function viewCount(views: number): string {
  return Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(views)
}

export function postedAgo(date: Date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)
  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`
  }
  if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`
  }
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`
  }
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  }
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  }
  return `${seconds} second${seconds > 1 ? 's' : ''} ago`
}
