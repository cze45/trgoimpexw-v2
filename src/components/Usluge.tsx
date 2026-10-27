import { ostaleUsluge, usluge } from "../lib/site";

/** Legenda preseka: isti uzorak materijala kao sloj na vrhu strane. */
export function Usluge() {
  return (
    <section id="usluge" aria-labelledby="usluge-naslov" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 id="usluge-naslov" className="tip-h2 lg:col-span-5">
            Ceo put, od iskopa do ograde
          </h2>
          <p className="max-w-[36rem] text-lg text-sivo sm:text-xl lg:col-span-6 lg:col-start-7 lg:pt-3">
            Iskop, podlogu, asfalt i ogradu radi ista ekipa, pa ne morate da usklađujete više
            izvođača na jednom poslu.
          </p>
        </div>

        <ul className="mt-14 border-t-2 border-asfalt">
          {usluge.map((u) => (
            <li
              key={u.id}
              id={u.id}
              className="grid grid-cols-[3.5rem_1fr] gap-x-5 gap-y-4 border-b-2 border-asfalt py-8 sm:grid-cols-[5rem_1fr] sm:gap-x-8 lg:grid-cols-[5rem_minmax(0,4fr)_minmax(0,5fr)_minmax(0,3fr)] lg:py-10"
            >
              <span
                aria-hidden="true"
                className={`${u.materijal} block size-14 border-2 border-asfalt sm:size-20`}
              />
              <h3 className="tip-h3 self-center sm:self-start lg:pt-1">{u.naziv}</h3>
              <p className="col-span-2 max-w-[38rem] text-sivo sm:col-span-1 sm:col-start-2 lg:col-start-auto">{u.opis}</p>
              <ul className="tip-oznaka col-span-2 space-y-1.5 text-base sm:col-span-1 sm:col-start-2 lg:col-start-auto">
                {u.poslovi.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-[0.55em] h-0.5 w-3 shrink-0 bg-asfalt" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-8 sm:grid-cols-[auto_1fr] sm:gap-12">
          <h3 className="tip-h3 text-[1.375rem]">Radimo i</h3>
          <dl className="grid gap-6 sm:grid-cols-3">
            {ostaleUsluge.map((o) => (
              <div key={o.naziv}>
                <dt className="font-semibold">{o.naziv}</dt>
                <dd className="text-sivo">{o.opis}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
