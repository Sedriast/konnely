export function Paragraphs(props) {
	const r = props.race;
	const w = props.weigth;
	const panel = props.panel;

	return (
		<>
			<div className={panel}>
				<p>
					<h1>Raza:</h1>
					{r}
				</p>
				<br />
				<p>
					<h1>Estado:</h1>
					{w}
				</p>
			</div>
		</>
	);
}
