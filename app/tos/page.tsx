import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import s from '../legal.module.css'

const LOGO = '/BlanK.png'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for BlanK-AsseT Discord bot — usage rules, permissions, prohibited actions, liability, and contact.',
  openGraph: {
    title: 'Terms of Service — BlanK-AsseT',
    description: 'Terms of Service for BlanK-AsseT Discord bot.',
    images: [{ url: LOGO, width: 1080, height: 1080 }],
  },
}

const SECTIONS = [
  { id:'s1', title:'1. Usage', items:['Our bots are provided "as is" without warranty of any kind','You must comply with Discord\'s Terms of Service at all times','You are responsible for how the bot is configured and used in your server'] },
  { id:'s2', title:'2. Permissions', items:['Bots require certain Discord permissions to function correctly','Limiting permissions may reduce or break functionality','We are not responsible for issues caused by insufficient permissions'] },
  { id:'s4', title:'4. Prohibited Use', items:['Violate Discord\'s Terms of Service or Community Guidelines','Harass, abuse, threaten, or harm other users','Engage in illegal, fraudulent, or malicious activities','Attempt to exploit, reverse-engineer, or disrupt the bot\'s operation'] },
  { id:'s5', title:'5. Availability', items:['Bot uptime is not guaranteed — scheduled or unscheduled downtime may occur','Features may be changed, updated, or removed at any time without prior notice','We reserve the right to restrict or terminate access if misuse is detected'] },
  { id:'s6', title:'6. Liability', items:['Data loss caused by Discord outages or third-party service failures','Misuse of the bot by server administrators or members','Moderation actions taken using the bot and their consequences','Any indirect, incidental, or consequential damages arising from bot usage'] },
  { id:'s7', title:'7. Termination', items:['Disable or remove the bot from any server at our discretion','Terminate access for any server or user found to be in violation of these terms'] },
]

export default function TosPage() {
  return (
    <div className={s.page}>
      <Nav active="tos" />
      <div className={s.wrap}>
        <p className={s.eyebrow}>Legal</p>
        <h1 className={s.pageTitle}>Terms of <span>Service</span></h1>
        <p className={s.pageMeta}>Last Updated: December 2025 · BlanK-AsseT</p>

        <div className={s.toc}>
          <div className={s.tocLabel}>Contents</div>
          {['1. Usage','2. Permissions','3. Data Usage','4. Prohibited Use','5. Availability','6. Liability','7. Termination','8. Changes','9. Contact'].map((t,i)=>(
            <a key={t} href={`#s${i+1}`}>{t}</a>
          ))}
        </div>

        <div className={s.highlight}>By inviting or using any BlanK-AsseT bot, you agree to these Terms of Service. These terms apply to all Discord bots developed and operated by BlanK-AsseT.</div>

        {SECTIONS.map(sec => (
          <div key={sec.id} className={s.sec} id={sec.id}>
            <h2 className={s.h2}>{sec.title}</h2>
            <ul className={s.ul}>{sec.items.map(i=><li key={i}>{i}</li>)}</ul>
          </div>
        ))}

        <div className={s.sec} id="s3">
          <h2 className={s.h2}>3. Data Usage</h2>
          <p className={s.p}>Data usage is governed by our <a href="/privacy" style={{color:'var(--blurple-lt)'}}>Privacy Policy</a>. We only access and store data that is strictly necessary for bot functionality.</p>
        </div>

        <div className={s.sec} id="s8">
          <h2 className={s.h2}>8. Changes</h2>
          <p className={s.p}>These terms may be updated at any time. The "Last Updated" date at the top reflects the most recent revision. Continued use constitutes acceptance of updated terms.</p>
        </div>

        <div className={s.sec} id="s9">
          <h2 className={s.h2}>9. Contact</h2>
          <p className={s.p}>For support, questions, or concerns regarding these terms:</p>
          <div className={s.highlight}><strong>Discord Support Server:</strong> <a href="https://discord.gg/3MJAYraXu8" target="_blank" rel="noreferrer" style={{color:'var(--blurple-lt)'}}>discord.gg/3MJAYraXu8</a></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
