'use client'

import { workData } from '@/assets/assets'
import React, { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const pad = (n) => String(n + 1).padStart(2, '0')

const Work = () => {
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()
  const duration = reduceMotion ? 0 : 0.5

  return (
    <div id="work" className="bg-[#ffebac]">
      <div className="w-full px-[8%] md:px-[12%] pt-8 pb-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-Ovo text-4xl text-black sm:text-5xl">
            Selected projects
          </h2>
        </div>

        <div
          className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 md:h-[30rem] md:flex-row"
          aria-label="Selected projects"
        >
          {workData.map((project, index) => {
            const open = active === index

            return (
              <div
                key={project.title}
                onMouseEnter={() => {
                  if (window.matchMedia('(min-width: 768px)').matches) {
                    setActive(index)
                  }
                }}
                className={`overflow-hidden rounded-xl border border-[#2f2f34] bg-[#950434] transition-[flex-grow,flex-basis,height] ease-in-out md:h-full md:min-w-0 ${
                  open
                    ? 'flex-[1_1_auto] md:flex-[1_1_0%]'
                    : 'h-14 flex-[0_0_3.5rem] md:h-full md:flex-[0_0_72px]'
                }`}
                style={{ transitionDuration: `${duration * 1000}ms` }}
              >
                {open ? (
                  <motion.article
                    id={`work-panel-${index}`}
                    aria-expanded="true"
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.35,
                      delay: reduceMotion ? 0 : 0.18,
                      ease: 'easeOut',
                    }}
                    className="grid h-full min-h-[22rem] grid-cols-1 gap-6 overflow-y-auto p-5 md:min-h-0 md:grid-cols-[1fr_minmax(220px,320px)] md:gap-8 md:overflow-hidden md:p-7"
                  >
                    <div className="flex min-w-0 flex-col">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#ffebac]/80">
                        {project.category} · {project.tech[0]}
                      </p>
                      <h3 className="mt-3 font-Ovo text-3xl text-[#ffebac] md:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[#ffebac] md:text-[15px]">
                        {project.description}
                      </p>
                      <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm leading-6 text-[#ffebac]"
                          >
                            <span className="mr-2 text-[#2f2f34]">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex h-full min-h-[10rem] flex-col rounded-lg border border-[#2f2f34] bg-black p-6 md:min-h-0 md:justify-between">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-[#ffebac]/80">
                          Tech stack
                        </p>
                        <ul className="mt-3">
                          {project.tech.map((item, techIndex) => (
                            <li
                              key={item}
                              className={`py-3 text-left text-sm text-[#ffebac] ${
                                techIndex < project.tech.length - 1
                                  ? 'border-b border-[#ffebac]/15'
                                  : ''
                              }`}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/github mt-6 inline-flex items-center gap-1 border-t border-[#ffebac]/15 pt-3 text-sm text-[#ffebac] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffebac] md:mt-auto"
                      >
                        View on GitHub
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-150 ease-out group-hover/github:translate-x-[2px] group-hover/github:-translate-y-[2px]"
                        >
                          ↗
                        </span>
                      </a>
                    </div>
                  </motion.article>
                ) : (
                  <button
                    type="button"
                    aria-expanded="false"
                    aria-controls={`work-panel-${index}`}
                    onClick={() => setActive(index)}
                    className="flex h-full w-full cursor-pointer items-center justify-between gap-4 px-4 text-left text-[#ffebac] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ffebac] md:flex-col md:px-0 md:py-4"
                  >
                    <span className="text-xs tracking-[0.16em] text-[#ffebac]/80">
                      {pad(index)}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-sm md:flex-none md:rotate-[-90deg] md:whitespace-nowrap md:text-base">
                      {project.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#2f2f34] bg-[#2f2f34] text-sm text-[#ffebac]"
                    >
                      +
                    </span>
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <a
          href="https://github.com/swetha-021"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto my-8 flex w-max items-center justify-center gap-2 rounded-full bg-black px-10 py-3 text-[#ffebac] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Show more
        </a>
      </div>
    </div>
  )
}

export default Work
