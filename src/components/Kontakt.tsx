import { useRef, useState, type FormEvent, type InputHTMLAttributes, type ReactNode } from "react";
import { kontakt, ostaleUsluge, usluge } from "../lib/site";
import { posaljiUpit, proveri, type Greske, type Upit } from "../lib/upit";

type Stanje = "unos" | "slanje" | "poslato" | "greska";

const vrsteRadova = [...usluge.map((u) => u.naziv), ...ostaleUsluge.map((o) => o.naziv), "Nešto drugo"];

export function Kontakt() {
  const [stanje, setStanje] = useState<Stanje>("unos");
  const [greske, setGreske] = useState<Greske>({});
  const formaRef = useRef<HTMLFormElement>(null);
  const potvrdaRef = useRef<HTMLHeadingElement>(null);

  async function naSlanje(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const upit: Upit = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      project: String(fd.get("project") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    const nove = proveri(upit);
    setGreske(nove);
    const prva = Object.keys(nove)[0];
    if (prva) {
      formaRef.current?.querySelector<HTMLElement>(`[name="${prva}"]`)?.focus();
      return;
    }

    setStanje("slanje");
    try {
      await posaljiUpit(upit);
      setStanje("poslato");
      requestAnimationFrame(() => potvrdaRef.current?.focus());
    } catch (err) {
      console.error(err);
      setStanje("greska");
    }
  }

  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-naslov"
      className="na-tamnom bg-zelena py-20 text-belo sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <h2 id="kontakt-naslov" className="tip-h2 max-w-[12ch]">
            Zatražite ponudu
          </h2>
          <p className="mt-6 max-w-[30rem] text-lg sm:text-xl">
            Opišite posao i lokaciju. Javljamo se u roku od 24&nbsp;sata radnim danom. Za hitne
            stvari najbrže je da pozovete.
          </p>

          <dl className="mt-12 space-y-7">
            <Podatak pojam="Telefon">
              <a
                href={kontakt.telefonHref}
                className="brojevi tip-naslov text-[clamp(2.75rem,6vw,4rem)] hover:underline decoration-[3px] underline-offset-8"
              >
                {kontakt.telefon}
              </a>
            </Podatak>
            <Podatak pojam="Email">
              <a
                href={`mailto:${kontakt.email}`}
                className="break-all text-xl font-semibold underline decoration-2 underline-offset-4 hover:decoration-4"
                translate="no"
              >
                {kontakt.email}
              </a>
            </Podatak>
            <Podatak pojam="Adresa">
              <a
                href={kontakt.mapaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold underline decoration-2 underline-offset-4 hover:decoration-4"
              >
                {kontakt.adresa}
                <span className="sr-only"> (otvara Google mape u novom prozoru)</span>
              </a>
            </Podatak>
          </dl>
        </div>

        <div className="bg-beton p-6 text-asfalt sm:p-10 lg:col-span-7">
          {stanje === "poslato" ? (
            <div role="status" className="flex min-h-[28rem] flex-col items-start justify-center">
              <h3 ref={potvrdaRef} tabIndex={-1} className="tip-h2 text-[clamp(2.25rem,4vw,3rem)]">
                Upit je poslat
              </h3>
              <p className="mt-4 max-w-[30rem] text-sivo">
                Javićemo vam se u roku od 24&nbsp;sata radnim danom, na telefon ili email koji
                ste ostavili.
              </p>
              <button
                type="button"
                onClick={() => setStanje("unos")}
                className="tip-oznaka mt-8 inline-flex min-h-12 items-center border-2 border-asfalt px-6 text-base transition-colors hover:bg-asfalt hover:text-belo"
              >
                Pošaljite novi upit
              </button>
            </div>
          ) : (
            <form ref={formaRef} onSubmit={naSlanje} noValidate className="grid gap-5 sm:grid-cols-2">
              <Polje
                naziv="name"
                oznaka="Ime i prezime"
                autoComplete="name"
                greska={greske.name}
                obavezno
              />
              <Polje
                naziv="phone"
                oznaka="Telefon"
                tip="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="06x xxx xxxx…"
                napomena="nije obavezno"
              />
              <Polje
                naziv="email"
                oznaka="Email"
                tip="email"
                autoComplete="email"
                spellCheck={false}
                greska={greske.email}
                obavezno
                className="sm:col-span-2"
              />

              <div className="sm:col-span-2">
                <label htmlFor="upit-project" className="tip-oznaka block text-base">
                  Vrsta radova
                </label>
                <select
                  id="upit-project"
                  name="project"
                  defaultValue=""
                  className="mt-2 block min-h-12 w-full border-2 border-asfalt bg-belo px-3"
                >
                  <option value="">Izaberite…</option>
                  {vrsteRadova.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="upit-message" className="tip-oznaka block text-base">
                  Opis posla
                </label>
                <textarea
                  id="upit-message"
                  name="message"
                  rows={5}
                  maxLength={2000}
                  autoComplete="off"
                  required
                  aria-invalid={greske.message ? true : undefined}
                  aria-describedby={greske.message ? "upit-message-greska" : undefined}
                  placeholder="Npr. asfaltiranje dvorišta od oko 300 m², Futog…"
                  className="mt-2 block w-full resize-y border-2 border-asfalt bg-belo px-3 py-2.5 placeholder:text-sivo/80 aria-invalid:border-bordo"
                />
                <Greska id="upit-message-greska" tekst={greske.message} />
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-2">
                <button
                  type="submit"
                  disabled={stanje === "slanje"}
                  className="tip-oznaka inline-flex min-h-13 items-center gap-3 bg-asfalt px-8 text-lg text-belo transition-colors hover:bg-zelena disabled:cursor-progress disabled:opacity-80"
                >
                  {stanje === "slanje" && (
                    <span
                      aria-hidden="true"
                      className="size-4 animate-spin rounded-full border-2 border-belo border-r-transparent motion-reduce:animate-none"
                    />
                  )}
                  {stanje === "slanje" ? "Šaljem upit…" : "Pošaljite upit"}
                </button>
                <p className="text-sm text-sivo">
                  Podatke koristimo samo za odgovor na upit.{" "}
                  <a href="/privatnost.html" className="underline underline-offset-2 hover:text-asfalt">
                    Politika privatnosti
                  </a>
                </p>
              </div>

              <p aria-live="polite" className="-mt-5 sm:col-span-2">
                {stanje === "greska" && (
                  <span className="block border-l-4 border-bordo bg-belo px-4 py-3">
                    Upit nije poslat zbog greške u vezi. Pokušajte ponovo za minut ili pozovite{" "}
                    <a href={kontakt.telefonHref} className="brojevi font-semibold underline">
                      {kontakt.telefon}
                    </a>
                    .
                  </span>
                )}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Podatak({ pojam, children }: { pojam: string; children: ReactNode }) {
  return (
    <div>
      <dt className="tip-oznaka text-base opacity-80">{pojam}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

function Polje({
  naziv,
  oznaka,
  tip = "text",
  greska,
  napomena,
  obavezno,
  className = "",
  ...ostalo
}: {
  naziv: keyof Upit;
  oznaka: string;
  tip?: string;
  greska?: string;
  napomena?: string;
  obavezno?: boolean;
  className?: string;
} & Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "autoComplete" | "inputMode" | "placeholder" | "spellCheck"
>) {
  const id = `upit-${naziv}`;
  const greskaId = `${id}-greska`;
  return (
    <div className={className}>
      <label htmlFor={id} className="tip-oznaka block text-base">
        {oznaka}
        {napomena && <span className="font-normal text-sivo"> ({napomena})</span>}
      </label>
      <input
        id={id}
        name={naziv}
        type={tip}
        required={obavezno}
        aria-invalid={greska ? true : undefined}
        aria-describedby={greska ? greskaId : undefined}
        className="mt-2 block min-h-12 w-full border-2 border-asfalt bg-belo px-3 placeholder:text-sivo/80 aria-invalid:border-bordo"
        {...ostalo}
      />
      <Greska id={greskaId} tekst={greska} />
    </div>
  );
}

function Greska({ id, tekst }: { id: string; tekst?: string }) {
  if (!tekst) return null;
  return (
    <p id={id} className="mt-1.5 text-base font-semibold text-bordo">
      {tekst}
    </p>
  );
}
