import Link from 'next/link'
import s from './Footer.module.css'

const LOGO = '/BlanK.png'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.brand}>
          <img src={LOGO} alt="BlanK-AsseT" className={s.logo} />
          <div>
            <div className={s.name}>BlanK-AsseT</div>
            <div className={s.tagline}>Supreme Thanx For Choosing BlanK-AsseT</div>
          </div>
        </div>

        <div className={s.cols}>
          <div className={s.col}>
            <div className={s.colTitle}>Product</div>
            <a href="https://discord.com/oauth2/authorize?client_id=1385103762737201153" target="_blank" rel="noreferrer">Add to Server</a>
            <a href="https://top.gg/bot/1385103762737201153?s=0febbf4a4e2fd" target="_blank" rel="noreferrer">Vote on top.gg</a>
            <a href="https://discord.gg/3MJAYraXu8" target="_blank" rel="noreferrer">Support Server</a>
          </div>
          <div className={s.col}>
            <div className={s.colTitle}>Legal</div>
            <Link href="/tos">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <div className={s.col}>
            <div className={s.colTitle}>Links</div>
            <a href="https://github.com/GameHunt7062" target="_blank" rel="noreferrer">GitHub</a>
            <Link href="/verify">Verification</Link>
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <span>© 2025 BlanK-AsseT Development Team. All rights reserved.</span>
      </div>
    </footer>
  )
}
