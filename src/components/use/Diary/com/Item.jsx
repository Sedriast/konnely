export const Item = ({ item }) => {
	return (
		<div className={st.cols} key={item.id}>
			<p>Dia</p>
			<div className={st.row_item}>
				<div className={st.col_sm_1}>
					<img src={imgCat} alt="" />
				</div>
				<div className={st.col_sm_2}>
					{item.title}-{item.category}
				</div>
				<div className={st.col_sm_3}>IconoEliminar</div>
			</div>
		</div>
	);
};
