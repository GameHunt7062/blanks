import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import s from './page.module.css'

const LOGO = '/BlanK.png'
const SITE = 'https://blankbot.vercel.app'

export const metadata: Metadata = {
  title: 'BlanK-AsseT — Discord Bot',
  description: 'The Discord bot built for serious servers. Powerful moderation, smart automation, and advanced server management — free, always.',
  openGraph: {
    title: 'BlanK-AsseT — Discord Bot',
    description: 'The Discord bot built for serious servers. Powerful moderation, smart automation, and advanced server management — free, always.',
    images: [{ url: LOGO, width: 1080, height: 1080 }],
  },
}

export default function Home() {
  return (
    <>
      <Nav active="home" />

      {/* ── HERO ── */}
      <section className={s.hero}>
        <div className={s.heroBg} aria-hidden />
        <div className={s.heroBannerWrap}>
          <img src="/blank-banner.png" alt="BLANK" className={s.heroLogoImg} />
        </div>
        <div className={s.heroInner}>
          <h1 className={s.heroTitle}>
            <span className={s.heroTitleSub}>The Bot I Was Dreaming Of</span>
          </h1>
          <div className={s.heroBtns}>
            <a
              className={s.btnBlurple}
              href="https://discord.com/oauth2/authorize?client_id=1385103762737201153"
              target="_blank" rel="noreferrer"
            >
              Add to Server — It&apos;s Free
            </a>
            <a
              className={s.btnGhost}
              href="https://discord.gg/3MJAYraXu8"
              target="_blank" rel="noreferrer"
            >
              Join Support Server
            </a>
          </div>
        </div>
        <div className={s.heroVisual} aria-hidden>
          <div className={s.heroBotCard}>
            <img src={LOGO} alt="" className={s.heroBotAvatar} />
            <div className={s.heroBotInfo}>
              <div className={s.heroBotName}>
                BlanK-AsseT
                <span className={s.appBadge}>
                  <svg viewBox="0 0 16 16" width={11} height={11} fill="none" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M4 8.5 6.8 11.2 12 5.2"/></svg>
                  APP
                </span>
              </div>
              <div className={s.heroBotStatus}><span className={s.statusDot} />Online</div>
            </div>
          </div>
          <div className={s.heroMsgGroup}>
            {DEMO_MSGS.map((m, i) => (
              <div key={i} className={s.heroMsg} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className={s.heroMsgBar} style={{ background: m.color }} />
                <div>
                  <span className={s.heroMsgCmd}>{m.cmd}</span>
                  <span className={s.heroMsgText}>{m.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={s.stats}>
        <div className={s.statsInner}>
          {STATS.map(st => (
            <div key={st.label} className={s.stat}>
              <div className={s.statNum}>{st.num}</div>
              <div className={s.statLbl}>{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMMANDS ── */}
      <section className={s.section}>
        <div className={s.sectionInner}>
          <p className={s.eyebrow}>Commands</p>
          <h2 className={s.sectionTitle}>Every command, by module</h2>
          <p className={s.sectionDesc}>The full command list, grouped exactly like the in-bot help menu.</p>
          <div className={s.commandGrid}>
            {COMMAND_GROUPS.map(g => (
              <div key={g.name} className={s.commandGroup}>
                <h3 className={s.commandGroupTitle}>{g.name}</h3>
                <div className={s.commandList}>
                  {g.commands.map((c, i) => (
                    <div key={i} className={s.commandRow}>
                      <span className={s.commandName}>{c.cmd}</span>
                      <span className={s.commandDesc}>{c.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className={s.whySection}>
        <div className={s.sectionInner}>
          <div className={s.whyGrid}>
            <div className={s.whyText}>
              <p className={s.eyebrow}>Why BlanK-AsseT</p>
              <h2 className={s.sectionTitle} style={{ marginBottom: 16 }}>Built different</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: 32 }}>
                Most bots are bloated catch-alls. BlanK-AsseT is engineered for reliability —
                every module isolated, every action logged, every edge case handled.
              </p>
              <div className={s.whyPoints}>
                {WHY.map(w => (
                  <div key={w.title} className={s.whyPoint}>
                    <div className={s.whyPointIcon} dangerouslySetInnerHTML={{ __html: w.icon }} />
                    <div>
                      <div className={s.whyPointTitle}>{w.title}</div>
                      <div className={s.whyPointDesc}>{w.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={s.whyCard}>
              <div className={s.altCard}>
                <div className={s.altCardHeader}>
                  <svg viewBox="0 0 20 20" width={18} height={18} fill="none" stroke="var(--teal)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M10 18s7-3 7-9V4l-7-2.5L3 4v5c0 6 7 9 7 9z"/></svg>
                  <span>AltVerify — Live Detection</span>
                </div>
                <div className={s.altCardBody}>
                  {ALT_EVENTS.map((e, i) => (
                    <div key={i} className={s.altEvent} style={{ animationDelay: `${i * 0.4}s` }}>
                      <span className={`${s.altBadge} ${e.blocked ? s.badgeRed : s.badgeGreen}`}>
                        {e.blocked ? 'BLOCKED' : 'VERIFIED'}
                      </span>
                      <span className={s.altUser}>{e.user}</span>
                      <span className={s.altNote}>{e.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={s.ctaSection}>
        <div className={s.ctaInner}>
          <h2 className={s.ctaTitle}>Ready to upgrade your server?</h2>
          <p className={s.ctaDesc}>Free to add. No hidden fees. Works in any server.</p>
          <div className={s.ctaBtns}>
            <a
              className={s.btnBlurple}
              href="https://discord.com/oauth2/authorize?client_id=1385103762737201153"
              target="_blank" rel="noreferrer"
            >
              Add BlanK-AsseT Free
            </a>
            <a
              className={s.btnOutline}
              href="https://top.gg/bot/1385103762737201153?s=0febbf4a4e2fd"
              target="_blank" rel="noreferrer"
            >
              ⭐ Vote on top.gg
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

/* ── DATA ── */

const DEMO_MSGS = [
  { cmd: '/altverify setup', text: ' — AltVerify configured ✅', color: 'var(--teal)' },
  { cmd: '/ticket create',  text: ' — Ticket #0042 opened 🎫', color: 'var(--blurple)' },
  { cmd: '/giveaway start', text: ' — Giveaway running 🎉', color: 'var(--yellow)' },
  { cmd: '/invitelog',      text: ' — Tracking 18 invites 📊', color: 'var(--green)' },
]

const STATS = [
  { num: '15+', label: 'Modules' },
  { num: '24/7', label: 'Uptime' },
  { num: 'Free', label: 'Always' },
]

const COMMAND_GROUPS = [
  {
    name: 'Invite Management',
    commands: [
      { cmd: 'invites <user>', desc: 'Show invite stats of a user' },
      { cmd: 'inviter <user>', desc: 'Find who invited a user' },
      { cmd: 'invited <user>', desc: 'List members invited by a user' },
      { cmd: 'invlog testjoin', desc: 'Test the join message' },
      { cmd: 'invlog testleave', desc: 'Test the leave message' },
      { cmd: 'invlog joinchannel', desc: 'Set the join log channel' },
      { cmd: 'invlog leavechannel', desc: 'Set the leave log channel' },
      { cmd: 'invlog joinmessage', desc: 'Set the join embed' },
      { cmd: 'invlog leavemessage', desc: 'Set the leave embed' },
      { cmd: 'invreset <user>', desc: 'Reset invite data for a user' },
      { cmd: 'invresetall', desc: 'Reset all invite data in the server' },
    ],
  },
  {
    name: 'Embed Builder',
    commands: [
      { cmd: 'ed create', desc: 'Create a new embed' },
      { cmd: 'ed edit <msg_id>', desc: 'Edit an existing embed' },
      { cmd: 'ed delete <msg_id>', desc: 'Delete an embed' },
      { cmd: 'ed restore <msg_id>', desc: 'Restore a deleted embed' },
      { cmd: 'ed response add <msg_id>', desc: 'Add an interactive response to an embed' },
      { cmd: 'ed response edit <msg_id>', desc: 'Edit existing responses' },
      { cmd: 'ed response remove <msg_id>', desc: 'Remove embed responses' },
    ],
  },
  {
    name: 'Ticket Config',
    commands: [
      { cmd: 'tc setup', desc: 'Set up a new ticket system' },
      { cmd: 'tc close <closing_reason>', desc: 'Close a ticket (reason optional)' },
      { cmd: 'tc rename <new_name>', desc: 'Rename the ticket channel' },
      { cmd: 'tc add <user_name/user_id>', desc: 'Add a user to the ticket' },
      { cmd: 'tc remove <@user/username/user_id>', desc: 'Remove a user from the ticket' },
    ],
  },
  {
    name: 'Sticky Notes',
    commands: [
      { cmd: 'stick add <message>', desc: 'Add a sticky note to the current channel' },
      { cmd: 'stick remove <channel>', desc: 'Remove a sticky note from a channel' },
      { cmd: 'stick list', desc: 'List all sticky notes' },
    ],
  },
  {
    name: 'Auto Roles',
    commands: [
      { cmd: 'autorole list', desc: 'List current autorole settings' },
      { cmd: 'autorole add @role <type>', desc: 'Add a role to autorole' },
      { cmd: 'autorole addmore', desc: 'Select multiple roles to add' },
      { cmd: 'autorole remove @role', desc: 'Remove a role from autorole' },
      { cmd: 'autorole removemore', desc: 'Select multiple roles to remove' },
    ],
  },
  {
    name: 'Anti-Bot Config',
    commands: [
      { cmd: 'antibot list', desc: 'List antibot channels & bypass roles' },
      { cmd: 'antibot add #channel', desc: 'Add a channel to antibot' },
      { cmd: 'antibot remove #channel', desc: 'Remove a channel from antibot' },
      { cmd: 'antibot addmore', desc: 'Add multiple channels via a selection menu' },
      { cmd: 'antibot removemore', desc: 'Remove multiple channels via a selection menu' },
      { cmd: 'antibot bypass list', desc: 'Show current bypass roles' },
      { cmd: 'antibot bypass add @role', desc: 'Add a bypass role' },
      { cmd: 'antibot bypass remove @role', desc: 'Remove a bypass role' },
    ],
  },
  {
    name: 'Moderation & Utility',
    commands: [
      { cmd: 'nick <user>', desc: "Reset a user's nickname" },
      { cmd: 'nick <user> <new_nick>', desc: "Update a user's nickname" },
      { cmd: 'timeout <user> <time>', desc: 'Mute a user' },
      { cmd: 'removetimeout <user>', desc: 'Unmute a user' },
      { cmd: 'lock #channel <user/role>', desc: 'Lock a channel' },
      { cmd: 'unlock #channel <user/role>', desc: 'Unlock a channel' },
      { cmd: 'lockall #channel <user/role>', desc: 'Lock all channels' },
      { cmd: 'unlockall #channel <user/role>', desc: 'Unlock all channels' },
      { cmd: 'hide #channel <user/role>', desc: 'Hide a channel' },
      { cmd: 'unhide #channel <user/role>', desc: 'Unhide a channel' },
      { cmd: 'hideall #channel <user/role>', desc: 'Hide all channels' },
      { cmd: 'unhideall #channel <user/role>', desc: 'Unhide all channels' },
    ],
  },
  {
    name: 'Giveaway Screen',
    commands: [
      { cmd: 'giveaway start <time> <prize>', desc: 'Start a giveaway' },
      { cmd: 'giveaway end <message_id>', desc: 'End a giveaway' },
      { cmd: 'giveaway reroll <message_id>', desc: 'Reroll a giveaway winner' },
      { cmd: 'giveaway list', desc: 'List active giveaways' },
      { cmd: 'giveaway delete <message_id>', desc: 'Delete a giveaway' },
      { cmd: 'giveaway update <message_id>', desc: 'Update a giveaway' },
    ],
  },
  {
    name: 'Alt-Verify',
    commands: [
      { cmd: '/altverify_setup', desc: 'Create verification channels & roles' },
      { cmd: '/altverify_disable', desc: 'Remove verification channels & roles' },
      { cmd: '/altverify_lockdown', desc: 'Lock new channels for unverified users' },
      { cmd: '/altverify_check', desc: "Check a user's verification details" },
      { cmd: '/altverify_reset', desc: "Reset a user's verification" },
      { cmd: '/altverify_reset_all', desc: 'Reset verification for everyone' },
    ],
  },
]

const WHY = [
  {
    title: 'Modular design',
    desc: 'Enable only what you need. Disable at any time without affecting other features.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  },
  {
    title: 'Detailed logging',
    desc: 'Every significant action produces a rich timestamped embed in your log channel.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  },
  {
    title: 'Slash + Prefix',
    desc: 'Every command works with both slash commands and your custom prefix.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  },
]

const ALT_EVENTS = [
  { user: 'user#4821',  note: 'New join — IP verified',      blocked: false },
  { user: 'alt#9934',   note: 'Matching IP — original in server', blocked: true  },
  { user: 'user#1102',  note: 'Returning member — restored',  blocked: false },
  { user: 'ghost#0077', note: 'Duplicate account detected',   blocked: true  },
]
