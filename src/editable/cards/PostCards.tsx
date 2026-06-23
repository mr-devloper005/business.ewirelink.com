import Link from 'next/link'
import { ArrowRight, Clock3 } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'

export function getEditablePostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const images = Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((value): value is string => typeof value === 'string' && Boolean(value))
  const directImage = ['featuredImage', 'image', 'thumbnail', 'coverImage', 'logo', 'avatar']
    .map((key) => content[key])
    .find((value): value is string => typeof value === 'string' && Boolean(value))
  return mediaUrl || directImage || contentImage || '/placeholder.svg?height=900&width=1400'
}

export function getEditableExcerpt(post?: SitePost | null, limit = 150) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    (typeof content.body === 'string' && content.body) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim()
  if (!clean) return 'Fresh updates, noteworthy launches, and media-ready highlights collected in one place.'
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

export function getEditableCategory(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category) || post?.tags?.[0] || 'General Update'
}

export function postHref(task: TaskKey, post: SitePost, route = `/${task}`) {
  return `${route}/${post.slug}`
}

function indexLabel(index: number) {
  return String(index + 1).padStart(2, '0')
}

export function EditorialFeatureCard({ post, href, label = 'Featured release' }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link href={href} className="group block min-w-0 overflow-hidden rounded-[2rem] border border-[var(--slot4-border)] bg-white shadow-[var(--slot4-shadow-soft)]">
      <div className="relative aspect-[16/10] min-h-[420px] overflow-hidden">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,52,72,0.05),rgba(33,52,72,0.92))]" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-3 py-2 text-[10px] font-black uppercase tracking-[.18em] text-white backdrop-blur">{label}</span>
          <h3 className="mt-5 max-w-4xl text-4xl font-black leading-[.97] tracking-[-.055em] text-white sm:text-6xl">{post.title}</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{getEditableExcerpt(post, 190)}</p>
        </div>
      </div>
    </Link>
  )
}

export function RailPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group ${dc.layout.minRailCard} block overflow-hidden rounded-[1.75rem] border border-[var(--slot4-border)] bg-white ${dc.motion.lift}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent)] shadow-sm">{getEditableCategory(post)}</span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-muted-text)]">
          <span>Directory pick</span><span>{indexLabel(index)}</span>
        </div>
        <h3 className="mt-3 line-clamp-3 text-xl font-black leading-[1.02] tracking-[-.04em] text-[var(--slot4-page-text)]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function CompactIndexCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 grid-cols-[52px_1fr] gap-4 rounded-[1.3rem] border border-transparent px-3 py-4 transition hover:border-[var(--slot4-border)] hover:bg-white/80">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--slot4-soft-blue)] text-lg font-black leading-none text-[var(--slot4-accent)]">{indexLabel(index)}</span>
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-muted-text)]"><Clock3 className="h-3 w-3" /> {getEditableCategory(post)}</p>
        <h3 className="mt-2 line-clamp-3 text-lg font-black leading-tight tracking-[-.03em] text-[var(--slot4-page-text)] group-hover:text-[var(--slot4-accent)]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function HorizontalFeatureCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid overflow-hidden rounded-[1.8rem] border border-[var(--slot4-border)] bg-white shadow-[var(--slot4-shadow-soft)] sm:grid-cols-[240px_1fr]">
      <div className="relative min-h-[220px] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[.2em] text-[var(--slot4-muted-text)]">
          <span>{getEditableCategory(post)}</span>
          <span>{indexLabel(index)}</span>
        </div>
        <h3 className="mt-3 text-2xl font-black leading-[1.02] tracking-[-.045em] text-[var(--slot4-page-text)]">{post.title}</h3>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 175)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-[var(--slot4-accent)]">Open story <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}

export function ImageFirstCard({ post, href, label }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-[1.85rem] border border-[var(--slot4-border)] bg-white shadow-[var(--slot4-shadow-soft)]">
      <div className="relative aspect-[5/4] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-[var(--slot4-soft-peach)] px-3 py-1 text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">{label || getEditableCategory(post)}</span>
        </div>
        <h3 className="mt-4 line-clamp-2 text-2xl font-black leading-[1.05] tracking-[-.045em]">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 150)}</p>
      </div>
    </Link>
  )
}

export function ArticleListCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 gap-5 rounded-[1.8rem] border border-[var(--slot4-border)] bg-white p-5 shadow-[var(--slot4-shadow-soft)] sm:grid-cols-[240px_minmax(0,1fr)] sm:items-center sm:gap-7 sm:p-6">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.35rem] bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0">
        <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{indexLabel(index)} / {getEditableCategory(post)}</p>
        <h2 className="mt-3 line-clamp-3 text-3xl font-black leading-[1.02] tracking-[-.05em] text-[var(--slot4-page-text)] group-hover:text-[var(--slot4-accent)]">{post.title}</h2>
        <p className={`mt-4 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getEditableExcerpt(post, 190)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-[var(--slot4-accent)]">Read story <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}
