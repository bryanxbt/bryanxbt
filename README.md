# BryanXBT — Personal Brand Portfolio

Clean, premium portfolio for **Bryan Elliott** (`@bryanxbt`): Bitcoin brand building, community growth, and event programming.

**Live (GitHub Pages):** https://bryanxbt.github.io/bryanxbt

Hosting on GitHub is intentional — it signals you ship in public and are comfortable with modern developer tooling.

## Stack

- Next.js 15 (static export)
- Tailwind CSS 4
- TypeScript
- GitHub Pages + Actions

## Develop locally

```bash
cd ~/Projects/bryanxbt
npm install
cp .env.example .env.local   # then paste your Web3Forms access key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or whatever port you pass with `-p`).

Local builds do **not** use the `/bryanxbt` base path. Production/Pages builds do.

## Contact form (Web3Forms → Gmail)

The site contact form posts to [Web3Forms](https://web3forms.com), which emails **xbtbryan@gmail.com**.

1. Go to [web3forms.com](https://web3forms.com) → **Create Access Key**
2. Enter **`xbtbryan@gmail.com`** and verify the key in that inbox
3. Local: put the key in `.env.local`

   ```bash
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-uuid-here
   ```

4. GitHub Pages: **Repo → Settings → Secrets and variables → Actions**  
   Add secret name: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`  
   Value: same access key

Web3Forms is built for static sites — the access key is public in the frontend by design (tied to your email + spam protection). Do not put other private secrets in `NEXT_PUBLIC_*` vars.

## Build for GitHub Pages

```bash
npm run build:pages
```

Static files land in `out/`.

## Deploy

Pushes to `main` deploy automatically via `.github/workflows/deploy.yml`.

One-time repo setup (if not already done):

1. Create public repo `bryanxbt/bryanxbt`
2. Enable **Settings → Pages → Source: GitHub Actions**
3. Push `main`

```bash
git remote add origin https://github.com/bryanxbt/bryanxbt.git
git add .
git commit -m "Initial BryanXBT portfolio"
git push -u origin main
```

## Assets

| File | Source |
|------|--------|
| `public/assets/bryan-headshot.png` | Suit headshot |
| `public/assets/Bryan_Elliott_Resume.pdf` | ResumeBMEBTC |

## Project map

| Project | Path | Focus |
|---------|------|--------|
| **bryanxbt** (this) | `~/Projects/bryanxbt` | Personal brand portfolio |
| CoinUp | `~/Projects/coinup` | Arcade / card room |
| Ship | `~/Projects/ship` | Archie + launchpad |
| Sole | `~/Projects/sole` | Separate product |
| Blue | `~/Projects/blue-ops` | GoldenEye / Blue FPS |

## Custom domain later

Add a `CNAME` in `public/` and point DNS when ready. Until then, `bryanxbt.github.io/bryanxbt` is a strong professional URL.
