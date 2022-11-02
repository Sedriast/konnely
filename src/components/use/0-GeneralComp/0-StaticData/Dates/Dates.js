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
