import { kontakt, usluge } from "../lib/site";

const slojevi = [
  { sloj: "asfalt", uslugaId: "asfaltiranje", visina: "h-16 sm:h-[4.5rem]", tekst: "text-belo", podloga: "bg-asfalt" },
  { sloj: "tampon", uslugaId: "niskogradnja", visina: "h-16 sm:h-20", tekst: "text-asfalt", podloga: "bg-sljunak-svetli" },
  { sloj: "temelj", uslugaId: "zemljani-radovi", visina: "h-20 sm:h-24", tekst: "text-belo", podloga: "bg-zelena" },
] as const;

const ograda = usluge.find((u) => u.id === "ogradjivanje")!;

/**
 * Početni ekran: naslov stoji na površini puta, a ispod je poprečni
 * presek kolovoza. Svaki sloj (i ograda) vodi na odgovarajuću uslugu.
 */
export function Presek() {
  return (
    <section aria-labelledby="naslov" className="flex min-h-[calc(100svh-5.5rem)] sm:min-h-[calc(100svh-6rem)] flex-col">
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-32 pt-6 sm:px-6 sm:pb-36 lg:px-8">
        <h1 id="naslov" className="tip-naslov max-w-[12ch] text-[clamp(3.75rem,min(12.5vw,16svh),10.5rem)]">
          Temelj, ograda, asfalt.
        </h1>
        <p className="mt-6 max-w-[34rem] text-lg text-sivo sm:text-xl">
          Porodična građevinska firma iz Novog Sada. Više od 25&nbsp;godina radimo zemljane
          radove, ograde i asfalt za firme, investitore i privatne vlasnike.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#kontakt"
            className="tip-oznaka inline-flex min-h-13 items-center bg-zelena px-7 text-lg text-belo transition-colors hover:bg-zelena-tamna"
          >
            Zatražite ponudu
          </a>
          <a
            href={kontakt.telefonHref}
            className="brojevi tip-oznaka inline-flex min-h-13 items-center border-2 border-asfalt px-7 text-lg transition-colors hover:bg-asfalt hover:text-belo"
          >
            Pozovite {kontakt.telefon}
          </a>
        </div>
      </div>

      <nav aria-label="Presek puta: usluge po slojevima" className="relative">
        {/* Ograda stoji na površini asfalta, uz desnu ivicu */}
        <div className="absolute bottom-full right-0 w-[min(52%,38rem)]">
          <a
            href={`#${ograda.id}`}
            className="ograda-oznaka tip-oznaka absolute bottom-full left-0 mb-2 inline-flex items-center gap-2 text-base hover:underline"
          >
            <span aria-hidden="true" className="h-5 w-0.5 bg-asfalt" />
            {ograda.naziv}
          </a>
          <div className="ograda" aria-hidden="true">
            <div className="ograda-telo" />
          </div>
        </div>

        {slojevi.map((s) => {
          const u = usluge.find((x) => x.id === s.uslugaId)!;
          return (
            <div key={s.sloj} data-sloj={s.sloj} className={`presek-sloj na-tamnom ${u.materijal} ${s.visina}`}>
              <a
                href={`#${u.id}`}
                className={`group mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8 ${s.tekst} focus-visible:outline-offset-[-6px]`}
              >
                <span className={`${s.podloga} inline-flex flex-wrap items-baseline gap-x-4 gap-y-0.5 px-3 py-1.5`}>
                  <span className="tip-h3 text-[1.375rem] group-hover:underline sm:text-[1.625rem]">
                    {u.naziv}
                  </span>
                  <span className="hidden text-base opacity-85 sm:inline">{u.ukratko}</span>
                </span>
              </a>
            </div>
          );
        })}
      </nav>
    </section>
  );
}
