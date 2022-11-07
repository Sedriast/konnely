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

export function PanelData1({ labels, lives, deaths, homogen }) {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

    const options = {
        responsive: true,
        scales: {
            y: { min: 0 },
        },
    };
    const data = {
        datasets: [
            {
                label: 'Vivos',
                data: lives,
                borderColor: '#FBE122',
                backgroundColor: '#FBE122',
                tension: 0.4,
            },
            {
                label: 'Homogenizados',
                data: deaths,
                borderColor: 'gray',
                backgroundColor: 'gray',
                tension: 0.4,
            },
            {
                label: 'Muertos',
                data: homogen,
                borderColor: 'red',
                backgroundColor: 'red',
                tension: 0.4,
            },
        ],
        labels,
    };
    return <Line data={data} options={options} />;
}
