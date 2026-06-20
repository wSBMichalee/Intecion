import { ChevronRight, ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'

interface ArrowButtonProps {
  direction?: 'right' | 'left'
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'white'
  color?: string // hex, default brand-600
  disabled?: boolean
}

export default function ArrowButton({
  direction = 'right',
  onClick,
  className = '',
  size = 'md',
  variant = 'primary',
  disabled = false,
}: ArrowButtonProps) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  }

  const variants = {
    primary: 'bg-brand-600 hover:bg-brand-500 text-white',
    white: 'bg-white hover:bg-gray-50 text-brand-600 shadow-sm',
  }

  const Icon = direction === 'right' ? ChevronRight : ChevronLeft

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${sizes[size]}
        ${variants[variant]}
        rounded-lg
        flex items-center justify-center
        transition-colors duration-200
        disabled:opacity-40 disabled:cursor-not-allowed
        ${className}
      `}
    >
      <Icon className="w-5 h-5" strokeWidth={2.5} />
    </motion.button>
  )
}
