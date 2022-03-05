import app from "../../firebase/credentials";
import style_Li from '../../css/Tools/Lists.module.css';
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
const db = getFirestore(app);

export function Lists(props) {
	const [list, setList] = useState([{ name: "Loading..." }]);
	const coleccion = props.collection;
	const { handleChanche } = props;

	useEffect(
		() =>
			onSnapshot(collection(db, coleccion), (snapshot) =>
				setList(snapshot.docs.map((doc) => ({ ...doc.data() })))
			),
		[]
	);

	return (
        <>
            <div className={props.clsName}>
                <h1 className={style_Li.label} >{props.leyend}</h1>
                <select className={style_Li.list_} name={coleccion} onChange={handleChanche}>
                    {list.map((a) => (
                        <option key={a.name} value={a.name}>
                            {a.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
	);
}