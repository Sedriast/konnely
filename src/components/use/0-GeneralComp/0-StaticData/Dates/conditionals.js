import swal from 'sweetalert';

export const conditionalBasis = (updateState, name, value) => {
    if (Date.now() - 43200000 - Date.parse(value) <= 0) {
        swal({
            title: 'A ingresado una fecha incorrecta',
            icon: 'error',
            button: 'aceptar',
        });
        return null;
    } else {
        updateState(name, value);
        return value;
    }
};

export const conditionalLevante = (updateState, name, value, nacimiento) => {
    if (Date.now() - 43200000 - Date.parse(value) <= 0 || Date.parse(value) - Date.parse(nacimiento) <= 0) {
        swal({
            title: 'A ingresado una fecha incorrecta',
            icon: 'error',
            button: 'aceptar',
        });
        return null;
    } else {
        updateState(name, value);
        return value;
    }
};

export const conditionalNext = (updateState, name, value, next) => {
    if (Date.now() - 43200000 - Date.parse(value) <= 0) {
        swal({
            title: 'A ingresado una fecha incorrecta',
            icon: 'error',
            button: 'aceptar',
        });
        return null;
    } else if (Date.parse(value) - Date.parse(next) <= 0 || !next) {
        swal({
            title: 'No se puede asignar esa fecha a la finalización de esta etapa',
            icon: 'error',
            button: 'aceptar',
        });
        return null;
    } else {
        updateState(name, value);
        return value;
    }
};
