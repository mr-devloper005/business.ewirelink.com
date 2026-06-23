import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#f8f4ec',
  '--slot4-page-text': '#213448',
  '--slot4-panel-bg': '#f3dfc8',
  '--slot4-surface-bg': '#fffdf8',
  '--slot4-muted-text': '#547792',
  '--slot4-soft-muted-text': '#7f98aa',
  '--slot4-accent': '#213448',
  '--slot4-accent-fill': '#547792',
  '--slot4-accent-soft': '#d8e6eb',
  '--slot4-dark-bg': '#213448',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#d7e3e8',
  '--slot4-cream': '#eae0cf',
  '--slot4-warm': '#f6d3b0',
  '--slot4-lavender': '#94b4c1',
  '--slot4-gray': '#edf2f4',
  '--slot4-soft-blue': '#e3edf1',
  '--slot4-soft-peach': '#f5e3cd',
  '--slot4-border': 'rgba(33, 52, 72, 0.12)',
  '--slot4-shadow-soft': '0 20px 60px rgba(33, 52, 72, 0.08)',
  '--slot4-shadow-strong': '0 28px 90px rgba(33, 52, 72, 0.16)',
  '--slot4-body-gradient': 'linear-gradient(180deg, #f6efe3 0%, #f8f4ec 38%, #eef4f6 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-[var(--slot4-border)]',
  darkBorder: 'border-white/20',
  shadow: 'shadow-[var(--slot4-shadow-soft)]',
  shadowStrong: 'shadow-[var(--slot4-shadow-strong)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(33,52,72,0.02),rgba(33,52,72,0.82))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-12 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-5 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start',
    rail: 'flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[260px] shrink-0 snap-start sm:w-[290px]',
  },
  type: {
    eyebrow: 'text-[11px] font-black uppercase tracking-[0.2em]',
    heroTitle: 'text-4xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[5.2rem]',
    sectionTitle: 'text-3xl font-black leading-none tracking-[-0.045em] sm:text-4xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    soft: `border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: 'inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-dark-bg)] px-7 py-3.5 text-xs font-black tracking-[0.04em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--slot4-accent-fill)]',
    secondary: 'inline-flex items-center justify-center gap-2 rounded-full border border-[var(--slot4-border)] bg-white/80 px-7 py-3.5 text-xs font-black tracking-[0.04em] text-[var(--slot4-page-text)] transition hover:-translate-y-0.5 hover:bg-white',
    accent: 'inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-accent-fill)] px-7 py-3.5 text-xs font-black tracking-[0.04em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--slot4-dark-bg)]',
  },
  media: {
    frame: `relative overflow-hidden ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--slot4-shadow-strong)]',
    fade: 'transition duration-300 hover:opacity-75',
  },
} as const

export const aiLayoutRules = [
  'All visible layout decisions belong inside src/editable; keep data, SEO, API, and route logic untouched.',
  'Use a soft press-distribution visual system with floating nav pills, peach hero fields, blue CTA bands, and mixed card layouts.',
  'Keep dynamic post fetching intact and never replace backend posts with mock arrays.',
  'Use postHref() for all post links so route aliases and task-specific detail pages remain functional.',
  'Prioritize readable desktop and mobile layouts with deliberate spacing, varied cards, and safe fallbacks for missing fields.',
  'Branding must remain dynamic from SITE_CONFIG; never hardcode a reference publication name or logo.',
] as const
