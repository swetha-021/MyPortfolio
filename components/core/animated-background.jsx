'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Children, cloneElement, useEffect, useId, useState } from 'react'

const cn = (...classes) => classes.filter(Boolean).join(' ')

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}) {
  const [activeId, setActiveId] = useState(defaultValue ?? null)
  const uniqueId = useId()

  const handleSetActiveId = (id) => {
    setActiveId(id)
    onValueChange?.(id)
  }

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue)
    }
  }, [defaultValue])

  return Children.map(children, (child, index) => {
    const id = child.props['data-id']

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: () => handleSetActiveId(null),
        }
      : {
          onClick: (event) => {
            child.props.onClick?.(event)
            handleSetActiveId(id)
          },
        }

    return cloneElement(
      child,
      {
        key: child.key ?? index,
        className: cn('relative inline-flex', child.props.className),
        'data-checked': activeId === id ? 'true' : 'false',
        ...interactionProps,
      },
      <>
        <AnimatePresence initial={false}>
          {activeId === id && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className={cn('absolute inset-0', className)}
              transition={transition}
              initial={{ opacity: defaultValue ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
        <span className="relative z-10">{child.props.children}</span>
      </>
    )
  })
}
