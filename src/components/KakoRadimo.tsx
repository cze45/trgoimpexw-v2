const koraci = [
  {
    naslov: "Pošaljete upit",
    opis: "Telefonom, mejlom ili preko forme. Javljamo se u roku od 24 sata radnim danom.",
  },
  {
    naslov: "Izlazimo na teren",
    opis: "Pogledamo lokaciju, izmerimo površinu i dogovorimo šta tačno treba uraditi.",
  },
  {
    naslov: "Dobijate ponudu",
    opis: "Pisana ponuda sa cenom, rokom i opisom radova.",
  },
  {
    naslov: "Izvodimo radove",
    opis: "Sertifikovanom mehanizacijom, u dogovorenom roku, uz primopredaju na kraju.",
  },
];

export function KakoRadimo() {
  return (
    <section
      id="kako-radimo"
      aria-labelledby="kako-radimo-naslov"
      className="border-t-2 border-asfalt bg-beton-tamni py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="kako-radimo-naslov" className="tip-h2 max-w-[14ch]">
          Od upita do primopredaje
        </h2>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {koraci.map((k, i) => (
            <li key={k.naslov} className="relative lg:pr-8">
              <div className="flex items-center" aria-hidden="true">
                <span className="brojevi tip-naslov flex size-14 shrink-0 items-center justify-center bg-asfalt text-[2rem] text-belo">
                  {i + 1}
                </span>
                {i < koraci.length - 1 && (
                  <span className="hidden h-0.5 flex-1 bg-asfalt lg:block" />
                )}
              </div>
              <h3 className="tip-h3 mt-5 text-[1.5rem]">{k.naslov}</h3>
              <p className="mt-2 max-w-[28rem] text-sivo">{k.opis}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
