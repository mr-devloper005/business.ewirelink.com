'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto max-w-[1440px]">
        <div className="rounded-[1.7rem] border border-[var(--slot4-border)] bg-white/92 px-4 py-3 shadow-[var(--slot4-shadow-soft)] backdrop-blur md:px-5">
          <div className="flex items-center gap-3 lg:hidden">
            <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--slot4-border)] bg-[var(--slot4-soft-blue)] text-[var(--slot4-page-text)]" aria-label="Toggle navigation">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Link href="/" className="min-w-0 flex-1 truncate text-2xl font-black tracking-[-0.05em] text-[var(--slot4-accent)]">
              <span className="editorial-brand">{SITE_CONFIG.name}</span>
            </Link>
            <Link href={session ? '/create' : '/signup'} className="inline-flex h-11 items-center rounded-2xl bg-[var(--slot4-accent-fill)] px-4 text-sm font-black text-white">
              {session ? 'Publish' : 'Start'}
            </Link>
          </div>

          <div className="hidden items-center justify-between gap-5 lg:flex">
            <div className="flex min-w-0 items-center gap-4">
              <Link href="/" className="flex min-w-0 items-center gap-3 rounded-[1.2rem] bg-white px-3 py-2">
                <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[var(--slot4-border)] bg-white">
                  <img src="/favicon.png" alt={`${SITE_CONFIG.name} logo`} className="h-9 w-9 object-contain" />
                </span>
                <span className="min-w-0 text-3xl font-black leading-none tracking-[-0.06em] text-[var(--slot4-page-text)]">
                  <span className="editorial-brand block truncate">{SITE_CONFIG.name}</span>
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <form action="/search" className="flex items-center rounded-[1.2rem] border border-[var(--slot4-border)] bg-[var(--slot4-surface-bg)] pl-3">
                <Search className="h-4 w-4 text-[var(--slot4-muted-text)]" />
                <input name="q" type="search" placeholder="Search updates" className="w-40 bg-transparent px-3 py-3 text-sm font-medium outline-none placeholder:text-[var(--slot4-soft-muted-text)] xl:w-52" />
              </form>
              <nav className="flex items-center gap-1 rounded-[1.3rem] border border-[var(--slot4-border)] bg-white p-2">
                <Link href="/about" className="rounded-xl px-4 py-3 text-sm font-bold text-[var(--slot4-muted-text)] transition hover:bg-[var(--slot4-soft-blue)] hover:text-[var(--slot4-page-text)]">About</Link>
                <Link href="/contact" className="rounded-xl px-4 py-3 text-sm font-bold text-[var(--slot4-muted-text)] transition hover:bg-[var(--slot4-soft-blue)] hover:text-[var(--slot4-page-text)]">Distribution</Link>
                {session ? <Link href="/create" className="rounded-xl px-4 py-3 text-sm font-bold text-[var(--slot4-muted-text)] transition hover:bg-[var(--slot4-soft-blue)] hover:text-[var(--slot4-page-text)]">Workspace</Link> : <Link href="/login" className="rounded-xl px-4 py-3 text-sm font-bold text-[var(--slot4-muted-text)] transition hover:bg-[var(--slot4-soft-blue)] hover:text-[var(--slot4-page-text)]">Login</Link>}
                {session ? (
                  <button type="button" onClick={logout} className="rounded-xl px-4 py-3 text-sm font-bold text-[var(--slot4-muted-text)] transition hover:bg-[var(--slot4-soft-blue)] hover:text-[var(--slot4-page-text)]">
                    Logout
                  </button>
                ) : null}
                <Link href={session ? '/create' : '/signup'} className="inline-flex items-center gap-2 rounded-xl bg-[#4f6ff2] px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-[var(--slot4-accent-fill)]">
                  {session ? 'Publish' : 'Get Started'} <ArrowRight className="h-4 w-4" />
                </Link>
              </nav>
            </div>
          </div>

          {open ? (
            <div className="mt-4 grid gap-3 border-t border-[var(--slot4-border)] pt-4 lg:hidden">
              <form action="/search" className="flex items-center rounded-[1.15rem] border border-[var(--slot4-border)] bg-[var(--slot4-surface-bg)] pl-3">
                <Search className="h-4 w-4 text-[var(--slot4-muted-text)]" />
                <input name="q" type="search" placeholder="Search updates" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-[var(--slot4-soft-muted-text)]" />
              </form>
              {[{ label: 'About', href: '/about' }, { label: 'Distribution', href: '/contact' }, { label: 'Login', href: session ? '/create' : '/login' }].map((item) => (
                <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-[1.15rem] border border-[var(--slot4-border)] bg-[var(--slot4-surface-bg)] px-4 py-3 text-sm font-bold text-[var(--slot4-page-text)]">
                  {item.label}
                </Link>
              ))}
              {session ? (
                <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-[1.15rem] border border-[var(--slot4-border)] bg-[var(--slot4-surface-bg)] px-4 py-3 text-left text-sm font-bold text-[var(--slot4-page-text)]">
                  Logout
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}
