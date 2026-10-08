export type ChatMode = 'Rápido' | 'Especialista'

type ModeSelectorProps = {
  value: ChatMode
  onChange: (mode: ChatMode) => void
}

const modes: ChatMode[] = ['Rápido', 'Especialista']

export function ModeSelector({ value, onChange }: ModeSelectorProps) {
  return (
    <div
      aria-label="Modo de conversa"
      className="inline-flex rounded-2xl border border-white/[0.08] bg-slate-900/70 p-1"
      role="group"
    >
      {modes.map((mode) => {
        const selected = mode === value

        return (
          <button
            key={mode}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(mode)}
            className={`min-h-11 rounded-xl px-5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:px-6 ${
              selected
                ? 'bg-blue-400/15 text-blue-100 shadow-sm shadow-black/10'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {mode}
          </button>
        )
      })}
    </div>
  )
}
