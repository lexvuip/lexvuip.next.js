# Website Analytics Tracking

Documentation of all analytics tools and events tracked on lexvuip.com.

**Environment variables** (set in `.env` locally and in Vercel → Settings → Environment Variables):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID (`G-5ME0QB92Y3`) |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID (`zhzv67ih5e`) |
| — | Vercel Web Analytics (enabled in Vercel dashboard, no ID needed) |

All three are wired in `src/app/layout.js` and load site-wide. GA4 and Clarity load conditionally — nothing renders if their env vars are missing.

---

## 1. Vercel Web Analytics

Dashboard: Vercel → project → Analytics tab

| Tracked | Details |
|---|---|
| Page views | Every route, including client-side navigations |
| Referrers | Traffic source (Google, direct, social, etc.) |
| Browsers / OS / Devices | Chrome, Safari, iOS, Android, desktop vs mobile |
| Geography | Countries and cities |

> Custom events on Vercel Analytics require a Pro plan — not currently used.

## 2. Google Analytics 4 (`G-5ME0QB92Y3`)

Dashboard: analytics.google.com → Global Lexvuip stream

### Automatically collected
| Event | Fires when |
|---|---|
| `page_view` | Every page load + client-side navigation |
| `first_visit` | User's first-ever visit |
| `session_start` | New session begins |
| `user_engagement` | Periodic activity heartbeat |

### Enhanced Measurement (toggle enabled in GA4)
| Event | Fires when |
|---|---|
| `scroll` | User scrolls 90% of a page |
| `click` | Clicks an outbound link (leaves lexvuip.com) |
| `view_search_results` | Internal site search (requires `?q=`/`?s=` URL param) |
| `video_start` / `video_progress` / `video_complete` | Embedded YouTube/Vimeo playback milestones |
| `file_download` | Clicks a downloadable file link (PDF, DOCX, ZIP, etc.) |
| `form_start` / `form_submit` | Starts / submits a form |

## 3. Microsoft Clarity (`zhzv67ih5e`)

Dashboard: clarity.microsoft.com

| Tracked | Details |
|---|---|
| Session recordings | Full replays of user sessions |
| Heatmaps | Click maps, scroll maps, dead clicks, rage clicks |
| Insights | Excessive scrolling, quick-back navigations, JS errors |

> Clarity automatically masks all input content — no PII is recorded.

---

## 4. Custom Events (implemented)

Sent via the shared helper `src/lib/analytics.js` (`trackEvent`) → both GA4 (`sendGAEvent`) and Clarity (`window.clarity('event', ...)`). Naming convention: snake_case.

| Event name | Fires when | Parameters | Instrumented in |
|---|---|---|---|
| `cta_click` | Internal CTA clicks (hero, nav, promo banner) | `cta_text`, `cta_location` | `AnalyticsCtaTracker` (delegation on `[data-cta]`), HeroSection, NavBar, PromoBanner |
| `phone_call_click` | FloatingCallButton clicked | `page_path` | FloatingCallButton |
| `contact_form_submit` | Contact form successfully submitted | `page_path` | ContactForm |
| `contact_form_error` | Contact form submission fails | `page_path`, `error_type` | ContactForm |
| `booking_start` | Booking modal opened / inline slot first selected | `page_path` | BookingModal, BookingSection, (PromoBanner opens modal) |
| `booking_confirmed` | Cal.com booking completed | `page_path` | BookingModal, BookingSection |
| `blog_read_depth` | Blog scroll milestones (25 / 50 / 75 / 100%), once each | `blog_slug`, `depth_percent` | BlogPost |
| `service_view` | Service detail page viewed | `service_name`, `service_category` | SubServicePage |

### Key Events (conversions) to mark in GA4 dashboard
Admin → Events → toggle as Key event:
- `contact_form_submit`
- `booking_confirmed`
- `form_submit` (Enhanced Measurement fallback)

---

## 5. Privacy & Compliance

- GA4: email redaction active; IP addresses are anonymized by default; no user-ID tracking configured.
- Clarity: input masking on by default; recordings exclude sensitive fields.
- Site has a cookie policy page — review whether a cookie-consent banner is needed for EU/IN visitors before enabling ads or user-ID features.

---

## 6. Verification Checklist

1. Open production site in incognito (extensions off) with DevTools Network tab:
   - `google-analytics.com/g/collect` → GA4 live
   - `clarity.ms/tag/zhzv67ih5e` → Clarity live
   - `/_vercel/insights/view` → Vercel Analytics live
2. GA4 → Reports → Realtime: you appear as 1 active user within a minute.
3. Clarity → Recordings: your session appears within a few minutes.
4. Use GA4 **DebugView** (Admin → DebugView) with the GA Debugger Chrome extension to see custom events fire in real time.
