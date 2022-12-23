import { ValidationMonth } from './ValidationMonth';

export const StadicsMale = ({ data, grupo }) => {
    const extraction = () => {
        let Labels = [];
        let Volumen = [];
        data.sort((a, b) => {
            if (Date.parse(a.date) > Date.parse(b.date)) return 1;
            if (Date.parse(a.date) < Date.parse(b.date)) return -1;
            return 0;
        });
        data.map((e) => {
            let fecha = new Date(e.date);
            let mes = fecha.getMonth();
            let year = fecha.getFullYear();
            Labels.push(ValidationMonth(mes).props.children + ' ' + year);
            Volumen.push(e.volume);
            return null;
        });
        return { Labels, Volumen };
    };
    const genere = () => {
        let Labels = [];
        let Males = [];
        let Females = [];
        data.sort((a, b) => {
            if (Date.parse(a.stages[4].date) > Date.parse(b.stages[4].date)) return 1;
            if (Date.parse(a.stages[4].date) < Date.parse(b.stages[4].date)) return -1;
            return 0;
        });
        data.map((e) => {
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
    return <>{grupo === 'poblacion' ? extraction() : genere()}</>;
};
