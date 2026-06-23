import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="overflow-hidden rounded-[2.2rem] border border-[var(--slot4-border)] bg-[#f4d8bb] shadow-[var(--slot4-shadow-soft)]">
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr_.9fr] lg:p-14">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[.24em] text-[var(--slot4-muted-text)]">{pagesContent.about.badge}</p>
                <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-[4.7rem]">
                  A steadier, cleaner way to present public-facing stories.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--slot4-page-text)]/72">{pagesContent.about.description}</p>
              </div>

              <div className="rounded-[1.8rem] border border-[var(--slot4-border)] bg-white/85 p-6 shadow-sm">
                <p className="text-[11px] font-black uppercase tracking-[.2em] text-[var(--slot4-muted-text)]">At a glance</p>
                <div className="mt-5 space-y-4">
                  {pagesContent.about.values.map((value) => (
                    <div key={value.title} className="flex items-start gap-3 rounded-[1.2rem] bg-[var(--slot4-surface-bg)] p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--slot4-accent-fill)]" />
                      <div>
                        <h2 className="text-lg font-black tracking-[-.03em]">{value.title}</h2>
                        <p className="mt-1 text-sm leading-7 text-[var(--slot4-muted-text)]">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-4 pb-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <article className="rounded-[2rem] border border-[var(--slot4-border)] bg-white p-7 shadow-[var(--slot4-shadow-soft)] sm:p-8">
              <p className="text-[11px] font-black uppercase tracking-[.22em] text-[var(--slot4-accent-fill)]">About {SITE_CONFIG.name}</p>
              <div className="article-content mt-6 space-y-6 text-[var(--slot4-page-text)]">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>

            <aside className="rounded-[2rem] border border-[var(--slot4-border)] bg-[#1b1b1b] p-7 text-white shadow-[var(--slot4-shadow-soft)] sm:p-8">
              <p className="text-[11px] font-black uppercase tracking-[.22em] text-[#7ca3ff]">Next stop</p>
              <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-.05em]">Keep exploring the archive.</h2>
              <p className="mt-4 text-base leading-8 text-white/68">Browse recent stories, visual posts, business entries, and public updates through the same polished reading flow.</p>
              <Link href="/search" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#4361ee] px-6 py-3 text-sm font-black text-white">
                Explore the archive <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
