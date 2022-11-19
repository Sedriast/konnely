import { useState } from "react";
import { addInvoice } from "../../../../../0-GeneralComp/0-StaticData/dataProv";

export function RabitList({ rabbit }) {
  const [aux, setAux] = useState({
    id: rabbit?.id,
    gen: rabbit?.gen,
    race: rabbit?.race,
    weith: rabbit?.weith,
  });
  const cm = (
    <>
      <div>
        <input
          type="number"
          onChange={(e) => {
            setAux({ ...aux, price: parseInt(e.target.value) });
          }}
        />
      </div>
      <button
        onClick={() => {
          addInvoice(aux);
        }}
      >
        ✔️
      </button>
    </>
  );

  return cm;
}
