import Link from 'next/link'
import { ArrowRight, CheckCircle2, Search, Star } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableCategory, getEditableExcerpt, getEditablePostImage, HorizontalFeatureCard, ImageFirstCard, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const mediaMarks = ['ThePrint', 'hello entrepreneurs', 'TOI', 'mid-day', 'india.com', 'DH', 'moneycontrol', 'BW', 'India Today', 'CNBC']

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ') || `${SITE_CONFIG.name}: independent stories, culture, and perspective.`

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7d3b3_0%,#f4d8bb_58%,#f8f4ec_100%)]" />
      <div className="relative">
        <div className={`${dc.shell.section} pt-8 sm:pt-10 lg:pt-12`}>
          <div className="mx-auto max-w-4xl py-8 text-center sm:py-12">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#4f6ff2]/35 bg-white/75 px-5 py-3 text-[11px] font-black uppercase tracking-[.2em] text-[var(--slot4-page-text)] backdrop-blur">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#e7ecff] text-[#4f6ff2]">
                  <Star className="h-3 w-3 fill-current" />
                </span>
                Your official media distribution site
              </div>
              <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.065em] text-[var(--slot4-page-text)] sm:text-6xl lg:text-[4.8rem]">{heroTitle}</h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--slot4-page-text)]/78">{pagesContent.home.hero.description}</p>
            </div>
        </div>

        <div className="mt-6 border-y border-[var(--slot4-border)] bg-white/75 backdrop-blur">
          <div className="logo-marquee flex min-w-max items-center gap-16 whitespace-nowrap px-6 py-5 text-2xl font-black text-[var(--slot4-page-text)]/72">
            {[...mediaMarks, ...mediaMarks].map((mark, index) => <span key={`${mark}-${index}`}>{mark}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featureSet = [
    { title: 'PressRelease.in Newsroom', description: 'A dedicated stream for releases, updates, and stories that stay easy to browse long after launch.' },
    { title: 'Top-Tier Media & Journalist Network', description: 'Launch-ready posts built to travel smoothly across category feeds and media-facing touchpoints.' },
    { title: 'Search Engines & AI Discovery', description: 'Structured updates, clear headlines, and summaries that work across search, references, and discovery layers.' },
  ]

  return (
    <section className="bg-[#faf8f2]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black leading-[1.04] tracking-[-0.055em] text-[var(--slot4-page-text)] sm:text-6xl">Get featured in top media outlets and get discovered.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[var(--slot4-muted-text)]">Bring announcements, launches, profiles, and public updates into one polished discovery flow built for media distribution.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featureSet.map((item, index) => (
            <article key={item.title} className="rounded-[1.8rem] bg-transparent px-4 py-2 text-center">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[var(--slot4-accent-fill)] shadow-[var(--slot4-shadow-soft)]">
                <Star className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-[var(--slot4-page-text)]">{item.title}</h3>
              <p className="mt-3 text-base leading-8 text-[var(--slot4-muted-text)]">{item.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  return (
    <section className="bg-[var(--slot4-page-bg)]">
      <div className={`${dc.shell.section} py-10 sm:py-14`}>
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-[11px] font-black uppercase tracking-[.24em] text-[var(--slot4-muted-text)]">Why teams choose this format</p>
            <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl text-[var(--slot4-page-text)]">Everything you need to distribute, track, and report.</h2>
            <div className="space-y-4 border-l border-[var(--slot4-border)] pl-5">
              {[
                'Real-time style story presentation with strong lead visuals',
                'Simple publishing rhythm that keeps updates easy to scan',
                'Stakeholder-friendly summaries and supporting content blocks',
                'Flexible layouts that work for launches, profiles, and announcements',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--slot4-accent-fill)]" />
                  <p className="text-base font-bold leading-8 text-[var(--slot4-page-text)]/82">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts.slice(3)
  const listPosts = source.slice(0, 5).length ? source.slice(0, 5) : posts.slice(0, 5)

  return (
    <section className="bg-[#1b1b1b] text-white">
      <div className={`${dc.shell.section} py-14 sm:py-20`}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-black uppercase tracking-[.24em] text-[#5f85ff]">Distribution that feels human</p>
          <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl">Put your story where people actually look.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/60">One announcement can work across media, search, category archives, and reporting surfaces when the presentation stays clean and consistent.</p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[1.8rem] border border-white/10 lg:grid-cols-4">
          {[
            { title: 'Media reach', desc: 'Get stories in front of editors and audiences with a launch-ready card system.' },
            { title: 'Newsroom', desc: 'Keep every brand update connected inside a readable archive.' },
            { title: 'Discovery', desc: 'Improve findability across search and topic-led browsing.' },
            { title: 'Reporting', desc: 'Organize supporting details, comments, and next actions in one flow.' },
          ].map((item) => (
            <div key={item.title} className="border-b border-r border-white/10 bg-white/[0.03] p-5 last:border-r-0 lg:border-b-0">
              <h3 className="text-2xl font-black tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="rounded-[1.9rem] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-4xl font-black tracking-[-0.05em]">Media reach</h3>
            <p className="mt-5 text-base leading-8 text-white/65">Your announcements can carry across credible outlets, archive pages, and discovery surfaces without making the experience feel cluttered.</p>
            <Link href={primaryRoute} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#4361ee] px-6 py-3 text-sm font-black text-white">
              Browse the archive <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-7 space-y-3 border-t border-white/10 pt-5">
              {['Gets your story in front of editors', 'Expands beyond one announcement channel', 'Improves discovery after launch day', 'Keeps reporting simple'].map((item, index) => (
                <div key={item} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm font-bold text-white/78 last:border-b-0">
                  <span>{item}</span>
                  <span className="text-white/35">{String(index + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-4">
          <h3 className="text-xl font-black tracking-[-0.04em]">Quick reads</h3>
          <div className="mt-3">
            {listPosts.map((post, index) => <CompactIndexCard key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </div>

        <form action="/search" className="mt-10 grid gap-4 rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
          <div>
            <h3 className="text-3xl font-black tracking-[-.05em]">Search the full archive</h3>
            <p className="mt-2 text-sm text-white/60">Explore every {taskLabel(primaryTask).toLowerCase()} published by {SITE_CONFIG.name}.</p>
          </div>
          <label className="flex rounded-[1.2rem] border border-white/10 bg-white">
            <Search className="ml-4 mt-4 h-4 w-4 text-[var(--slot4-muted-text)]" />
            <input name="q" placeholder="Search stories" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-[var(--slot4-page-text)] outline-none" />
            <button className="rounded-r-[1.1rem] bg-[#4361ee] px-5 text-xs font-black uppercase tracking-[.14em] text-white">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[#f7f8fa]">
      <div className={`${dc.shell.section} py-14 sm:py-16`}>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.9rem] bg-[#e3ebff] p-8">
            <p className="text-[11px] font-black uppercase tracking-[.24em] text-[var(--slot4-muted-text)]">For businesses</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.04] tracking-[-.055em] text-[var(--slot4-page-text)]">A polished home for launches, updates, and media-facing stories.</h2>
            <p className="mt-4 text-base leading-8 text-[var(--slot4-muted-text)]">Move announcements from idea to publication with a layout system that feels premium but stays easy to browse.</p>
          </div>
          <div className="rounded-[1.9rem] bg-[#f4d567] p-8">
            <p className="text-[11px] font-black uppercase tracking-[.24em] text-[var(--slot4-muted-text)]">For journalists</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.04] tracking-[-.055em] text-[var(--slot4-page-text)]">Find category-led stories with stronger previews and less noise.</h2>
            <p className="mt-4 text-base leading-8 text-[var(--slot4-page-text)]/78">Readable cards, helpful summaries, and consistent detail pages make it faster to spot useful coverage ideas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
