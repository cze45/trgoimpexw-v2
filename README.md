# Trgoimpex W — v2

Redizajn sajta [trgoimpexw](https://github.com/cze45/trgoimpexw). Isti tekstovi i struktura, nov vizuelni identitet.

Vite + React 19 + Tailwind CSS 4, bez servera: forma za upit upisuje u Supabase tabelu `contact_messages` preko javnog ključa (RLS dozvoljava anonimni INSERT).

## Pokretanje

```bash
cp .env.example .env   # popuni VITE_SUPABASE_URL i VITE_SUPABASE_PUBLISHABLE_KEY
npm install
npm run dev
npm run build
```

Stranice: `index.html` (početna) i `privatnost.html` (politika privatnosti).
