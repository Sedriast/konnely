import app from "../firebase/credenciales";
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
const db = getFirestore(app);

export function ListTypeMH(props) {
  const [list, setList] = useState([{ name: "Loading...", id: "initial" }]);
  const desabilitar = props.desabilitar;
  const coleccion = props.collection;
  const { handleChanche } = props;
  const { summitState } = props;
  const clName = props.clName;

  useEffect(
    () =>
      onSnapshot(collection(db, coleccion), (snapshot) =>
        setList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <select
      className={clName}
      name="estado"
      onChange={handleChanche}
      disabled={desabilitar}
      onClick={summitState}
    >
      {list.map((a) => (
        <option key={a.id} value={a.name}>
          {a.name}
        </option>
      ))}
    </select>
  );
}
