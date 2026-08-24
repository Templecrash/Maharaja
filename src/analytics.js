import { analytics } from '@launchfury/analytics'

export const LAUNCHFURY_INGEST_HOST = 'https://launchfury.com'

let initialized = false
let configured = false

export function initAnalytics() {
  if (initialized) return
  initialized = true
  const writeKey = import.meta.env.VITE_LAUNCHFURY_ANALYTICS_WRITE_KEY
  if (!writeKey) return
  configured = true
  analytics.init({
    writeKey,
    host: import.meta.env.VITE_LAUNCHFURY_ANALYTICS_HOST || LAUNCHFURY_INGEST_HOST,
    environment: import.meta.env.MODE,
  })
}

export function track(event, properties) {
  if (!configured) return
  analytics.capture(event, properties)
}
