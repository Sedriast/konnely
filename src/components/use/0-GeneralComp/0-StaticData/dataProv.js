// Contexto improvisado de la información de un conejo

export const recuperar = (id, info) => {
    basicData.id = id;
    basicData.info = info;
};
export const basicData = {
    id: null,
    info: {},
};

// Contexto improvisado de la información de un tratamiento

export const recuperarTrataments = (info) => {
    tratamentsData.info = info;
};
export const tratamentsData = {
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
