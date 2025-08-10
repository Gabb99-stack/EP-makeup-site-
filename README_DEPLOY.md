# EPI Web – Deploy Instructions

These steps push this project to a new **public GitHub** repo and deploy to **Vercel**.

## 1) Create a new repo on GitHub
- Go to GitHub → New repository
- Name it: `epi-web` (or any name you like)
- Visibility: **Public**
- Do **not** add a README, .gitignore or license (we already have files here).

## 2) Initialize and push from your computer
Open a terminal in this project folder and run:

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit: EPI site"
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Replace `USERNAME/REPOSITORY` with your GitHub account and repo name.

## 3) Connect to Vercel
- Go to Vercel → **Add New… → Project**
- Import the GitHub repo you just pushed
- Framework preset: auto (Next.js will be detected if present)
- Environment variables: add anything required by `.env*` if applicable
- Click **Deploy**

## Notes
- Generated files in this kit: .gitignore, vercel.json
- If build fails on Vercel, set **Build Command** and **Output Directory** according to your framework:
  - Next.js: Build Command `next build`, Output `.next`
  - Vite/React SPA: Build `npm run build`, Output `dist`
