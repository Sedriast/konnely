import stInvoice from "../../css/Invoice/Invoice.module.css";
import { Paragraphs } from "../Tools/Paragraphs";

export function Invoice(props) {
	return (
		<>
			<div className={props.clsName}>
				<div className={stInvoice.panel}>
					<img src={props.src} alt="" href="" />
					<Paragraphs
						clsName={stInvoice.paragraphs}
						t1={props.name}
						b1={props.nit}
						b2={props.email}
						t2={props.date}
						b3={props.userID}
					/>
					<div className={stInvoice.lines}>
						{/* {Search('conejos').props.children.map((a, index) => (
							<Cards
								clsName={stInvoice.card}
								key={index}
								id_={index}
								cGp={a.grupo}
								url={a.url}
								rabitDataName={a.id}
								data={a}
								data1={a.raza}
								data2={a.genero}
							/>
						))} */}
					</div>
					<h1>Total: </h1>
				</div>
			</div>
		</>
	);
}
