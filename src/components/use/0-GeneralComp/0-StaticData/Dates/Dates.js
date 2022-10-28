// export const lifeCycleChild = (props) => {
//     let birth = Date.parse(props?.nacimiento);
//     let raisedDate = new Date(birth + 5302800000);
//     let monthRaised = raisedDate.getMonth() + 1;
//     const raised_ = raisedDate.getFullYear() + '-' + monthRaised + '-' + raisedDate.getDate();
//     let fatteningDate = new Date(birth + 7932600000);
//     let monthFattening = fatteningDate.getMonth() + 1;
//     const fattening_ = fatteningDate.getFullYear() + '-' + monthFattening + '-' + fatteningDate.getDate();
//     let cebaDate = new Date(birth + 10562400000);
//     let monthCeba = cebaDate.getMonth() + 1;
//     const ceba_ = cebaDate.getFullYear() + '-' + monthCeba + '-' + cebaDate.getDate();
//     function peso(posicion) {
//         if (props?.lifecycle[posicion].peso === 'Sin datos') {
//             return props?.lifecycle[posicion].peso;
//         } else {
//             return props?.lifecycle[posicion].peso + ' gr';
//         }
//     }
//     return [
//         {
//             etapa: 'Levante',
//             peso: peso(0),
//             fecha: raised_,
//         },
//         {
//             etapa: 'Engorde',
//             peso: peso(1),
//             fecha: fattening_,
//         },
//         {
//             etapa: 'Ceba',
//             peso: peso(2),
//             fecha: ceba_,
//         },
//     ];
// };

// export const lactation = (props) => {
//     let birthLactation = Date.parse(props);

//     let lactationFunction = new Date(birthLactation + 2673000000);
//     let monthLactation = lactationFunction.getMonth() + 1;

//     return lactationFunction.getFullYear() + '-' + monthLactation + '-' + lactationFunction.getDate();
// };

// export const raised = (props) => {
//     let birthRaised = Date.parse(props);

//     let raisedFunction = new Date(birthRaised + 5302800000);
//     let monthRaised = raisedFunction.getMonth() + 1;

//     return raisedFunction.getFullYear() + '-' + monthRaised + '-' + raisedFunction.getDate();
// };

// export const fattening = (props) => {
//     let birthFattening = Date.parse(props);

//     let fatteningFunction = new Date(birthFattening + 7932600000);
//     let monthFattening = fatteningFunction.getMonth() + 1;

//     return fatteningFunction.getFullYear() + '-' + monthFattening + '-' + fatteningFunction.getDate();
// };

// export const ceba = (props) => {
//     let birthCeba = Date.parse(props);

//     let cebaFunction = new Date(birthCeba + 10562400000);
//     let monthCeba = cebaFunction.getMonth() + 1;

//     return cebaFunction.getFullYear() + '-' + monthCeba + '-' + cebaFunction.getDate();
// };

export const Approximate = (props) => {
    const days = {};
    let birth = Date.parse(props);
    let raisedDate = new Date(birth + 5302800000);
    let monthRaised = raisedDate.getMonth() + 1;
    days.raised = raisedDate.getFullYear() + '-' + monthRaised + '-' + raisedDate.getDate();
    let fatteningDate = new Date(birth + 7932600000);
    let monthFattening = fatteningDate.getMonth() + 1;
    days.fattening = fatteningDate.getFullYear() + '-' + monthFattening + '-' + fatteningDate.getDate();
    let cebaDate = new Date(birth + 10562400000);
    let monthCeba = cebaDate.getMonth() + 1;
    days.ceba = cebaDate.getFullYear() + '-' + monthCeba + '-' + cebaDate.getDate();
    return days;
};

export const ApproximateRepro = (props) => {
    const days = {};
    let inicial = Date.parse(props);
    let palpationDate = new Date(inicial + 864000000);
    let monthPalpation = palpationDate.getMonth() + 1;
    days.palpation = palpationDate.getDate() + '-' + monthPalpation + '-' + palpationDate.getFullYear();
    let prepartumDate = new Date(inicial + 2419200000);
    let monthprepartum = prepartumDate.getMonth() + 1;
    days.prepartum = prepartumDate.getDate() + '-' + monthprepartum + '-' + prepartumDate.getFullYear();
    let birthDate = new Date(inicial + 2592000000);
    let monthBirth = birthDate.getMonth() + 1;
    days.birth = birthDate.getDate() + '-' + monthBirth + '-' + birthDate.getFullYear();
    let weaningDate = new Date(inicial + 5184000000);
    let monthWeaning = weaningDate.getMonth() + 1;
    days.weaning = weaningDate.getDate() + '-' + monthWeaning + '-' + weaningDate.getFullYear();
    return days;
};
