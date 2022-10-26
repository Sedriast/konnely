import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const options = {
	responsive: true,
	scales: {
		y: { min: -100 },
	},
};

export function PanelData1() {
	const data = {
		datasets: [
			{
				label: 'Vivos',
				data: [10, -10, 1, 2, 3, 5],
				borderColor: '#FBE122',
				backgroundColor: '#FBE122',
				tension: 0.4,
			},
			{
				label: 'Rechazados',
				data: [50, -50, 5, 10, 17, 28],
				borderColor: 'gray',
				backgroundColor: 'gray',
				tension: 0.4,
			},
			{
				label: 'Muertos',
				data: [100, -100, 10, 20, 35, 56],
				borderColor: 'red',
				backgroundColor: 'red',
				tension: 0.4,
			},
		],
		labels,
	};
	return <Line data={data} options={options} />;
}
