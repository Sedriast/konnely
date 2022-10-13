export const recuperar = (id, info) => {
    basicData.id = id;
    basicData.info = info;
};
export const basicData = {
    id: null,
    info: {},
};

export const recuperarTrataments = (info) => {
    tratamentsData.info = info;
};
export const tratamentsData = {
    info: null,
};

export const reproData = {
    rechazos: '0',
    muertes: '0',
    vivos: '0',
    partos: '0',
};
