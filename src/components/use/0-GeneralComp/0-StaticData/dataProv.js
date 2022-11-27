// Contexto improvisado de la información de un conejo

export const recuperar = (id, info) => {
    basicData.id = id;
    basicData.info = info;
};
export const basicData = {
    id: null,
    info: {},
};

// Contexto improvisado de la información de un conejo

export const recuperarCamada = (uid) => {
    CamadaData.uid = uid;
};
export const CamadaData = {
    uid: null,
};

// Contexto improvisado de la información de un tratamiento

export const recuperarTrataments = (info) => {
    tratamentsData.info = info;
};
export const tratamentsData = {
    info: null,
};
// Contexto improvisado de la información de un tratamiento

export const recuperarExtraction = (info) => {
    extractionData.info = info;
};
export const extractionData = {
    info: null,
};

export const recuperarUser = (info) => {
    userData.info = info;
};
export const userData = {
    info: null,
};

export const reproData = {
    rechazos: '0',
    muertes: '0',
    vivos: '0',
    partos: '0',
};

// Contexto improvisado de la información de un conejo

export const addInvoice = (id, gen, race, weith, price) => {
    RabbitDate.id = id;
    RabbitDate.gen = gen;
    RabbitDate.race = race;
    RabbitDate.weith = weith;
    RabbitDate.price = price;
};
export const RabbitDate = {
    id: '',
    gen: '',
    race: '',
    weith: '',
    price: '',
};
