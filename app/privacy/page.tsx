import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import s from '../legal.module.css'

const LOGO = '/BlanK.png'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for BlanK-AsseT Discord bot. IP addresses are SHA-256 hashed. No personal data is sold or shared.',
  openGraph: {
    title: 'Privacy Policy — BlanK-AsseT',
    description: 'Privacy Policy for BlanK-AsseT Discord bot. IP addresses are SHA-256 hashed.',
    images: [{ url: LOGO, width: 1080, height: 1080 }],
  },
}

export default function PrivacyPage() {
  return (
    <div className={s.page}>
      <Nav active="privacy" />
      <div className={s.wrap}>
        <p className={s.eyebrow}>Legal</p>
        <h1 className={s.pageTitle}>Privacy <span>Policy</span></h1>
        <p className={s.pageMeta}>Last Updated: December 2025 · BlanK-AsseT</p>

        <div className={s.toc}>
          <div className={s.tocLabel}>Contents</div>
          {['1. Data We Access','2. How Data Is Used','3. Data Storage','4. Data Sharing','5. User Control & Opt-Out','6. Security','7. Compliance','8. Contact'].map((t,i)=>(
            <a key={t} href={`#s${i+1}`}>{t}</a>
          ))}
        </div>

        <div className={s.highlight}>This Privacy Policy applies to all bots created, maintained, and operated by BlanK-AsseT. By using any of our bots, you acknowledge this policy.</div>

        <div className={s.sec} id="s1">
          <h2 className={s.h2}>1. Data We Access</h2>
          <p className={s.p}>Depending on the features enabled and permissions granted, our bots may access:</p>
          <div className={s.dataGrid}>
            <div className={`${s.dgRow} ${s.dgHead}`}><div className={s.dgCell}>Data Type</div><div className={s.dgCell}>Purpose</div></div>
            {[['Discord User IDs & Server IDs','Core bot operation and configuration'],['Channel & Role IDs','Server setup, permissions, verification'],['Member roles & join/leave events','Auto-role, logging, moderation features'],['Message content','Command execution only — not stored permanently'],['Presence status','Real-time processing only, if feature is enabled']].map(([a,b])=>(
              <div key={a} className={s.dgRow}><div className={s.dgCell}>{a}</div><div className={s.dgCell}>{b}</div></div>
            ))}
          </div>
          <div className={s.highlight}><strong>We do not collect:</strong> email addresses, real names, payment information, or any personally identifiable information outside of Discord.</div>
        </div>

        <div className={s.sec} id="s2">
          <h2 className={s.h2}>2. How Data Is Used</h2>
          <p className={s.p}>Data is used strictly to:</p>
          <ul className={s.ul}>{['Process slash and prefix commands in real time','Configure and manage Discord server settings','Provide moderation, automation, and utility features','Manage roles, permissions, and server structure','Detect alt accounts via hashed IP comparison (AltVerify only)'].map(i=><li key={i}>{i}</li>)}</ul>
          <p className={s.p}>All data processing occurs within the server where the bot is installed. Data is never used for advertising, profiling, or any purpose beyond bot operation.</p>
        </div>

        <div className={s.sec} id="s3">
          <h2 className={s.h2}>3. Data Storage</h2>
          <ul className={s.ul}>{['Only minimal configuration data is stored (server settings, role IDs, etc.)','Message content is not permanently stored','Presence data is processed in real time and not logged','AltVerify stores a one-way SHA-256 hash of your IP — your real IP is never stored and cannot be recovered'].map(i=><li key={i}>{i}</li>)}</ul>
        </div>

        <div className={s.sec} id="s4">
          <h2 className={s.h2}>4. Data Sharing</h2>
          <ul className={s.ul}>{['We do not sell, share, or trade any user data','No data is used for advertising or third-party tracking','Data is only passed to Discord\'s own API for required bot functionality','We may disclose data if required by a valid legal process'].map(i=><li key={i}>{i}</li>)}</ul>
        </div>

        <div className={s.sec} id="s5">
          <h2 className={s.h2}>5. User Control & Opt-Out</h2>
          <ul className={s.ul}>{['Restricting the bot\'s Discord permissions','Adjusting personal Discord privacy settings','Removing the bot from the server entirely','Contacting us to request data deletion (see Section 8)'].map(i=><li key={i}>{i}</li>)}</ul>
        </div>

        <div className={s.sec} id="s6">
          <h2 className={s.h2}>6. Security</h2>
          <p className={s.p}>We follow Discord API best practices and take reasonable steps to secure stored data. Access to configuration files and stored data is restricted to the BlanK-AsseT development team.</p>
        </div>

        <div className={s.sec} id="s7">
          <h2 className={s.h2}>7. Compliance</h2>
          <ul className={s.ul}>{['Discord Developer Terms of Service','Discord Developer Policy','Discord Community Guidelines'].map(i=><li key={i}>{i}</li>)}</ul>
        </div>

        <div className={s.sec} id="s8">
          <h2 className={s.h2}>8. Contact</h2>
          <div className={s.contactCard}>
            {[
              { label:'Discord Support', href:'https://discord.gg/3MJAYraXu8', display:'discord.gg/3MJAYraXu8' },
              { label:'GitHub', href:'https://github.com/GameHunt7062/Blnakvis/blob/main/tos.md', display:'github.com/GameHunt7062' },
              { label:'Top.gg', href:'https://top.gg/bot/1385103762737201153?s=0febbf4a4e2fd', display:'top.gg/bot/1385103762737201153' },
            ].map(c => (
              <div key={c.label} className={s.contactRow}>
                <div className={s.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--blurple-lt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={14} height={14}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <span>{c.label}: <a href={c.href} target="_blank" rel="noreferrer">{c.display}</a></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
