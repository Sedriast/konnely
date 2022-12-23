export const DataStadicsFemale = ({ stadics, grupo }) => {
    const population = () => {
        let labels = stadics?.Labels;
        let lives = stadics?.Lives;
        let deaths = stadics?.Deaths;
        let homogen = stadics?.Homogen;
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
                    label: 'Vivos',
                    data: lives,
                    borderColor: '#FBE122',
                    backgroundColor: '#FBE122',
                    tension: 0.4,
                },
                {
                    label: 'Homogenizados',
                    data: homogen,
                    borderColor: 'white',
                    backgroundColor: 'white',
                    tension: 0.4,
                },
                {
                    label: 'Muertos',
                    data: deaths,
                    borderColor: 'red',
                    backgroundColor: 'red',
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
    return <>{grupo === 'poblacion' ? population() : genere()}</>;
};
