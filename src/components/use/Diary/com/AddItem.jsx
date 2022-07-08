import st from '../css/Com.module.css';

export const AddItem = () => {
	return (
		<div className={st.col_sm}>
			<div className={st.card}>
				<div className={st.card_header}>
					<h2 className={st.text_muted}>Agendar Stream</h2>
				</div>
				<div className="card-body">
					<form className="">
						<div className="form-group">
							<label>Título</label>
							<input type="text" placeholder="Título del stream" className="form-control" />
						</div>
						<div className="form-group">
							<select name="category" className="form-control">
								<option value="">-- Elegir categoría --</option>
								<option value="Ciencia y Tecnología">Ciencia y Tecnología</option>
								<option value="Gameplays">Gameplays</option>
								<option value="Música">Música</option>
							</select>
						</div>
						<div className="form-group">
							<select name="day" className="form-control">
								<option value="">-- Elegir Día --</option>
								<option value="Lunes">Lunes</option>
								<option value="Martes">Martes</option>
								<option value="Miércoles">Miércoles</option>
								<option value="Jueves">Jueves</option>
								<option value="Viernes">Viernes</option>
								<option value="Sábado">Sábado</option>
								<option value="Domingo">Domingo</option>
							</select>
						</div>
						<div className="form-group">
							<label>Hora</label>
							<input type="time" className="form-control" />
						</div>
						<div className="form-group">
							<input type="submit" className="btn btn-primary btn-add-item" value="Añadir stream" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
