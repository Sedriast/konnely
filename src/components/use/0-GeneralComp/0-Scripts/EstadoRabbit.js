export const estadoRabbit = ({ reproductivecycle, lifecycle, estado }) => {
    if (estado === 'Inactivo') {
        return 'Inactivo';
    } else if (reproductivecycle === true) {
        return 'Camada Activa';
    } else if (lifecycle[3]?.date && reproductivecycle === false) {
        return 'Se puede reproducir';
    } else if (lifecycle[2]?.date && reproductivecycle === false) {
        return 'En Engorde';
    } else {
        return 'En Levante';
    }
};
