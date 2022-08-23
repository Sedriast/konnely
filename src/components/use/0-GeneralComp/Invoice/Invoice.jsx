import st from './css/Invoice.module.css';

export function Invoice(props) {
	return (
		<>
			<div className={props.clsName}>
				<div className={st.panel}>
					<img src={props.src} alt="" href="" />
					<p>
						<h1>{props.name}</h1>
						<h2>{props.nit}</h2>
						<h2>{props.email}</h2>
						<h2>{props.date}</h2>
						<h2>{props.userID}</h2>
					</p>

					<div className={st.lines}>
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
