'use client'

import { extrasData } from '@/assets/assets'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'hackathon', label: 'Hackathons' },
  { id: 'conference', label: 'Conferences' },
]

const sortedExtras = [...extrasData].sort((a, b) => {
  const left = a.sortDate || a.date || ''
  const right = b.sortDate || b.date || ''
  return String(right).localeCompare(String(left))
})

const resultBadge = (result) => {
  if (!result) return null
  if (/🏆/.test(result)) return result
  if (/place|winner|best|1st|2nd|3rd|champion/i.test(result)) {
    return `🏆 ${result}`
  }
  return result
}

const Extras = () => {
  const reduceMotion = useReducedMotion()
  const scrollRef = useRef(null)
  const tabRefs = useRef(new Map())
  const [filter, setFilter] = useState('all')

  const counts = useMemo(
    () => ({
      all: sortedExtras.length,
      hackathon: sortedExtras.filter((entry) => entry.type === 'hackathon').length,
      conference: sortedExtras.filter((entry) => entry.type === 'conference').length,
    }),
    []
  )

  const visible = useMemo(
    () =>
      filter === 'all'
        ? sortedExtras
        : sortedExtras.filter((entry) => entry.type === filter),
    [filter]
  )

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }, [filter, reduceMotion])

  const setTabRef = (id) => (node) => {
    if (node) tabRefs.current.set(id, node)
    else tabRefs.current.delete(id)
  }

  const selectTab = (id) => {
    setFilter(id)
    tabRefs.current.get(id)?.focus()
  }

  const onTabListKeyDown = (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const index = FILTERS.findIndex((item) => item.id === filter)
    const nextIndex =
      event.key === 'ArrowRight'
        ? (index + 1) % FILTERS.length
        : (index - 1 + FILTERS.length) % FILTERS.length
    selectTab(FILTERS[nextIndex].id)
  }

  return (
    <section id="extras" className="bg-[#ffebac]">
      <div className="w-full px-[8%] pt-8 pb-16 md:px-[12%]">
        <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] md:gap-14 lg:gap-20">
          <div className="md:sticky md:top-[6.5rem]">
            <h2 className="font-Ovo text-4xl leading-tight text-black sm:text-5xl">
              <span className="block">Always</span>
              <span className="mt-1 block italic text-black/55">building.</span>
            </h2>
          </div>

          <div className="min-w-0">
            <div
              role="tablist"
              aria-label="Hackathons and conferences"
              onKeyDown={onTabListKeyDown}
              className="relative grid grid-cols-3"
            >
              {FILTERS.map((item) => {
                const selected = filter === item.id
                return (
                  <button
                    key={item.id}
                    ref={setTabRef(item.id)}
                    type="button"
                    role="tab"
                    id={`extras-tab-${item.id}`}
                    aria-selected={selected}
                    aria-controls="extras-tabpanel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => selectTab(item.id)}
                    className={`relative pb-3 text-left text-sm tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                      selected ? 'text-black' : 'text-black/40'
                    }`}
                  >
                    <span className="font-Ovo text-base md:text-lg">
                      {item.label}
                    </span>
                    <span
                      className={`ml-2 text-xs ${
                        selected ? 'text-black/50' : 'text-black/30'
                      }`}
                    >
                      {counts[item.id]}
                    </span>
                    {selected ? (
                      <motion.span
                        layoutId="extras-tab-indicator"
                        className="absolute right-0 bottom-0 left-0 h-[2.5px] bg-black"
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { duration: 0.3, ease: 'easeOut' }
                        }
                      />
                    ) : null}
                  </button>
                )
              })}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/15"
              />
            </div>

            <div
              id="extras-tabpanel"
              role="tabpanel"
              aria-labelledby={`extras-tab-${filter}`}
              ref={scrollRef}
              className="extras-list mt-1 max-h-[min(35rem,calc(100vh-12rem))] overflow-y-scroll"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={filter}
                  initial={
                    reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }
                  }
                  transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }}
                >
                  <ul>
                    {visible.map((entry) => {
                      const badge = resultBadge(entry.result)
                      const Tag = entry.link ? 'a' : 'div'

                      return (
                        <li
                          key={entry.id}
                          className="w-full border-b border-black/15"
                        >
                          <Tag
                            href={entry.link}
                            target={entry.link ? '_blank' : undefined}
                            rel={
                              entry.link ? 'noopener noreferrer' : undefined
                            }
                            className={`group block rounded-lg px-4 py-7 text-black no-underline outline-none transition-colors duration-200 hover:bg-[#950434] hover:text-[#ffebac] focus-visible:bg-[#950434] focus-visible:text-[#ffebac] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2f2f34] md:px-5 ${
                              entry.link ? 'cursor-pointer' : ''
                            }`}
                          >
                            <div className="flex items-start gap-4 md:gap-5">
                              <div className="min-w-0 flex-1">
                                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
                                  <div className="min-w-0">
                                    <p className="font-Ovo text-xl leading-tight md:text-2xl">
                                      {entry.name}
                                    </p>
                                    <p className="mt-2 text-sm text-black/55 group-hover:text-[#ffebac]/70 group-focus-visible:text-[#ffebac]/70">
                                      {[
                                        entry.organizer,
                                        entry.location,
                                        entry.date,
                                      ]
                                        .filter(Boolean)
                                        .join(' · ')}
                                    </p>
                                    {entry.type === 'hackathon' &&
                                    entry.project ? (
                                      <p className="mt-1 text-sm text-black/70 group-hover:text-[#ffebac]/80 group-focus-visible:text-[#ffebac]/80">
                                        Built: {entry.project}
                                      </p>
                                    ) : null}
                                  </div>

                                  <div className="flex shrink-0 flex-wrap items-center gap-2 md:justify-end">
                                    <span className="rounded-full border border-black/30 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.16em] text-black/70 group-hover:border-[#2f2f34] group-hover:bg-[#2f2f34] group-hover:text-[#ffebac] group-focus-visible:border-[#2f2f34] group-focus-visible:bg-[#2f2f34] group-focus-visible:text-[#ffebac]">
                                      {entry.type}
                                    </span>
                                    {badge ? (
                                      <span className="rounded-full bg-black/10 px-2.5 py-0.5 text-[11px] text-black group-hover:bg-[#2f2f34] group-hover:text-[#ffebac] group-focus-visible:bg-[#2f2f34] group-focus-visible:text-[#ffebac]">
                                        {badge}
                                      </span>
                                    ) : null}
                                    {entry.link ? (
                                      <span
                                        aria-hidden="true"
                                        className="text-sm text-black/40 group-hover:text-[#ffebac] group-focus-visible:text-[#ffebac]"
                                      >
                                        ↗
                                      </span>
                                    ) : null}
                                  </div>
                                </div>

                                {entry.description ? (
                                  <p className="mt-3 text-sm leading-6 text-black/70 group-hover:text-[#ffebac]/85 group-focus-visible:text-[#ffebac]/85">
                                    {entry.description}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                          </Tag>
                        </li>
                      )
                    })}
                  </ul>

                  {visible.length === 0 ? (
                    <p className="px-4 py-10 text-sm text-black/55">
                      No{' '}
                      {filter === 'conference' ? 'conferences' : 'hackathons'}{' '}
                      to show yet.
                    </p>
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Extras
