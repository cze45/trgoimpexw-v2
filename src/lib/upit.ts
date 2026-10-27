export type Upit = {
  name: string;
  phone: string;
  email: string;
  project: string;
  message: string;
};

export type Greske = Partial<Record<keyof Upit, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Ista pravila kao na postojećem sajtu (contact.functions.ts). */
export function proveri(u: Upit): Greske {
  const g: Greske = {};
  if (u.name.length < 2) g.name = "Upišite ime i prezime.";
  if (!EMAIL.test(u.email)) g.email = "Upišite email adresu u obliku ime@primer.rs.";
  if (u.message.length < 5) g.message = "Opišite posao u bar par reči: šta, gde i otprilike koliko.";
  return g;
}

/**
 * Upisuje upit u tabelu `contact_messages`. RLS politika dozvoljava
 * anonimni INSERT, pa nije potreban server — dovoljan je javni ključ.
 */
export async function posaljiUpit(u: Upit): Promise<void> {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const kljuc = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !kljuc) throw new Error("Nedostaje VITE_SUPABASE_URL ili VITE_SUPABASE_PUBLISHABLE_KEY.");

  const odgovor = await fetch(`${url}/rest/v1/contact_messages`, {
    method: "POST",
    headers: {
      apikey: kljuc,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name: u.name.slice(0, 100),
      phone: u.phone.slice(0, 50) || null,
      email: u.email.slice(0, 255),
      project: u.project.slice(0, 150) || null,
      message: u.message.slice(0, 2000),
    }),
  });

  if (!odgovor.ok) throw new Error(`Upis nije uspeo (${odgovor.status}).`);
}
