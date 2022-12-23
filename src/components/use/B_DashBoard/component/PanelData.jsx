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

export function PanelData({ stadics }) {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    let data = stadics?.data;
    let options = stadics?.options;

    const cm = <Line data={data} options={options} />;

    return cm;
}
