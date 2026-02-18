# Mavs Mobile Detailing - Deployment & Infrastructure Guide

## Architecture Overview

```
 LOCAL MACHINE (/Users/cloudwalker/dev/mav)
 ============================================
 |  index.html, css/, js/, assets/          |
 |  This is the source of truth              |
 ============================================
          |                |                |
          | git push       | wrangler       | wrangler
          | origin main    | (YOUR acct)    | (CLIENT acct)
          v                v                v
 +----------------+  +-----------------+  +------------------------+
 |   GITHUB       |  |  DEV SITE       |  |  PRODUCTION SITE       |
 |  (Source Code)  |  | (Test First!)   |  | (Client-Facing)        |
 +----------------+  +-----------------+  +------------------------+
 | UnicornSnake/  |  | mmd-92t.pages   |  | mavsmobiledetailing    |
 | mavs-mobile-   |  |   .dev          |  |   .pages.dev           |
 | detailing      |  |                 |  |                        |
 |                |  | YOUR Cloudflare |  | CLIENT Cloudflare      |
 |                |  | Account         |  | Account                |
 +----------------+  +-----------------+  +------------------------+
                                                    |
                                                    | Custom Domain
                                                    v
                                          +------------------------+
                                          | mavs-mobile-detailing  |
                                          |        .com            |
                                          | (What customers see)   |
                                          +------------------------+
```

## Change Workflow

```
 STEP 1: EDIT                STEP 2: TEST              STEP 3: GO LIVE
 ==================          ==================        ==================

 Edit files locally   --->   Deploy to DEV site  --->  Deploy to PRODUCTION
 /Users/cloudwalker/         mmd-92t.pages.dev         mavs-mobile-detailing.com
 dev/mav/

    |                            |                          |
    |  Also push to GitHub       |  Verify everything       |  Only after DEV
    |  for version control       |  looks good & works      |  looks perfect
    v                            v                          v

 git add <files>             Open browser:              Deploy to client:
 git commit -m "msg"         mmd-92t.pages.dev          (see commands below)
 git push origin main        Test forms, links, etc.
```

## Account Details

### YOUR Cloudflare Account
```
 Account ID:  fda212e1adce1ab115b290c05565ede7
 Nameservers: cullen.ns.cloudflare.com
              meadow.ns.cloudflare.com
 Pages Projects:
   - mmd              --> mmd-92t.pages.dev (DEV SITE)
   - hacker-site      --> frameofreferencesolutions.com
   - mavs-mobile-detailing (unused, can remove)
   - fors4, openepstine (other projects)
```

### CLIENT Cloudflare Account
```
 Account ID:  9bdf15c5a8a62e8b4f1d5384139b4eec
 Nameservers: amy.ns.cloudflare.com
              ethan.ns.cloudflare.com
 Pages Projects:
   - mavsmobiledetailing --> mavsmobiledetailing.pages.dev (PRODUCTION)
 Custom Domain:
   - mavs-mobile-detailing.com (CNAME -> mavsmobiledetailing.pages.dev)
   - www.mavs-mobile-detailing.com (CNAME -> mavsmobiledetailing.pages.dev)
 DNS Zone ID: 68f181fb72e22160246d4b8c8a0220b3
```

### GitHub
```
 Repo:   https://github.com/UnicornSnake/mavs-mobile-detailing
 Branch: main
```

### Contact Form
```
 Service:  Formspree
 Endpoint: https://formspree.io/f/mlgwlrvp
 Sends to: mavsmobiledetailing07@gmail.com
```

## Deployment Commands

### Step 1: Commit & Push to GitHub
```bash
cd /Users/cloudwalker/dev/mav
git add <changed-files>
git commit -m "Description of changes"
git push origin main
```

### Step 2: Deploy to DEV site (test first!)
```bash
CLOUDFLARE_ACCOUNT_ID=fda212e1adce1ab115b290c05565ede7 \
npx wrangler pages deploy /Users/cloudwalker/dev/mav --project-name=mmd
```
Then open https://mmd-92t.pages.dev and verify changes.

### Step 3: Deploy to PRODUCTION (client's site)
```bash
CLOUDFLARE_API_TOKEN=<CLIENT_API_TOKEN> \
CLOUDFLARE_ACCOUNT_ID=9bdf15c5a8a62e8b4f1d5384139b4eec \
npx wrangler pages deploy /Users/cloudwalker/dev/mav --project-name=mavsmobiledetailing
```
Then open https://mavs-mobile-detailing.com and verify.

> NOTE: You need an active API token from the client's Cloudflare account
> with "Cloudflare Pages: Edit" and "DNS: Edit" permissions.
> Generate at: dash.cloudflare.com > Profile > API Tokens

### One-Liner: Deploy to ALL (after testing)
```bash
git push origin main && \
CLOUDFLARE_ACCOUNT_ID=fda212e1adce1ab115b290c05565ede7 \
npx wrangler pages deploy /Users/cloudwalker/dev/mav --project-name=mmd && \
CLOUDFLARE_API_TOKEN=<CLIENT_API_TOKEN> \
CLOUDFLARE_ACCOUNT_ID=9bdf15c5a8a62e8b4f1d5384139b4eec \
npx wrangler pages deploy /Users/cloudwalker/dev/mav --project-name=mavsmobiledetailing
```

## DNS Record Reference (Client's Account)

| Type  | Name                         | Target                          | Proxied |
|-------|------------------------------|---------------------------------|---------|
| CNAME | mavs-mobile-detailing.com    | mavsmobiledetailing.pages.dev   | Yes     |
| CNAME | www.mavs-mobile-detailing.com| mavsmobiledetailing.pages.dev   | Yes     |

## Quick Reference Card

```
 +=====================================================+
 |  WHAT                  |  WHERE                      |
 |========================|=============================|
 |  Source code           |  /Users/cloudwalker/dev/mav |
 |  Git repo              |  github.com/UnicornSnake/.. |
 |  DEV site (test)       |  mmd-92t.pages.dev          |
 |  PRODUCTION site       |  mavs-mobile-detailing.com  |
 |  Form submissions      |  formspree.io/f/mlgwlrvp    |
 |  Customer email        |  mavsmobiledetailing07@gmail |
 |  YOUR CF account ID    |  fda212e1...5ede7           |
 |  CLIENT CF account ID  |  9bdf15c5...4eec            |
 |  CLIENT DNS zone ID    |  68f181fb...20b3            |
 +=====================================================+

 REMEMBER: DEV first, then PRODUCTION. Never skip testing.
```
