'use client'

import React, { useMemo } from 'react'
import { motion } from 'motion/react'

const cn = (...classes) => classes.filter(Boolean).join(' ')

function TextShimmerComponent({
  children,
  as: Component = 'p',
  className,
  duration = 2,
  spread = 2,
  repeat = Infinity,
}) {
  const MotionComponent = motion.create(Component)
  const dynamicSpread = useMemo(
    () => children.length * spread,
    [children, spread]
  )

  return (
    <MotionComponent
      className={cn(
        'relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent',
        '[--base-color:#950434] [--base-end-color:#2f2f34] [--base-gradient-color:#d8d8d8]',
        '[background-repeat:no-repeat,padding-box] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]',
        className
      )}
      initial={{ backgroundPosition: '100% center' }}
      animate={{ backgroundPosition: '0% center' }}
      transition={{
        repeat,
        duration,
        ease: 'linear',
      }}
      style={{
        '--spread': `${dynamicSpread}px`,
        backgroundImage:
          'var(--bg), linear-gradient(to bottom, var(--base-color), var(--base-end-color, var(--base-color)))',
      }}
    >
      {children}
    </MotionComponent>
  )
}

export const TextShimmer = React.memo(TextShimmerComponent)
