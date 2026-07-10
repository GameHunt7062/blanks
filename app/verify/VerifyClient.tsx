'use client'
import { useState } from 'react'
import Link from 'next/link'
import s from './verify.module.css'

const LOGO    = '/BlanK.png'
const BOT_API = process.env.NEXT_PUBLIC_BOT_API_URL || ''

export default function VerifyClient({ token }: { token: string }) {
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')

  async function doVerify() {
    if (!token) return
    setLoading(true); setError('')
    try {
      const res  = await fetch(`${BOT_API}/verify/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const data = await res.json()
      if (data.success)      window.location.href = '/verify/done'
      else if (data.blocked) window.location.href = '/verify/blocked?reason=alt_detected'
      else                   setError(data.error || 'Verification failed. Please try again.')
    } catch {
      setError('Network error — could not reach the verification server. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={s.page}>
      <div className={s.bg} aria-hidden />

      <Link className={s.homeBtn} href="/">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Back to Home
      </Link>

      <div className={s.card}>
        {/* Header */}
        <div className={s.header}>
          <img src={LOGO} alt="BlanK-AsseT" className={s.avatar} />
          <div>
            <div className={s.botName}>
              BlanK-AsseT
              <span className={s.appBadge}>
                <svg viewBox="0 0 16 16" width={11} height={11} fill="none" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M4 8.5 6.8 11.2 12 5.2"/></svg>
                APP
              </span>
            </div>
            <div className={s.botSub}>AltVerify System</div>
          </div>
        </div>

        <h1 className={s.title}>Verify your account</h1>
        <p className={s.desc}>
          Complete this one-time check to access the server.
          Your IP is used only to detect duplicate accounts and is never stored in plain text.
        </p>

        <div className={s.infoRows}>
          {INFO.map(r => (
            <div key={r.title} className={s.infoRow}>
              <div className={s.infoIcon} dangerouslySetInnerHTML={{ __html: r.svg }} />
              <div>
                <div className={s.infoTitle}>{r.title}</div>
                <div className={s.infoDesc}>{r.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={s.divider} />

        {!token ? (
          <div className={s.noToken}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div>
              <div className={s.noTokenTitle}>No verification link found</div>
              <div className={s.noTokenDesc}>Use the link sent to you in Discord. Do not navigate here directly.</div>
            </div>
          </div>
        ) : (
          <button className={s.btn} onClick={doVerify} disabled={loading}>
            {loading && <span className={s.spinner} />}
            {loading ? 'Verifying…' : 'Verify Account'}
          </button>
        )}

        {error && (
          <div className={s.errorBox}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {error}
          </div>
        )}

        <div className={s.foot}>
          <Link href="/">Home</Link>
          <span>·</span>
          <Link href="/tos">Terms</Link>
          <span>·</span>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </div>
  )
}

const INFO = [
  {
    title: 'IP-based alt detection',
    desc: 'Duplicate accounts from the same IP are automatically blocked',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    title: 'Instant role assignment',
    desc: 'Your Verified role is granted automatically after completion',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  },
  {
    title: 'Single-use personal link',
    desc: 'This link expires after use — do not share it',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  },
]
