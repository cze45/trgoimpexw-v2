import put from "../assets/project-road.jpg";
import most from "../assets/project-bridge.jpg";
import zgrada from "../assets/project-building.jpg";

// TODO: zameniti fotografijama sa sopstvenih gradilišta (naziv posla, mesto, godina).
const radovi = [
  { slika: put, opis: "Asfaltiranje industrijske saobraćajnice", vrsta: "Asfaltiranje" },
  { slika: most, opis: "Saobraćajna infrastruktura", vrsta: "Niskogradnja" },
  { slika: zgrada, opis: "Poslovni objekat u izgradnji", vrsta: "Visokogradnja" },
];

export function Radovi() {
  const [glavni, ...ostali] = radovi;

  return (
    <section
      id="radovi"
      aria-labelledby="radovi-naslov"
      className="na-tamnom bg-asfalt py-20 text-belo sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="radovi-naslov" className="tip-h2">
            Sa terena
          </h2>
          <a
            href="#kontakt"
            className="tip-oznaka text-base underline decoration-2 underline-offset-[6px] hover:text-sljunak-svetli"
          >
            Imate sličan posao? Zatražite ponudu
          </a>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <Fotografija {...glavni} className="lg:col-span-2 lg:row-span-2" />
          {ostali.map((r) => (
            <Fotografija key={r.opis} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Fotografija({
  slika,
  opis,
  vrsta,
  className = "",
}: (typeof radovi)[number] & { className?: string }) {
  return (
    <figure className={`flex flex-col ${className}`}>
      <img
        src={slika}
        alt={opis}
        width={1280}
        height={896}
        loading="lazy"
        decoding="async"
        className="aspect-[10/7] w-full flex-1 object-cover"
      />
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 border-b border-sljunak py-3">
        <span>{opis}</span>
        <span className="tip-oznaka text-sljunak-svetli">{vrsta}</span>
      </figcaption>
    </figure>
  );
}
