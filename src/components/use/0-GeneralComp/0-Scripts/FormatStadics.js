import { ValidationMonth } from './ValidationMonth';

export const LableStadics = (props) => {
    let values = [];
    props.map((e) => {
        if (e.stages[3].state === true) {
            let fecha = new Date(e.stages[3].date);
            let mes = fecha.getMonth();
            let year = fecha.getFullYear();
            values.push(ValidationMonth(mes).props.children + ' ' + year);
        }
        return values;
    });
    return values;
};
export const LivesStadics = (props) => {
    let values = [];
    props.map((e) => {
        if (e.stages[3].state === true) {
            values.push(e.stages[3].lives);
        }
        return values;
    });
    return values;
};

export const DeathStadics = (props) => {
    let values = [];
    props.map((e) => {
        if (e.stages[3].state === true) {
            values.push(e.stages[3].deaths);
        }
        return values;
    });
    return values;
};

export const HomogenStadics = (props) => {
    let values = [];
    props.map((e) => {
        if (e.stages[3].state === true) {
            values.push(e.stages[3].homogen);
        }
        return values;
    });
    return values;
};
