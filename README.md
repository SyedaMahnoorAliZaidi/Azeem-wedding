# Azeem & Fatimah Wedding Invitation

React + Vite app for Vercel.

## Performance notes
- Invitation assets are separate files under `public/assets/` (not one giant HTML unpack).
- `/` opens `wedding.html` directly.
- Envelope auto-opens after a short intro; music starts as soon as the browser allows (many browsers require one tap).

## Local preview
```bash
npm install
npm run dev
```

## Deploy on Vercel
1. Push this folder to GitHub with files at the **repo root**.
2. Import in Vercel → Framework **Vite**.
3. Build: `npm run build`
4. Output: `dist`
5. Redeploy after every update.
