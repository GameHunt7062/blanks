'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import s from './blocked.module.css'

const MSGS: Record<string, string> = {
  alt_detected:  'An existing account from the same IP address is already verified in this server, indicating a possible alt account.',
  invalid_token: 'Your verification token is invalid or has expired. Please request a new link from Discord.',
  default:       "Your verification was blocked by this server's security system. Please contact a server administrator.",
}

function BlockedContent() {
  const params = useSearchParams()
  const reason = params.get('reason') || 'alt_detected'
  const msg    = MSGS[reason] || MSGS.default

  return (
    <div className={s.page}>
      <div className={s.bg} aria-hidden />
      <Link className={s.homeBtn} href="/">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={14} height={14}><polyline points="15 18 9 12 15 6"/></svg>
        Home
      </Link>

      <div className={s.card}>
        <div className={s.iconWrap}>
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width={32} height={32}>
            <circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
          </svg>
        </div>

        <h1 className={s.title}>Verification blocked</h1>
        <p className={s.desc}>{msg}</p>

        <div className={s.steps}>
          <div className={s.stepsTitle}>What to do next</div>
          {STEPS.map((st, i) => (
            <div key={i} className={s.step}>
              <div className={s.stepNum}>{i + 1}</div>
              <div className={s.stepText}>{st}</div>
            </div>
          ))}
        </div>

        <div className={s.badge}>Access Blocked</div>

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

export default function BlockedPage() {
  return <Suspense fallback={null}><BlockedContent /></Suspense>
}

const STEPS = [
  'Leave the server with your original (main) account',
  'Rejoin and attempt verification again with this account',
  'If you believe this is an error, contact a server admin',
]
