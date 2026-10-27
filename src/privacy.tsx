import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Zaglavlje } from "./components/Zaglavlje";
import { Podnozje } from "./components/Podnozje";
import { kontakt } from "./lib/site";

function Privatnost() {
  return (
    <>
      <Zaglavlje osnova="/" />
      <main id="sadrzaj" tabIndex={-1} className="outline-none">
        <article className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pt-20 lg:px-8">
          <h1 className="tip-naslov max-w-[14ch] text-[clamp(3rem,8vw,6rem)]">Politika privatnosti</h1>
          <p className="mt-6 max-w-[38rem] text-lg text-sivo sm:text-xl">
            Kako prikupljamo, koristimo i čuvamo podatke koje ostavite u formi za upit.
          </p>

          <div className="mt-14 max-w-[42rem] border-t-2 border-asfalt">
            <Odeljak naslov="Ko obrađuje podatke">
              Podatke prikuplja i obrađuje Trgoimpex W, {kontakt.adresa}, Srbija. Kontakt:{" "}
              {kontakt.email}, {kontakt.telefonMedjunarodni}.
            </Odeljak>
            <Odeljak naslov="Koje podatke prikupljamo">
              Kada popunite formu za upit, prikupljamo ime i prezime, broj telefona, email adresu,
              vrstu radova i tekst poruke. Ne prikupljamo nikakve druge lične podatke i ne koristimo
              kolačiće za praćenje ili oglašavanje.
            </Odeljak>
            <Odeljak naslov="Svrha obrade">
              Podatke koristimo isključivo da odgovorimo na vaš upit i pripremimo ponudu. Ne
              prosleđujemo ih trećim licima i ne koristimo ih za marketinške poruke bez vaše
              saglasnosti.
            </Odeljak>
            <Odeljak naslov="Čuvanje podataka">
              Poruke se čuvaju u zaštićenoj bazi podataka onoliko dugo koliko je potrebno za
              komunikaciju povodom vašeg upita, a najduže dve godine od poslednjeg kontakta.
            </Odeljak>
            <Odeljak naslov="Vaša prava">
              U svakom trenutku možete tražiti uvid u svoje podatke, njihovu ispravku ili brisanje.
              Zahtev pošaljite na {kontakt.email} i postupićemo po njemu u zakonskom roku.
            </Odeljak>
          </div>

          <a
            href="/"
            className="tip-oznaka mt-12 inline-flex min-h-13 items-center border-2 border-asfalt px-7 text-lg transition-colors hover:bg-asfalt hover:text-belo"
          >
            Nazad na početnu
          </a>
        </article>
      </main>
      <Podnozje />
    </>
  );
}

function Odeljak({ naslov, children }: { naslov: string; children: ReactNode }) {
  return (
    <section className="border-b border-asfalt/40 py-8">
      <h2 className="tip-h3">{naslov}</h2>
      <p className="mt-3 text-sivo">{children}</p>
    </section>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Privatnost />
  </StrictMode>,
);
