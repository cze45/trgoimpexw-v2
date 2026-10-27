export const kontakt = {
  telefon: "063 504 857",
  telefonMedjunarodni: "+381 63 504 857",
  telefonHref: "tel:+38163504857",
  email: "trgoimpexw@gmail.com",
  adresa: "Titelska 5, Novi Sad",
  mapaHref: "https://www.google.com/maps/search/?api=1&query=Titelska+5+Novi+Sad+Srbija",
} as const;

export type Usluga = {
  id: string;
  naziv: string;
  ukratko: string;
  opis: string;
  poslovi: string[];
  materijal: "mat-ograda" | "mat-asfalt" | "mat-tampon" | "mat-temelj";
};

// Redosled prati presek puta odozgo nadole.
export const usluge: Usluga[] = [
  {
    id: "ogradjivanje",
    naziv: "Ograđivanje",
    ukratko: "gradilišta, kompleksi, placevi",
    opis: "Ograde oko gradilišta, poslovnih i industrijskih kompleksa i privatnih placeva — od betoniranja stubova do postavljanja panela ili žičane mreže.",
    poslovi: ["Panelne i žičane ograde", "Privremene ograde gradilišta", "Kapije i ulazi"],
    materijal: "mat-ograda",
  },
  {
    id: "asfaltiranje",
    naziv: "Asfaltiranje",
    ukratko: "putevi, parkinzi, industrijske površine",
    opis: "Asfaltiranje puteva, parkinga, dvorišta i industrijskih površina, na novoj podlozi ili preko postojeće.",
    poslovi: ["Putevi i prilazi", "Parkinzi i platoi", "Industrijska dvorišta"],
    materijal: "mat-asfalt",
  },
  {
    id: "niskogradnja",
    naziv: "Niskogradnja",
    ukratko: "putevi, platoi, nosivi slojevi",
    opis: "Putevi i ostala saobraćajna infrastruktura — tamponiranje, nosivi slojevi i sve što mora da drži teret pre nego što dođe asfalt.",
    poslovi: ["Tampon i nosivi slojevi", "Saobraćajnice i platoi", "Odvodnjavanje"],
    materijal: "mat-tampon",
  },
  {
    id: "zemljani-radovi",
    naziv: "Iskopi i zemljani radovi",
    ukratko: "iskop, nasipanje, priprema terena",
    opis: "Zemljani radovi, iskopi, nasipanje i pripremni radovi za sve vrste gradnje. Teren ostavljamo spreman za sledeću fazu.",
    poslovi: ["Iskop temelja i kanala", "Nasipanje i nabijanje", "Raščišćavanje i ravnanje terena"],
    materijal: "mat-temelj",
  },
];

export const ostaleUsluge = [
  { naziv: "Visokogradnja", opis: "Stambeni, poslovni i industrijski objekti." },
  { naziv: "Projektovanje", opis: "Projektna dokumentacija i konsalting." },
  { naziv: "Inženjering", opis: "Stručni nadzor i vođenje gradnje." },
];
