import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto max-w-[1080px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-6 rounded-[2.2rem] border border-[var(--slot4-border)] bg-white shadow-[var(--slot4-shadow-soft)] lg:grid-cols-[.95fr_1.05fr]">
            <div className="bg-[#f4d8bb] p-8 sm:p-10">
              <p className="text-[11px] font-black uppercase tracking-[.24em] text-[var(--slot4-muted-text)]">{pagesContent.auth.login.badge}</p>
              <h1 className="mt-5 max-w-xl text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl">{pagesContent.auth.login.title}</h1>
              <p className="mt-5 max-w-lg text-base leading-8 text-[var(--slot4-page-text)]/72">{pagesContent.auth.login.description}</p>
              <div className="mt-8 space-y-3">
                {['Quick access to the publishing workspace', 'Simple account flow with local session support', 'Same visual rhythm as the rest of the site'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-[var(--slot4-page-text)]/78">
                    <CheckCircle2 className="h-4 w-4 text-[var(--slot4-accent-fill)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-[11px] font-black uppercase tracking-[.22em] text-[var(--slot4-accent-fill)]">Member access</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-.05em]">{pagesContent.auth.login.formTitle}</h2>
              <EditableLocalLoginForm />
              <p className="mt-5 border-t border-[var(--slot4-border)] pt-5 text-sm text-[var(--slot4-muted-text)]">
                New here? <Link href="/signup" className="font-black text-[var(--slot4-accent-fill)]">{pagesContent.auth.login.createCta}</Link>
              </p>
              <Link href="/signup" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[var(--slot4-page-text)]">
                Create a new account <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
