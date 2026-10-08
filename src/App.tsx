import { useState } from 'react'
import { FeatureToggle } from './components/FeatureToggle'
import { ModeSelector, type ChatMode } from './components/ModeSelector'

export default function App() {
  const [mode, setMode] = useState<ChatMode>('Rápido')
  const [deepThinking, setDeepThinking] = useState(false)
  const [smartSearch, setSmartSearch] = useState(false)

  return (
    <main className="chat-page relative flex min-h-screen flex-col items-center overflow-hidden px-5 py-12 text-slate-100 sm:justify-center sm:px-8 sm:py-16">
      <div aria-hidden="true" className="page-glow pointer-events-none absolute inset-0" />

      <section className="relative z-10 flex w-full max-w-3xl flex-col items-center">
        <header className="mb-8 text-center sm:mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Eren Yeager
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
            O que vamos explorar hoje?
          </p>
        </header>

        <ModeSelector value={mode} onChange={setMode} />

        <div className="mt-5 w-full rounded-3xl border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-black/30 sm:mt-6 sm:p-4">
          <label className="sr-only" htmlFor="message">
            Mensagem para Eren Yeager
          </label>
          <textarea
            id="message"
            rows={2}
            placeholder="Pergunte qualquer coisa"
            className="min-h-28 w-full resize-none bg-transparent px-3 py-3 text-base leading-7 text-slate-100 outline-none placeholder:text-slate-500 sm:min-h-32 sm:px-4"
          />

          <div className="flex flex-col gap-2 border-t border-white/[0.07] px-1 pt-3 sm:flex-row sm:items-center sm:justify-between sm:px-0">
            <div className="flex flex-wrap gap-2">
              <FeatureToggle
                label="Pensamento profundo"
                active={deepThinking}
                onToggle={() => setDeepThinking(!deepThinking)}
              >
                ✦
              </FeatureToggle>
              <FeatureToggle
                label="Busca inteligente"
                active={smartSearch}
                onToggle={() => setSmartSearch(!smartSearch)}
              >
                +
              </FeatureToggle>
            </div>

            <button
              type="button"
              disabled
              aria-label="Enviar mensagem (indisponível nesta versão)"
              title="O envio de mensagens ainda não está disponível"
              className="flex size-11 shrink-0 self-end items-center justify-center rounded-full bg-blue-500/35 text-xl text-blue-100/45 sm:self-auto"
            >
              ↑
            </button>
          </div>
        </div>

        <p className="mt-5 px-4 text-center text-xs leading-5 text-slate-500">
          Escolha um modo e ajuste as opções para personalizar sua experiência.
        </p>
      </section>
    </main>
  )
}
