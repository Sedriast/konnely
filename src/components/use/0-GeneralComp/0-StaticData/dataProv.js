import { QueriesSimple_ } from '../../../firebase/funtions/QueriesSimple_';
import { RealTime } from '../../../firebase/funtions/RealTime';

export const recuperar = (id, info) => {
    basicData.id = id;
    basicData.info = info;
};
export const basicData = {
    id: null,
    info: {},
};

export const reproData = {
    rechazos: '0',
    muertes: '0',
    vivos: '0',
    partos: '0',
};

export const recuperar_ = (id) => {
    const resultado = RealTime({
        coleccion: 'rabbits',
        parametro: 'id',
        busqueda: id,
    }).props.children;
    console.log(resultado);
};
