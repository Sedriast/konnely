import st from '../styles/RabbitStadisticsView.module.css';

import { reproData } from '../../../scripts/dataProv';

export function RabbitStadisticsView() {
	return (
		<div className={st.container}>
			<div className={st.rejected}>Crias rechasadas: {reproData.rechazos}</div>
			<div className={st.death}>Crias muertas: {reproData.muertes}</div>
			<div className={st.life}>Crias vivas: {reproData.vivos}</div>
		</div>
	);
}
