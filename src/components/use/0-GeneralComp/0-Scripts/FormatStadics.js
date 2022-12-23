import { ValidationMonth } from './ValidationMonth';

export const Stadics = ({ data, grupo }) => {
    const ordenar = (index) => {
        data.sort((a, b) => {
            if (Date.parse(a.stages[index].date) > Date.parse(b.stages[index].date)) return 1;
            if (Date.parse(a.stages[index].date) < Date.parse(b.stages[index].date)) return -1;
            return 0;
        });
        return data;
    };
    const population = () => {
        let Labels = [];
        let Lives = [];
        let Deaths = [];
        let Homogen = [];
        ordenar(3).map((e) => {
            if (e.stages[3].state === true) {
                let fecha = new Date(e.stages[3].date);
                let mes = fecha.getMonth();
                let year = fecha.getFullYear();
                Labels.push(ValidationMonth(mes).props.children + ' ' + year);
                Lives.push(e.stages[3].lives);
                Deaths.push(e.stages[3].deaths);
                Homogen.push(e.stages[3].homogen);
            }
            return null;
        });
        return { Labels, Lives, Deaths, Homogen };
    };

    const genere = () => {
        let Labels = [];
        let Males = [];
        let Females = [];
        ordenar(4).map((e) => {
            if (e.stages[4].state === true) {
                let fecha = new Date(e.stages[3].date);
                let mes = fecha.getMonth();
                let year = fecha.getFullYear();
                Labels.push(ValidationMonth(mes).props.children + ' ' + year);
                Females.push(e.stages[4].FemaleHatchlings);
                Males.push(e.stages[4].MaleHatchlings);
            }
            return null;
        });
        return { Labels, Males, Females };
    };

    return <>{grupo === 'poblacion' ? population() : genere()}</>;
};
