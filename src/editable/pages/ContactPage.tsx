'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Send story ideas, corrections, source material, and publication questions.' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Discuss distribution, syndication, newsroom collaborations, and campaign-style publishing support.' },
  { icon: Mail, title: 'General support', body: 'Reach out for account, publishing, or site-related help through one clear contact lane.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="overflow-hidden rounded-[2.2rem] border border-[var(--slot4-border)] bg-[#f4d8bb] shadow-[var(--slot4-shadow-soft)]">
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.08fr_.92fr] lg:p-14">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[.24em] text-[var(--slot4-muted-text)]">{pagesContent.contact.eyebrow}</p>
                <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-[4.5rem]">{pagesContent.contact.title}</h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--slot4-page-text)]/72">{pagesContent.contact.description}</p>
              </div>

              <div className="rounded-[1.8rem] border border-[var(--slot4-border)] bg-white/85 p-6 shadow-sm">
                <p className="text-[11px] font-black uppercase tracking-[.2em] text-[var(--slot4-muted-text)]">Contact lanes</p>
                <div className="mt-5 space-y-4">
                  {desks.map((desk, index) => (
                    <div key={desk.title} className="rounded-[1.2rem] bg-[var(--slot4-surface-bg)] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <desk.icon className="h-5 w-5 text-[var(--slot4-accent-fill)]" />
                        <span className="text-[11px] font-black uppercase tracking-[.16em] text-[var(--slot4-muted-text)]">0{index + 1}</span>
                      </div>
                      <h2 className="mt-3 text-xl font-black tracking-[-.03em]">{desk.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{desk.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-4 pb-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[.86fr_1.14fr]">
            <aside className="rounded-[2rem] border border-[var(--slot4-border)] bg-[#1b1b1b] p-7 text-white shadow-[var(--slot4-shadow-soft)] sm:p-8">
              <p className="text-[11px] font-black uppercase tracking-[.22em] text-[#8fb2ff]">Why this page works</p>
              <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-.05em]">One clear contact experience, not a stretched support wall.</h2>
              <p className="mt-4 text-base leading-8 text-white/68">This layout keeps the page tighter, cleaner, and aligned with the homepage, auth pages, and create workspace while still leaving room for real inquiries.</p>
            </aside>

            <div className="rounded-[2rem] border border-[var(--slot4-border)] bg-white p-7 shadow-[var(--slot4-shadow-soft)] sm:p-8">
              <p className="text-[11px] font-black uppercase tracking-[.22em] text-[var(--slot4-accent-fill)]">Send a message</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-.05em]">{pagesContent.contact.formTitle}</h2>
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
