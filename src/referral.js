const OUTGOING_KEY = 'maharaja_referral_code';
const INCOMING_KEY = 'maharaja_referral_in';
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function readStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  if (!value) return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable (private mode, disabled cookies). The loop
    // still works for the current page; it simply is not persisted.
  }
}

export function generateReferralCode() {
  let code = '';
  const cryptoObj = globalThis.crypto;
  if (cryptoObj && typeof cryptoObj.getRandomValues === 'function') {
    const bytes = new Uint8Array(6);
    cryptoObj.getRandomValues(bytes);
    bytes.forEach(b => { code += CODE_ALPHABET[b % CODE_ALPHABET.length]; });
  } else {
    for (let i = 0; i < 6; i += 1) {
      code += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
    }
  }
  return `MR-${code}`;
}

export function getOrCreateReferralCode() {
  const existing = readStorage(OUTGOING_KEY);
  if (existing) return existing;
  const created = generateReferralCode();
  writeStorage(OUTGOING_KEY, created);
  return created;
}

export function captureIncomingReferral() {
  let fromUrl = null;
  try {
    fromUrl = new URLSearchParams(window.location.search).get('ref');
  } catch {
    fromUrl = null;
  }
  if (fromUrl) writeStorage(INCOMING_KEY, fromUrl);
  return fromUrl;
}

export function getIncomingReferral() {
  return readStorage(INCOMING_KEY);
}

export function readTripFromUrl() {
  try {
    return new URLSearchParams(window.location.search).get('trip');
  } catch {
    return null;
  }
}

export function buildInviteUrl({ origin, pathname, tripId, code }) {
  const url = new URL(pathname || '/', origin || window.location.origin);
  url.searchParams.set('trip', tripId);
  url.searchParams.set('ref', code);
  return url.toString();
}

export function trackReferralEvent(name, detail = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...detail });
  window.dispatchEvent(new CustomEvent('maharaja:referral', { detail: { name, ...detail } }));
}
