export const ValidationMonth = (props) => {
    const month_message = {
        0: 'enero',
        1: 'Febrero',
        2: 'Marzo',
        3: 'Abril',
        4: 'Mayo',
        5: 'Junio',
        6: 'Julio',
        7: 'Agosto',
        8: 'Septiembre',
        9: 'Octubre',
        10: 'Noviembre',
        11: 'Diciembre',
    };
    const month_message_default = 'Sin Datos';

    return <>{month_message[props] || month_message_default}</>;
};
