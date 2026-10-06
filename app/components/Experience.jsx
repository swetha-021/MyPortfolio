'use client'

import { experienceData } from '@/assets/assets'
import { TextRoll } from '@/components/core/text-roll'
import React, { useRef } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'

const nextEntry = {
  isNext: true,
  year: 'Next',
  kind: "What's next",
  position: 'Your team?',
  company: '',
  bullets: [
    "I'm looking for a full-time software engineering role where I can ship product and LLM-backed systems.",
  ],
  skills: [],
}

const timeline = [...experienceData, nextEntry]

const ExperienceCard = ({ entry }) => {
  const cardRef = useRef(null)
  const inView = useInView(cardRef, { once: true, amount: 0.35 })
  const reduceMotion = useReducedMotion()

  if (entry.isNext) {
    return (
      <div className="rounded-xl border border-black/20 bg-black/[0.03] p-6">
        <p className="text-[11px] uppercase tracking-[0.18em] text-black/70">
          What&apos;s next
        </p>
        <h3 className="mt-2 font-Ovo text-2xl text-black">Your team?</h3>
        <p className="mt-3 text-sm leading-6 text-black">
          {entry.bullets[0]}
        </p>
        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm text-[#ffebac] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Let&apos;s talk →
        </a>
      </div>
    )
  }

  return (
    <div ref={cardRef} className="rounded-xl border border-black/20 bg-black/[0.03] p-6">
      <p className="text-[11px] uppercase tracking-[0.18em] text-black/70">
        {entry.kind}
      </p>
      <h3 className="mt-2 font-Ovo text-2xl leading-tight text-black">
        {entry.position}
      </h3>
      {inView && !reduceMotion ? (
        <span className="mt-1 inline-block border-b border-[#2f2f34]">
          <TextRoll className="block text-sm font-medium text-[#950434]">
            {entry.company}
          </TextRoll>
        </span>
      ) : (
        <p className="mt-1 inline-block text-sm font-medium text-[#950434] border-b border-[#2f2f34]">
          {entry.company}
        </p>
      )}
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-black marker:text-black">
        {entry.bullets.slice(0, 3).map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {entry.skills?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {entry.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-black/40 px-3 py-1 text-xs text-black"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const YearMark = ({ year, dates, align = 'right' }) => (
  <div className={`${align === 'right' ? 'md:text-right' : 'md:text-left'} mb-3 md:mb-0`}>
    <p className="font-Ovo text-4xl leading-none text-[#950434] md:text-7xl">
      {year}
    </p>
    {dates ? (
      <p className="mt-3 text-sm tracking-wide text-[#2f2f34]">{dates}</p>
    ) : null}
  </div>
)

const Experience = () => {
  const trackRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 75%', 'end 85%'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  const itemMotion = (fromX) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28, x: fromX },
          whileInView: { opacity: 1, y: 0, x: 0 },
          viewport: { once: true, amount: 0.3 },
        }

  return (
    <section id="experience" className="bg-[#ffebac]">
      <div className="w-full px-[8%] md:px-[12%] pt-8 pb-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-Ovo text-4xl text-black sm:text-5xl">
            Where I&apos;ve worked
          </h2>

          <div ref={trackRef} className="relative mt-16">
            <div
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-[7px] w-px bg-black/15 md:left-1/2 md:-translate-x-1/2"
            >
              <motion.div
                className="h-full w-full origin-top bg-black"
                style={{ scaleY: reduceMotion ? 1 : scaleY }}
              />
            </div>

            <ol className="relative">
              {timeline.map((entry, index) => {
                const yearLeft = index % 2 === 0
                const key = entry.isNext ? 'next' : entry.company

                return (
                  <li key={key} className="relative py-8 md:py-10">
                    <span
                      aria-hidden="true"
                      className="absolute top-10 left-[1px] z-10 h-3.5 w-3.5 rounded-full border-2 border-black bg-[#ffebac] md:left-1/2 md:top-12 md:-translate-x-1/2"
                    />

                    <div className="hidden md:grid md:grid-cols-[1fr_2.75rem_1fr] md:items-start">
                      {yearLeft ? (
                        <>
                          <motion.div
                            {...itemMotion(-12)}
                            transition={{ duration: 0.5 }}
                            className="pr-10 text-right"
                          >
                            <YearMark year={entry.year} dates={entry.dates} align="right" />
                          </motion.div>
                          <div />
                          <motion.div
                            {...itemMotion(12)}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="pl-10"
                          >
                            <ExperienceCard entry={entry} />
                          </motion.div>
                        </>
                      ) : (
                        <>
                          <motion.div
                            {...itemMotion(-12)}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="pr-10"
                          >
                            <ExperienceCard entry={entry} />
                          </motion.div>
                          <div />
                          <motion.div
                            {...itemMotion(12)}
                            transition={{ duration: 0.5 }}
                            className="pl-10"
                          >
                            <YearMark year={entry.year} dates={entry.dates} align="left" />
                          </motion.div>
                        </>
                      )}
                    </div>

                    <div className="pl-8 md:hidden">
                      <motion.div
                        {...itemMotion(0)}
                        transition={{ duration: 0.45 }}
                      >
                        <YearMark year={entry.year} dates={entry.dates} />
                      </motion.div>
                      <motion.div
                        {...itemMotion(0)}
                        transition={{ duration: 0.45, delay: 0.08 }}
                      >
                        <ExperienceCard entry={entry} />
                      </motion.div>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
