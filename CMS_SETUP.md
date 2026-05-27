# Portfolio CMS Setup

Your portfolio now has a content management system at `/keystatic`.
All copy is editable without touching code or deploying.

## One-time setup (15 minutes)

### 1. Create a GitHub OAuth App

Go to: https://github.com/settings/developers → "New OAuth App"

- **Application name:** Portfolio CMS
- **Homepage URL:** `https://fcruz-portfolio-cms.vercel.app`
- **Authorization callback URL:** `https://fcruz-portfolio-cms.vercel.app/api/keystatic/github/oauth/callback`

Copy the **Client ID** and generate a **Client Secret**.

### 2. Add environment variables in Vercel

Go to your Vercel project → Settings → Environment Variables. Add:

| Key | Value |
|-----|-------|
| `KEYSTATIC_GITHUB_CLIENT_ID` | Your GitHub OAuth Client ID |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | Your GitHub OAuth Client Secret |
| `KEYSTATIC_SECRET` | Any random 32+ character string (generate at https://1password.com/password-generator/) |

### 3. Redeploy

Trigger a redeploy in Vercel (any commit, or manually via the dashboard).

### 4. Access the CMS

Go to `https://fcruz-portfolio-cms.vercel.app/keystatic`

Sign in with GitHub (only your account can access it).

## What you can edit

**Homepage**
- Hero headline and which words are red
- Bio paragraph
- Current role and company
- All About section text
- Experience and education entries
- Skills tags
- Contact links and email
- Work card blurbs, metrics, and tags

**Case studies (all five)**
- Title, tagline, role, location, year
- My role and Business impact sections
- All metric values and descriptions
- Every paragraph in every section
- Screen image paths and captions
- Meta title and description

## How changes work

When you save in the CMS, Keystatic commits the JSON files directly to your GitHub repo.
Vercel picks up the commit and redeploys automatically (usually 30-60 seconds).
