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
    days.palpation = palpationDate.getFullYear() + '-' + monthPalpation + '-' + palpationDate.getDate();
    let prepartumDate = new Date(inicial + 2419200000);
    let monthprepartum = prepartumDate.getMonth() + 1;
    days.prepartum = prepartumDate.getFullYear() + '-' + monthprepartum + '-' + prepartumDate.getDate();
    let birthDate = new Date(inicial + 2592000000);
    let monthBirth = birthDate.getMonth() + 1;
    days.birth = birthDate.getFullYear() + '-' + monthBirth + '-' + birthDate.getDate();
    let weaningDate = new Date(inicial + 5184000000);
    let monthWeaning = weaningDate.getMonth() + 1;
    days.weaning = weaningDate.getFullYear() + '-' + monthWeaning + '-' + weaningDate.getDate();
    return days;
};

export const DateInactive = (props) => {
    return Date.now() - props > 15778800000;
};
