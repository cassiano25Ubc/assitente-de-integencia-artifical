import type { ReactNode } from 'react'

type FeatureToggleProps = {
  label: string
  active: boolean
  onToggle: () => void
  children: ReactNode
}

export function FeatureToggle({ label, active, onToggle, children }: FeatureToggleProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onToggle}
      className={`inline-flex min-h-11 items-center gap-2 rounded-xl border px-3 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:text-sm ${
        active
          ? 'border-blue-300/30 bg-blue-400/15 text-blue-100'
          : 'border-transparent bg-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200'
      }`}
    >
      <span className={active ? 'text-blue-200' : 'text-slate-500'}>{children}</span>
      {label}
    </button>
  )
}
