'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { AnimatedBackground } from '@/components/core/animated-background'
import Logo from './Logo'

const links = [
  { id: 'top', href: '#top', label: 'Home' },
  { id: 'about', href: '#about', label: 'About me' },
  { id: 'experience', href: '#experience', label: 'Experience' },
  { id: 'work', href: '#work', label: 'My Work' },
  { id: 'extras', href: '#extras', label: 'Extras' },
  { id: 'contact', href: '#contact', label: 'Contact me' },
]

const Navbar = () => {
  const sideMenuRef = useRef()
  const [isScroll, setIsScroll] = useState(false)
  const [active, setActive] = useState('top')

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  const goTo = (event, id) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    closeMenu()
  }

  useEffect(() => {
    const onScroll = () => setIsScroll(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id)
        }
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 1],
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav
        className={`fixed z-50 flex w-full items-center justify-between px-5 py-1 lg:px-8 xl:px-[8%] ${
          isScroll ? 'bg-[#ffebac]/90 shadow-sm backdrop-blur-lg' : ''
        }`}
      >
        <a href="#top" onClick={(event) => goTo(event, 'top')}>
          <Logo className="h-8 w-20" showAccent={false} />
        </a>

        <div className="hidden rounded-full border border-[#2f2f34]/30 bg-[#ffebac] p-[2px] md:flex">
          <AnimatedBackground
            defaultValue={active}
            className="rounded-full bg-[#2f2f34]"
            transition={{
              ease: 'easeInOut',
              duration: 0.2,
            }}
          >
            {links.map((link) => (
              <a
                key={link.id}
                data-id={link.id}
                href={link.href}
                onClick={(event) => goTo(event, link.id)}
                aria-current={active === link.id ? 'location' : undefined}
                className={`font-Ovo inline-flex items-center justify-center rounded-full px-3 py-1 text-center transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                  active === link.id ? 'text-[#950434]' : 'text-black'
                }`}
              >
                {link.label}
              </a>
            ))}
          </AnimatedBackground>
        </div>

        <div className="flex items-center gap-4 text-black">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/swethaprakash21"
            className="flex items-center gap-2 text-black"
          >
            <Image src={assets.linkedin} alt="LinkedIn" width={24} height={24} />
            <span>LinkedIn</span>
          </a>

          <button
            type="button"
            className="ml-3 block md:hidden"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="fixed top-0 -right-64 bottom-0 z-50 flex h-screen w-64 flex-col gap-4 bg-[#ffebac] px-10 py-20 text-black transition duration-500 md:hidden"
        >
          <button
            type="button"
            className="absolute top-6 right-6"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <Image src={assets.close_black} alt="" className="w-5 cursor-pointer" />
          </button>

          {links.map((link) => (
            <li key={link.id}>
              <a
                className={`font-Ovo ${active === link.id ? 'underline' : ''}`}
                onClick={(event) => goTo(event, link.id)}
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
