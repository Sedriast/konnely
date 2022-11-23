import { ValidationMonth } from './ValidationMonth';

export const Stadics = (props) => {
    let Labels = [];
    let Lives = [];
    let Deaths = [];
    let Homogen = [];
    props.sort((a, b) => {
        if (Date.parse(a.stages[3].date) > Date.parse(b.stages[3].date)) return 1;
        if (Date.parse(a.stages[3].date) < Date.parse(b.stages[3].date)) return -1;
        return 0;
    });
    props.map((e) => {
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
