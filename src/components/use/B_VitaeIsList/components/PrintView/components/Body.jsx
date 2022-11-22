import st from "./Body.module.css";

import { Destete } from "./Destete/Destete";
import { Monta } from "./Monta/Monta";
import { Palpa } from "./Palpa/Palpa";
import { Parto } from "./Parto/Parto";

export function Body({ Montas, Palpas, Partos, Destetes }) {
  const cm = (
    <div className={st.container}>
      <table className={st.tableTop}>
        <thead>
          <th>Montas</th>
          <th>Palpación</th>
          <th>Partos</th>
          <th>Destetes</th>
        </thead>
        <tbody>
          <tr>
            <th>
              <Monta dataMontas={Montas} />
            </th>
            <th>
              <Palpa dataPalpa={Palpas} />
            </th>
            <th>
              <Parto dataPartos={Partos} />
            </th>
            <th>
              <Destete dataDes={Destetes} />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return cm;
}
