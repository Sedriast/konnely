export const DataStadicsMale = ({ stadics }) => {
    let labels = stadics?.Labels;
    let volume = stadics?.Volumen;

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            animateScale: true,
        },
        fontSize: 10,
        color: 'white',
        zise: 10,
    };
    const data = {
        datasets: [
            {
                label: 'Volumen',
                data: volume,
                borderColor: 'white',
                backgroundColor: 'white',
                tension: 0.4,
            },
        ],
        labels,
    };
    return { data, options };
};
