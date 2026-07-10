'use client'
import Link from 'next/link'
import { useState } from 'react'
import s from './Nav.module.css'

const LOGO = '/BlanK.png'

export default function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <nav className={s.nav}>
      <div className={s.inner}>
        <Link href="/" className={s.brand}>
          <img src={LOGO} alt="BlanK-AsseT" className={s.logo} />
          <span className={s.name}>BlanK<span>-AsseT</span></span>
        </Link>

        {/* Desktop links */}
        <div className={s.links}>
          <Link href="/" className={active==='home' ? s.active : ''}>Home</Link>
          <Link href="/tos" className={active==='tos' ? s.active : ''}>Terms</Link>
          <Link href="/privacy" className={active==='privacy' ? s.active : ''}>Privacy</Link>
          <a href="https://discord.gg/3MJAYraXu8" target="_blank" rel="noreferrer">Support</a>
          <a href="https://top.gg/bot/1385103762737201153?s=0febbf4a4e2fd" target="_blank" rel="noreferrer">top.gg</a>
        </div>

        <a
          className={s.cta}
          href="https://discord.com/oauth2/authorize?client_id=1385103762737201153"
          target="_blank" rel="noreferrer"
        >
          Add to Discord
        </a>

        {/* Mobile hamburger */}
        <button className={s.hamburger} onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={open ? s.hOpen : ''}/>
          <span className={open ? s.hOpen : ''}/>
          <span className={open ? s.hOpen : ''}/>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={s.mobileMenu}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/tos" onClick={() => setOpen(false)}>Terms of Service</Link>
          <Link href="/privacy" onClick={() => setOpen(false)}>Privacy Policy</Link>
          <a href="https://discord.gg/3MJAYraXu8" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Support Server</a>
          <a href="https://top.gg/bot/1385103762737201153?s=0febbf4a4e2fd" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Vote on top.gg</a>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1385103762737201153"
            target="_blank" rel="noreferrer" onClick={() => setOpen(false)}
            className={s.mobileCta}
          >Add to Discord</a>
        </div>
      )}
    </nav>
  )
}
