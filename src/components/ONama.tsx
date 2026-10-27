import { kontakt } from "../lib/site";

const cinjenice = [
  { pojam: "Na terenu", vrednost: "više od 25 godina" },
  { pojam: "Završenih projekata", vrednost: "180+" },
  { pojam: "Stručnih radnika", vrednost: "15+" },
  { pojam: "Odgovor na upit", vrednost: "24 h radnim danom" },
  { pojam: "Sedište", vrednost: kontakt.adresa },
  { pojam: "Radimo u", vrednost: "Novom Sadu, Vojvodini i celoj Srbiji" },
];

const obaveze = [
  "Tim iskusnih građevinskih inženjera",
  "Sertifikovana mehanizacija i oprema",
  "Poštovanje rokova i budžeta",
  "Stroge mere zaštite na radu",
];

export function ONama() {
  return (
    <section id="o-nama" aria-labelledby="o-nama-naslov" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <h2 id="o-nama-naslov" className="tip-h2 max-w-[13ch]">
            Porodična firma iz Novog Sada
          </h2>
          <p className="mt-8 max-w-[36rem] text-lg sm:text-xl">
            Trgoimpex W radi zemljane radove, ograđivanje i asfaltiranje. Tim čine inženjeri,
            majstori i operativci sa decenijskim iskustvom.
          </p>
          <p className="mt-4 max-w-[36rem] text-sivo">
            Radimo sertifikovanom mehanizacijom, a rokove i budžet dogovaramo unapred i držimo ih
            se.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {obaveze.map((o) => (
              <li key={o} className="flex gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="mt-1 size-5 shrink-0 text-zelena"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M3 10.5l4.5 4.5L17 5" />
                </svg>
                {o}
              </li>
            ))}
          </ul>
        </div>

        <dl className="self-start border-t-2 border-asfalt lg:col-span-5 lg:col-start-8">
          {cinjenice.map((c) => (
            <div
              key={c.pojam}
              className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 border-b border-asfalt/40 py-4"
            >
              <dt className="text-sivo">{c.pojam}</dt>
              <dd className="brojevi font-semibold">{c.vrednost}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
