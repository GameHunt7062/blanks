import Link from 'next/link'
import s from './done.module.css'

export const metadata = { title: 'Verified!' }

export default function DonePage() {
  return (
    <div className={s.page}>
      <div className={s.bg} aria-hidden />
      <Link className={s.homeBtn} href="/">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={14} height={14}><polyline points="15 18 9 12 15 6"/></svg>
        Home
      </Link>

      <div className={s.card}>
        <div className={s.ringWrap}>
          <div className={s.pulse} /><div className={s.pulse} />
          <div className={s.ring}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width={36} height={36}>
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        </div>

        <h1 className={s.title}>You&apos;re verified!</h1>
        <p className={s.desc}>Your account has been successfully verified. You now have full access to the server.</p>
        <p className={s.desc} style={{ marginTop: 4 }}>You can close this tab and return to Discord.</p>

        <div className={s.badge}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={14} height={14}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Verification Complete
        </div>

        <div className={s.foot}>
          <Link href="/">Home</Link>
          <span>·</span>
          <Link href="/tos">Terms</Link>
          <span>·</span>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          const cols=['#5865f2','#7289da','#00b79a','#00d4b0','#ffffff'];
          const root=document.body;
          for(let i=0;i<60;i++){
            const el=document.createElement('div');
            const sz=3+Math.random()*7;
            el.style.cssText='position:fixed;pointer-events:none;z-index:0;top:-10px;left:'+Math.random()*100+'vw;width:'+sz+'px;height:'+sz+'px;border-radius:'+(Math.random()>.5?'50%':'3px')+';background:'+cols[~~(Math.random()*cols.length)]+';animation:confFall '+(1.4+Math.random()*2)+'s '+(Math.random()*.8)+'s linear forwards;';
            root.appendChild(el);
          }
          const st=document.createElement('style');
          st.textContent='@keyframes confFall{0%{transform:translateY(0) rotate(0);opacity:1}80%{opacity:1}100%{transform:translateY(105vh) rotate(540deg);opacity:0}}';
          document.head.appendChild(st);
        })();
      ` }} />
    </div>
  )
}
