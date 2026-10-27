import type { ReactNode } from "react";
import logo from "../assets/logo-icon.png";
import { kontakt } from "../lib/site";

/** Podnožje po uzoru na zaglavlje tehničkog crteža: polja sa oznakom i vrednošću. */
export function Podnozje() {
  const godina = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 overflow-hidden border-2 border-asfalt md:grid-cols-[auto_repeat(4,minmax(0,1fr))]">
        <div className="col-span-2 flex items-center gap-4 border-b-2 border-asfalt p-4 md:col-span-1 md:row-span-2 md:border-r-2 md:border-b-0">
          <img src={logo} alt="" width={570} height={518} loading="lazy" className="h-16 w-auto" />
          <span className="tip-h3 text-[1.5rem]" translate="no">
            Trgoimpex&nbsp;W
          </span>
        </div>

        <Polje oznaka="Adresa">
          <a href={kontakt.mapaHref} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {kontakt.adresa}
          </a>
        </Polje>
        <Polje oznaka="Telefon">
          <a href={kontakt.telefonHref} className="brojevi hover:underline">
            {kontakt.telefonMedjunarodni}
          </a>
        </Polje>
        <Polje oznaka="Email" className="col-span-2 md:col-span-2">
          <a href={`mailto:${kontakt.email}`} className="break-all hover:underline" translate="no">
            {kontakt.email}
          </a>
        </Polje>
        <Polje oznaka="Delatnost" className="col-span-2">
          Zemljani radovi, niskogradnja, ograđivanje i asfaltiranje
        </Polje>
        <Polje oznaka="Dokumenti">
          <a href="/privatnost.html" className="underline underline-offset-2 hover:decoration-2">
            Politika privatnosti
          </a>
        </Polje>
        <Polje oznaka="Godina">
          <span className="brojevi">© {godina}</span>
        </Polje>
      </div>
    </footer>
  );
}

function Polje({
  oznaka,
  children,
  className = "",
}: {
  oznaka: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`-mb-px -mr-px min-w-0 border-b border-r border-asfalt/50 p-4 ${className}`}>
      <div className="text-sm text-sivo">{oznaka}</div>
      <div className="mt-1 font-semibold">{children}</div>
    </div>
  );
}
