import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Zaglavlje } from "./components/Zaglavlje";
import { Presek } from "./components/Presek";
import { Usluge } from "./components/Usluge";
import { KakoRadimo } from "./components/KakoRadimo";
import { Radovi } from "./components/Radovi";
import { ONama } from "./components/ONama";
import { Kontakt } from "./components/Kontakt";
import { Podnozje } from "./components/Podnozje";

function Pocetna() {
  return (
    <>
      <Zaglavlje />
      <main id="sadrzaj" tabIndex={-1} className="outline-none">
        <Presek />
        <Usluge />
        <KakoRadimo />
        <Radovi />
        <ONama />
        <Kontakt />
      </main>
      <Podnozje />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Pocetna />
  </StrictMode>,
);
