import { useEffect, useId, useRef, useState } from "react";
import logo from "../assets/logo-main.png";
import { kontakt } from "../lib/site";

const veze = [
  { hash: "#usluge", naziv: "Usluge" },
  { hash: "#kako-radimo", naziv: "Kako radimo" },
  { hash: "#radovi", naziv: "Radovi" },
  { hash: "#o-nama", naziv: "O nama" },
  { hash: "#kontakt", naziv: "Kontakt" },
];

/** `osnova` je "" na početnoj i "/" na ostalim stranama, da sidra vode na početnu. */
export function Zaglavlje({ osnova = "" }: { osnova?: string }) {
  const [otvoren, setOtvoren] = useState(false);
  const meniId = useId();
  const dugmeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!otvoren) return;
    const naEsc = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOtvoren(false);
      dugmeRef.current?.focus();
    };
    window.addEventListener("keydown", naEsc);
    return () => window.removeEventListener("keydown", naEsc);
  }, [otvoren]);

  return (
    <header className="relative z-20">
      <a
        href="#sadrzaj"
        className="absolute left-4 top-3 -translate-y-24 bg-asfalt px-4 py-2 text-belo focus-visible:translate-y-0"
      >
        Preskoči na sadržaj
      </a>

      <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a href={osnova || "/"} className="shrink-0" aria-label="Trgoimpex W, početna strana">
          <img src={logo} alt="" width={896} height={518} className="h-12 w-auto sm:h-14" />
        </a>

        <nav aria-label="Glavna navigacija" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7">
            {veze.map((v) => (
              <li key={v.hash}>
                <a
                  href={osnova + v.hash}
                  className="tip-oznaka text-base text-asfalt underline-offset-[6px] decoration-2 hover:underline"
                >
                  {v.naziv}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={kontakt.telefonHref}
          className="brojevi tip-oznaka ml-auto inline-flex min-h-11 items-center border-2 border-asfalt px-4 text-base transition-colors hover:bg-asfalt hover:text-belo lg:ml-0"
        >
          <span className="sr-only">Pozovite </span>
          {kontakt.telefon}
        </a>

        <button
          ref={dugmeRef}
          type="button"
          className="inline-flex size-11 items-center justify-center lg:hidden"
          aria-expanded={otvoren}
          aria-controls={meniId}
          aria-label={otvoren ? "Zatvori meni" : "Otvori meni"}
          onClick={() => setOtvoren((o) => !o)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2.5">
            {otvoren ? (
              <path d="M5 5l14 14M19 5L5 19" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id={meniId}
        aria-label="Glavna navigacija"
        hidden={!otvoren}
        className="border-y-2 border-asfalt bg-beton lg:hidden"
      >
        <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
          {veze.map((v) => (
            <li key={v.hash}>
              <a
                href={osnova + v.hash}
                onClick={() => setOtvoren(false)}
                className="tip-h3 block py-3 hover:underline"
              >
                {v.naziv}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
