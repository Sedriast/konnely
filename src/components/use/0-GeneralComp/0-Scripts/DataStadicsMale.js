export const DataStadicsMale = ({ stadics, grupo }) => {
    const extraction = () => {
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

    const genere = () => {
        let labels = stadics?.Labels;
        let males = stadics?.Males;
        let females = stadics?.Females;
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
                    label: 'Machos',
                    data: males,
                    borderColor: '#00FFFF',
                    backgroundColor: '#00FFFF',
                    tension: 0.4,
                },
                {
                    label: 'Hembras',
                    data: females,
                    borderColor: '#F7BFBE',
                    backgroundColor: '#F7BFBE',
                    tension: 0.4,
                },
            ],
            labels,
        };
        return { data, options };
    };
    return <>{grupo === 'poblacion' ? extraction() : genere()}</>;
};
