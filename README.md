# ashishkhadka.com

Personal portfolio site built with Next.js 14, Tailwind CSS, and deployed on Vercel.

---

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
```

Open http://localhost:3000

---

## Add your photo

Copy your headshot to `/public/ashish.jpg`

```bash
cp ~/Desktop/Ashish_Khadka_Photo.jpeg public/ashish.jpg
```

---

## Add your resume

Copy your resume PDF to `/public/resume.pdf`

---

## Update your Medium username

In `components/Writing.tsx`, update line 7:
```ts
const MEDIUM_USERNAME = 'your-medium-username';
```

---

## Deploy to Vercel

1. Push this folder to a GitHub repo
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   gh repo create ashishkhadka-portfolio --public --push
   ```

2. Go to https://vercel.com → New Project → Import your GitHub repo

3. Click Deploy (Vercel auto-detects Next.js, no config needed)

---

## Connect ashishkhadka.com (Google Domains)

1. In Vercel → your project → Settings → Domains → Add `ashishkhadka.com`
2. Vercel shows you two DNS records (an A record and a CNAME)
3. Go to https://domains.google.com → your domain → DNS
4. Add both records exactly as Vercel shows
5. Wait 5–10 minutes → your site is live at ashishkhadka.com

---

## Customizing content

All content lives directly in the component files under `/components/`:
- `Hero.tsx` — headline, bio blurb
- `About.tsx` — about paragraphs, quick facts
- `Experience.tsx` — work history array
- `Projects.tsx` — projects array
- `Research.tsx` — research array
- `Skills.tsx` — skill groups
- `Writing.tsx` — Medium username
- `Contact.tsx` — contact links
