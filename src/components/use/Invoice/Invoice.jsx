import stInvoice from '../../css/Invoice/Invoice.module.css';
import { Paragraphs } from '../Tools/Paragraphs';

export function Invoice(props) {
	return (
		<>
			<div className={props.clsName}>
				<div className={stInvoice.panel}>
					<img src={props.src} alt="" href="" />
					<Paragraphs
						clsName={stInvoice.paragraphs}
						t1={props.name}
						h1={props.nit}
						h2={props.email}
						t2={props.date}
						h3={props.userID}
					/>
					<div className={stInvoice.lines}>
						{/* {Search('conejos').props.children.map((a, index) => (
							<Cards
								clsName={stInvoice.card}
								key={index}
								id_={index}
								cGp={a.datos.grupo}
								url={a.datos.url}
								rabitDataName={a.datos.id}
								data={a}
								data1={a.datos.raza}
								data2={a.datos.genero}
							/>
						))} */}
					</div>
					<h1>Total: </h1>
				</div>
			</div>
		</>
	);
}
