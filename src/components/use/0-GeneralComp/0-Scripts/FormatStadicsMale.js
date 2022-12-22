import { ValidationMonth } from './ValidationMonth';

export const StadicsMale = (props) => {
    let Labels = [];
    let Volumen = [];
    props.sort((a, b) => {
        if (Date.parse(a.date) > Date.parse(b.date)) return 1;
        if (Date.parse(a.date) < Date.parse(b.date)) return -1;
        return 0;
    });
    props.map((e) => {
        let fecha = new Date(e.date);
        let mes = fecha.getMonth();
        let year = fecha.getFullYear();
        Labels.push(ValidationMonth(mes).props.children + ' ' + year);
        Volumen.push(e.volume);
        return null;
    });
    return { Labels, Volumen };
};
