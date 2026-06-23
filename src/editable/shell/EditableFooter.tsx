'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const outletLogos = ['ThePrint', 'Hello Entrepreneurs', 'Times of India', 'mid-day', 'india.com', 'Deccan Herald', 'Moneycontrol', 'BW Businessworld', 'India Today', 'CNBC']

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="mt-16 border-t border-[var(--slot4-border)] bg-[#f7f8fa] text-[var(--slot4-page-text)]">
      <div className="overflow-hidden border-b border-[var(--slot4-border)] bg-white py-6">
        <div className="logo-marquee flex min-w-max items-center gap-14 whitespace-nowrap px-6 text-xl font-black text-[var(--slot4-muted-text)] opacity-75">
          {[...outletLogos, ...outletLogos].map((logo, index) => <span key={`${logo}-${index}`}>{logo}</span>)}
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-[2rem] bg-[#4361ee] px-6 py-14 text-center text-white shadow-[var(--slot4-shadow-strong)] sm:px-10 lg:px-14 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[.2em] text-white/85">Trusted media outlet network</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl">Get started today and let your story be heard.</h2>
            <p className="mt-5 text-base leading-8 text-white/78 sm:text-lg">Share announcements, company updates, media-ready stories, and public-facing releases through a clearer, more confident publishing experience.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href={session ? '/create' : '/signup'} className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-[#213448]">
                {session ? 'Open workspace' : 'Publish your first update'} <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-sm font-bold text-white/75">No extra setup required</span>
            </div>
          </div>
        </section>

        <div className="grid gap-10 px-2 py-12 lg:grid-cols-[1.15fr_.85fr_.85fr_.85fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[var(--slot4-border)] bg-white">
                <img src="/favicon.png" alt={`${SITE_CONFIG.name} logo`} className="h-10 w-10 object-contain" />
              </span>
              <span className="editorial-brand text-4xl font-black tracking-[-0.055em]">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--slot4-muted-text)]">{globalContent.footer?.description || SITE_CONFIG.description}</p>
          </div>

          {(globalContent.footer.columns || []).filter((column) => column.title.toLowerCase() !== 'explore').map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-black uppercase tracking-[.22em] text-[var(--slot4-muted-text)]">{column.title}</h3>
              <div className="mt-5 grid gap-3">
                {column.links.map((link) => (
                  <Link key={`${column.title}-${link.label}`} href={link.href} className="text-sm font-bold text-[var(--slot4-page-text)] transition hover:text-[var(--slot4-accent-fill)]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-black uppercase tracking-[.22em] text-[var(--slot4-muted-text)]">Access</h3>
            <div className="mt-5 grid gap-3">
              {session ? <Link href="/create" className="text-sm font-bold transition hover:text-[var(--slot4-accent-fill)]">Workspace</Link> : <Link href="/login" className="text-sm font-bold transition hover:text-[var(--slot4-accent-fill)]">Log in</Link>}
              {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold transition hover:text-[var(--slot4-accent-fill)]">Logout</button> : <Link href="/signup" className="text-sm font-bold transition hover:text-[var(--slot4-accent-fill)]">Create account</Link>}
              <Link href="/contact" className="text-sm font-bold transition hover:text-[var(--slot4-accent-fill)]">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--slot4-border)] px-4 py-5 text-center text-[11px] font-bold text-[var(--slot4-muted-text)]">
        © {year} {SITE_CONFIG.name}. {globalContent.footer.bottomNote}
      </div>
    </footer>
  )
}
