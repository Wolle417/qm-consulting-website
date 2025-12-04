# Vercel Deployment Anleitung

## Stefan Schönwälder QM Consulting Website

### Voraussetzungen
- GitHub Account (optional, aber empfohlen)
- Vercel Account (kostenlos): https://vercel.com/signup

---

## Option 1: Deployment via Vercel CLI (Schnell & Einfach)

### 1. Vercel CLI installieren
```bash
npm install -g vercel
```

### 2. In Vercel einloggen
```bash
vercel login
```
Folge den Anweisungen im Terminal (E-Mail Verifizierung).

### 3. Projekt deployen
```bash
vercel
```

Beim ersten Mal wirst du gefragt:
- **Set up and deploy?** → Ja (Y)
- **Which scope?** → Wähle deinen Account
- **Link to existing project?** → Nein (N)
- **What's your project's name?** → `stefan-qm-consulting` (oder eigener Name)
- **In which directory is your code located?** → `./` (Enter drücken)

Vercel erkennt automatisch Next.js und deployed die Website!

### 4. Production Deployment
```bash
vercel --prod
```

✅ **Fertig!** Du erhältst eine URL wie: `https://stefan-qm-consulting.vercel.app`

---

## Option 2: Deployment via Vercel Dashboard (GitHub empfohlen)

### 1. Code zu GitHub pushen
```bash
git init
git add .
git commit -m "Initial commit: Stefan QM Consulting Website"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/stefan-consulting.git
git push -u origin main
```

### 2. Mit Vercel verbinden
1. Gehe zu https://vercel.com/new
2. Klicke auf **"Import Git Repository"**
3. Wähle dein GitHub Repository
4. Klicke auf **"Import"**

### 3. Projekt konfigurieren
Vercel erkennt Next.js automatisch:
- **Framework Preset**: Next.js (auto-detected)
- **Build Command**: `next build` (automatisch)
- **Output Directory**: `.next` (automatisch)

### 4. Deploy!
Klicke auf **"Deploy"** und warte ~1-2 Minuten.

✅ **Fertig!** Jeder Git Push deployed automatisch neu!

---

## Nach dem Deployment

### Custom Domain hinzufügen (optional)
1. Gehe zu Vercel Dashboard → Settings → Domains
2. Füge deine Domain hinzu (z.B. `stefan-schoenwalder.de`)
3. Folge den DNS-Anweisungen

### Environment Variables (falls benötigt)
Falls du später API Keys oder Secrets brauchst:
1. Vercel Dashboard → Settings → Environment Variables
2. Variablen hinzufügen
3. Re-deploy triggern

---

## Nützliche Vercel Commands

```bash
vercel          # Preview Deployment
vercel --prod   # Production Deployment
vercel ls       # Liste aller Deployments
vercel domains  # Domain Verwaltung
vercel logs     # Deployment Logs ansehen
vercel remove   # Projekt löschen
```

---

## Troubleshooting

### Problem: "Command not found: vercel"
```bash
npm install -g vercel
# oder
npx vercel
```

### Problem: Build Fehler
Lokal testen:
```bash
npm run build
npm run start
```

### Problem: 404 bei Routes
Next.js Pages müssen im `/pages` Ordner sein (✅ bereits korrekt).

---

## Performance & Best Practices

✅ **Automatische Optimierungen durch Vercel:**
- Image Optimization
- Automatic HTTPS
- Global CDN
- Serverless Functions
- Edge Network

✅ **Analytics (optional):**
- Vercel Dashboard → Analytics aktivieren
- Kostenlos für kleine Projekte

---

## Support
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Vercel Discord: https://vercel.com/discord

---

**Viel Erfolg mit dem Deployment! 🚀**
