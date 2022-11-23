export const ValidationMonth = (props) => {
    const month_message = {
        0: 'en',
        1: 'febr',
        2: 'mzo',
        3: 'abr',
        4: 'my',
        5: 'jun',
        6: 'jul',
        7: 'agto',
        8: 'sept',
        9: 'oct',
        10: 'nov',
        11: 'dic',
    };
    const month_message_default = 'Sin Datos';

    return <>{month_message[props] || month_message_default}</>;
};
