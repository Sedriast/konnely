import { Inputs } from '../../Tools/Inputs/Inputs';
import st from '../css/Com.module.css';

export const AddItem = () => {
	return (
		<>
			<h1>Agendar Stream</h1>
			<div className={st.containerB}>
				<form>
					<div className={st.title}>
						Título
						<input type="text" placeholder="Título del stream" />
					</div>
					<div className={st.category}>
						Categoría
						<select name="category">
							<option value="">-- Elegir categoría --</option>
							<option value="Ciencia y Tecnología">Ciencia y Tecnología</option>
							<option value="Gameplays">Gameplays</option>
							<option value="Música">Música</option>
						</select>
					</div>
					<div className={st.day}>
						Día
						<select name="day">
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
					<div className={st.hour}>
						Hora
						<input type="time" />
					</div>
					<div className={st.group}>
						<input type="submit" value="Añadir" />
					</div>
				</form>
			</div>
		</>
	);
};
