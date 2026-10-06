import { education, skillCategories } from '@/assets/assets'
import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <section id="about" className="bg-[#ffebac]">
      <div
        className="w-full px-[8%] md:px-[12%] pt-8 pb-16"
      >
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="font-Ovo text-4xl text-black sm:text-5xl">
              Who I am
            </h2>
            <p className="mt-8 text-base leading-8 text-black">
              I build full-stack products and LLM-backed systems: React Native
              apps, Spring Boot services, and RAG / multi-agent workflows. I
              recently finished my M.S. in Computer Science at Binghamton
              University. Lately that has meant shipping an AI student
              community, WHO-linked health analytics, and healthcare
              reimbursement platforms.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {education.map((item) => (
                <div key={item.school} className="border-l-2 border-black pl-4">
                  <p className="text-lg font-medium leading-snug text-black">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-black/70">{item.school}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-black">
              Toolkit
            </p>
            <dl className="divide-y divide-black/15">
              {skillCategories.map((category) => (
                <div
                  key={category.title}
                  className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr] sm:gap-8"
                >
                  <dt className="text-sm font-medium text-black">
                    {category.title}
                  </dt>
                  <dd className="text-[15px] leading-7 text-black">
                    {category.skills.join(' · ')}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
