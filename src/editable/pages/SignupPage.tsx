import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto max-w-[1080px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-6 rounded-[2.2rem] border border-[var(--slot4-border)] bg-white shadow-[var(--slot4-shadow-soft)] lg:grid-cols-[1.02fr_.98fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-[11px] font-black uppercase tracking-[.22em] text-[var(--slot4-accent-fill)]">Create account</p>
              <h1 className="mt-3 text-4xl font-black tracking-[-.05em]">{pagesContent.auth.signup.formTitle}</h1>
              <EditableLocalSignupForm />
              <p className="mt-5 border-t border-[var(--slot4-border)] pt-5 text-sm text-[var(--slot4-muted-text)]">
                Already have an account? <Link href="/login" className="font-black text-[var(--slot4-accent-fill)]">{pagesContent.auth.signup.loginCta}</Link>
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 text-white sm:p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Sparkles className="h-5 w-5 text-[#8fb2ff]" />
              </div>
              <p className="mt-5 text-[11px] font-black uppercase tracking-[.24em] text-[#8fb2ff]">{pagesContent.auth.signup.badge}</p>
              <h2 className="mt-5 max-w-xl text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl">{pagesContent.auth.signup.title}</h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-white/68">{pagesContent.auth.signup.description}</p>
              <Link href="/login" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#4361ee] px-6 py-3 text-sm font-black text-white">
                Go to login <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
