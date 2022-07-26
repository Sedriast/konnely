export const Dates = (props) => {
    console.log(props);
    let birth = Date.parse(props);

    let lactation = new Date(birth + 2592000000);
    let monthLactation = lactation.getMonth() + 1;
    const lactation_ = lactation.getFullYear() + '-' + monthLactation + '-' + lactation.getDate();

    let raised = new Date(birth + 5184000000);
    let monthRaised = raised.getMonth() + 1;
    const raised_ = raised.getFullYear() + '-' + monthRaised + '-' + raised.getDate();

    let fattening = new Date(birth + 7776000000);
    let monthFattening = fattening.getMonth() + 1;
    const fattening_ = fattening.getFullYear() + '-' + monthFattening + '-' + fattening.getDate();

    let ceba = new Date(birth + 10368000000);
    let monthCeba = ceba.getMonth() + 1;
    const ceba_ = ceba.getFullYear() + '-' + monthCeba + '-' + ceba.getDate();

    const ciclo = [
        {
            etapa: 'Nacimiento',
            peso: '200gr',
            fecha: props,
        },
        {
            etapa: 'Lactancia',
            peso: '1kg',
            fecha: lactation_,
        },
        {
            etapa: 'Levante',
            peso: '1.5kg',
            fecha: raised_,
        },
        {
            etapa: 'Engorde',
            peso: '2kg',
            fecha: fattening_,
        },
        {
            etapa: 'Ceba',
            peso: '2.5kg',
            fecha: ceba_,
        },
    ];

    return ciclo;
};
