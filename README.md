# 🌟 reetudhan.com

**Personal website of Reet Kaur Udhan** — Special Education Leader, Autism Specialist & IEP Compliance Expert with 25+ years of experience in education.

🔗 **Live Site:** [reetudhan.com](https://reetudhan.com)

---

## ✨ Features

- **Responsive Design** — Fully optimized for desktop, tablet, and mobile
- **Dark Mode** — Toggle between light and dark themes (remembers your preference)
- **Smooth Animations** — Page transitions and scroll-triggered animations powered by Framer Motion
- **YouTube Integration** — Auto-fetches latest videos from two YouTube channels with embedded player
- **Blog Section** — Articles on special education, autism inclusion, and teaching insights
- **Resume Page** — Professional HTML resume with Print / Save as PDF functionality
- **Auto-Deploy** — Push to `main` branch and GitHub Actions builds & deploys automatically

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **React Router** | Client-side routing |
| **Framer Motion** | Animations & page transitions |
| **GitHub Actions** | CI/CD auto-deployment |
| **GitHub Pages** | Hosting (free) |
| **Let's Encrypt** | SSL/HTTPS (free via GitHub) |

## 📁 Project Structure

```
reetudhan.com/
├── .github/workflows/
│   └── deploy.yml          # Auto-build & deploy on push
├── public/
│   ├── CNAME               # Custom domain config
│   └── .nojekyll           # Bypass Jekyll processing
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation with dark mode toggle
│   │   ├── Hero.jsx        # Hero section with intro
│   │   ├── Sections.jsx    # About, Experience, Education, Skills, Awards
│   │   ├── YouTube.jsx     # YouTube channels & video feed
│   │   ├── Contact.jsx     # Contact form & info
│   │   └── Footer.jsx      # Site footer
│   ├── pages/
│   │   ├── HomePage.jsx    # Main landing page
│   │   ├── ResumePage.jsx  # Printable resume
│   │   └── BlogPage.jsx    # Blog listing & article pages
│   ├── App.jsx             # Root component with theme & routing
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles with light/dark themes
├── index.html              # HTML entry point
├── package.json            # Dependencies & scripts
└── vite.config.js          # Vite configuration
```

## 🚀 Local Development

```bash
# Clone the repo
git clone https://github.com/dabinderudhan/reetudhan.com.git
cd reetudhan.com

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📺 YouTube Setup

To display real videos from the YouTube channels, replace the placeholder channel IDs in `src/components/YouTube.jsx`:

1. Log into each YouTube channel
2. Visit [youtube.com/account_advanced](https://youtube.com/account_advanced)
3. Copy the Channel ID (starts with `UC`)
4. Replace `UCxxxxxxxxxxxxxxxxxxxxxxx` in `YouTube.jsx` with the real IDs

## ✍️ Adding Blog Posts

Edit the `POSTS` array in `src/pages/BlogPage.jsx`. Each post needs:

```js
{
  slug: 'your-post-url-slug',
  tag: 'CATEGORY',
  title: 'Your Post Title',
  date: 'March 24, 2026',
  readTime: '5 min read',
  excerpt: 'Short description shown on the blog listing page.',
  content: `<p>Your HTML content here...</p>`
}
```

Commit and push — the site rebuilds automatically.

## 🌐 Deployment

Deployment is fully automated via GitHub Actions:

1. Push changes to the `main` branch
2. GitHub Actions runs `npm ci` → `npm run build`
3. Built files are deployed to GitHub Pages
4. Site updates within ~2 minutes

## 📬 Contact

- **Email:** [reetkaur02@gmail.com](mailto:reetkaur02@gmail.com)
- **YouTube:** [Learning With Fun by Reet Udhan](https://www.youtube.com/@LearningWithFunbyReetUdhan) | [The Inner Mindspace](https://www.youtube.com/@TheInnerMindspace)
- **Location:** Phoenix, Arizona, USA

---

Built with ❤️ for education
