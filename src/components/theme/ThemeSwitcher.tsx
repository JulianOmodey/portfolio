'use client'

import { useEffect, useRef, useState } from 'react'
import {
  FiAperture,
  FiChevronDown,
  FiDroplet,
  FiMoon,
  FiSun,
} from 'react-icons/fi'
import type { IconType } from 'react-icons'
import { themeOptions } from '@/features/home/hooks/use-theme'
import type { ThemeName } from '@/features/home/hooks/use-theme'

interface ThemeSwitcherProps {
  compact?: boolean
  theme: ThemeName
  onThemeChange: (nextTheme: ThemeName) => void
}

const joinClasses = (...classes: Array<string | false | null | undefined>): string =>
  classes.filter(Boolean).join(' ')

export default function ThemeSwitcher({
  compact = false,
  theme,
  onThemeChange,
}: ThemeSwitcherProps) {
  const containerRef = useRef<HTMLElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const themeIcons: Record<ThemeName, IconType> = {
    ocean: FiDroplet,
    'mono-dark': FiMoon,
    'mono-light': FiSun,
    'crimson-gold': FiAperture,
  }

  useEffect(() => {
    if (compact) {
      setIsExpanded(false)
    }
  }, [compact])

  useEffect(() => {
    if (!isExpanded) return

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Node)) return
      if (!containerRef.current?.contains(target)) {
        setIsExpanded(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsExpanded(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isExpanded])

  const activeOption =
    themeOptions.find((option) => option.value === theme) ?? themeOptions[0]
  const ActiveThemeIcon = themeIcons[activeOption.value]
  const expandLabel = isExpanded ? 'Collapse theme options' : 'Expand theme options'
  const optionsTabIndex = isExpanded ? 0 : -1
  const containerClassName = joinClasses(
    'fixed z-[130] isolate inline-grid w-fit justify-items-start overflow-hidden border border-[color:var(--line)] backdrop-blur-xl',
    compact ? 'bottom-3 right-3 top-auto' : 'right-4 top-4 bottom-auto',
    isExpanded
      ? 'max-w-[calc(100vw-1.4rem)] rounded-2xl p-2.5 shadow-[0_16px_36px_rgba(0,0,0,0.32)]'
      : 'h-11 w-11 rounded-full p-1 shadow-[0_10px_24px_rgba(0,0,0,0.26)]',
    'transition-[width,height,padding,box-shadow,background-color,border-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
  )
  const collapsedButtonClassName = joinClasses(
    'flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--nav-bg)] text-[color:var(--text-main)]',
    'transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
    isExpanded
      ? 'pointer-events-none max-h-0 max-w-0 scale-90 opacity-0'
      : 'max-h-9 max-w-9 scale-100 opacity-100',
  )
  const expandedPanelClassName = joinClasses(
    'grid origin-top-right gap-2',
    'transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
    isExpanded
      ? 'max-h-[24rem] max-w-[calc(100vw-2.2rem)] translate-y-0 opacity-100'
      : 'pointer-events-none max-h-0 max-w-0 -translate-y-1.5 opacity-0',
  )
  const panelBackgroundStyle =
    theme === 'crimson-gold' ? { backgroundColor: 'rgba(22, 7, 12, 0.94)' } : { backgroundColor: 'var(--bg-elev)' }

  return (
    <aside
      ref={containerRef}
      className={containerClassName}
      style={panelBackgroundStyle}
      aria-label="Theme switcher"
    >
      <button
        type="button"
        className={collapsedButtonClassName}
        aria-label={`Current theme: ${activeOption.label}. ${expandLabel}`}
        tabIndex={isExpanded ? -1 : 0}
        aria-hidden={isExpanded}
        onClick={() => setIsExpanded(true)}
      >
        <span className="sr-only">Expand theme options</span>
        <ActiveThemeIcon aria-hidden className="h-[1.05rem] w-[1.05rem] shrink-0" />
      </button>

      <div
        id="theme-switcher-controls"
        className={expandedPanelClassName}
        aria-label="Color themes"
        aria-hidden={!isExpanded}
      >
        <div className="flex items-center gap-3">
          <p className="m-0 text-[0.72rem] uppercase tracking-[0.08em] text-[color:var(--text-soft)]">Theme</p>
          <button
            type="button"
            className="ml-auto inline-flex h-[1.65rem] w-[1.65rem] items-center justify-center rounded-full border border-[color:var(--line)] bg-transparent text-[color:var(--text-soft)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[color:var(--line-strong)] hover:bg-[color:var(--nav-hover-bg)] hover:text-[color:var(--text-main)]"
            aria-expanded={isExpanded}
            aria-controls="theme-switcher-controls"
            onClick={() => setIsExpanded(false)}
          >
            <span className="sr-only">Collapse theme options</span>
            <FiChevronDown aria-hidden className="h-[0.9rem] w-[0.9rem] rotate-180" />
          </button>
        </div>

        <div className="grid w-fit grid-cols-1 gap-2">
          {themeOptions.map((option) => {
            const isActive = theme === option.value
            const Icon = themeIcons[option.value]
            const activeTextColor =
              option.value === 'ocean' || option.value === 'crimson-gold'
                ? 'var(--text-strong)'
                : 'var(--accent-text)'
            const buttonClassName = joinClasses(
              'inline-flex min-h-[2rem] w-fit items-center justify-start gap-1.5 overflow-hidden rounded-full border border-[color:var(--line)] px-3 [background-clip:padding-box]',
              'bg-transparent text-[0.8rem] text-[color:var(--text-main)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
              'hover:-translate-y-px hover:border-[color:var(--line-strong)] hover:bg-[color:var(--nav-hover-bg)]',
              compact && 'min-h-[1.95rem] px-[0.72rem] text-[0.75rem]',
            )
            const activeButtonStyle = isActive
              ? {
                color: activeTextColor,
                borderColor: 'var(--accent-start)',
                backgroundColor: 'var(--accent-start)',
                backgroundImage:
                    'linear-gradient(135deg,var(--accent-start),var(--accent-end))',
              }
              : undefined

            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={isActive}
                tabIndex={optionsTabIndex}
                className={buttonClassName}
                style={activeButtonStyle}
                onClick={() => {
                  onThemeChange(option.value)
                  if (compact) {
                    setIsExpanded(false)
                  }
                }}
              >
                <Icon aria-hidden className="h-[0.95rem] w-[0.95rem] shrink-0" />
                <span>{compact ? option.compactLabel : option.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
