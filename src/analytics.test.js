import { describe, it, expect, vi, beforeEach } from 'vitest'

const analyticsMock = vi.hoisted(() => ({
  init: vi.fn(),
  capture: vi.fn(),
  identify: vi.fn(),
  page: vi.fn(),
  reset: vi.fn(),
  optIn: vi.fn(),
  optOut: vi.fn(),
  hasOptedOut: vi.fn(),
}))

vi.mock('@launchfury/analytics', () => ({
  analytics: analyticsMock,
  createAnalytics: vi.fn(),
  default: analyticsMock,
}))

const INGEST_HOST = 'https://launchfury.com'

describe('analytics integration', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.clearAllMocks()
    vi.unstubAllEnvs()
  })

  it('initializes once with the configured write key and canonical ingest host', async () => {
    vi.stubEnv('VITE_LAUNCHFURY_ANALYTICS_WRITE_KEY', 'lfa_browser_prod_test')
    const { initAnalytics } = await import('./analytics.js')

    initAnalytics()
    initAnalytics()

    expect(analyticsMock.init).toHaveBeenCalledTimes(1)
    expect(analyticsMock.init).toHaveBeenCalledWith({
      writeKey: 'lfa_browser_prod_test',
      host: INGEST_HOST,
      environment: 'test',
    })
  })

  it('does not initialize and drops events when the write key is missing', async () => {
    vi.stubEnv('VITE_LAUNCHFURY_ANALYTICS_WRITE_KEY', '')
    const { initAnalytics, track } = await import('./analytics.js')

    initAnalytics()
    track('trip_viewed', { trip_id: 'japan' })

    expect(analyticsMock.init).not.toHaveBeenCalled()
    expect(analyticsMock.capture).not.toHaveBeenCalled()
  })

  it('uses the canonical ingest host when the host env is not configured', async () => {
    vi.stubEnv('VITE_LAUNCHFURY_ANALYTICS_WRITE_KEY', 'lfa_browser_prod_test')
    const { initAnalytics } = await import('./analytics.js')

    initAnalytics()

    expect(analyticsMock.init).toHaveBeenCalledWith(expect.objectContaining({ host: INGEST_HOST }))
  })

  it('tracks events with properties after initialization', async () => {
    vi.stubEnv('VITE_LAUNCHFURY_ANALYTICS_WRITE_KEY', 'lfa_browser_prod_test')
    const { initAnalytics, track } = await import('./analytics.js')

    initAnalytics()
    track('book_started', { trip_id: 'japan', total_price: 4200 })

    expect(analyticsMock.capture).toHaveBeenCalledWith('book_started', { trip_id: 'japan', total_price: 4200 })
  })

  it('drops events recorded before initialization', async () => {
    vi.stubEnv('VITE_LAUNCHFURY_ANALYTICS_WRITE_KEY', 'lfa_browser_prod_test')
    const { track } = await import('./analytics.js')

    track('signup_started')

    expect(analyticsMock.capture).not.toHaveBeenCalled()
  })
})
