export const ValidationFormSend = ({ values_, image_ }) => {
    const comparationUndefined = () => {
        if (values_?.concepcion === undefined) {
            return true;
        } else if (values_?.genero === undefined) {
            return true;
        } else if (values_?.id === undefined) {
            return true;
        } else if (values_?.idMadre === undefined) {
            return true;
        } else if (values_?.idPadre === undefined) {
            return true;
        } else if (values_?.motivo === undefined) {
            return true;
        } else if (values_?.nacimiento === undefined) {
            return true;
        } else if (values_?.origen === undefined) {
            return true;
        } else if (values_?.porcentaje === undefined) {
            return true;
        } else if (values_?.raza === undefined) {
            return true;
        } else if (image_ === undefined) {
            return true;
        } else {
            return false;
        }
    };
    const comparationNull = () => {
        if (values_?.concepcion === null) {
            return true;
        } else if (values_?.genero === null) {
            return true;
        } else if (values_?.id === null) {
            return true;
        } else if (values_?.idMadre === null) {
            return true;
        } else if (values_?.idPadre === null) {
            return true;
        } else if (values_?.motivo === null) {
            return true;
        } else if (values_?.nacimiento === null) {
            return true;
        } else if (values_?.origen === null) {
            return true;
        } else if (values_?.porcentaje === null) {
            return true;
        } else if (values_?.raza === null) {
            return true;
        } else if (image_ === null) {
            return true;
        } else {
            return false;
        }
    };
    const comparationVacio = () => {
        if (values_?.concepcion === '') {
            return true;
        } else if (values_?.genero === '') {
            return true;
        } else if (values_?.id === '') {
            return true;
        } else if (values_?.idMadre === '') {
            return true;
        } else if (values_?.idPadre === '') {
            return true;
        } else if (values_?.motivo === '') {
            return true;
        } else if (values_?.nacimiento === '') {
            return true;
        } else if (values_?.origen === '') {
            return true;
        } else if (values_?.porcentaje === '') {
            return true;
        } else if (values_?.raza === '') {
            return true;
        } else if (image_ === '') {
            return true;
        } else {
            return false;
        }
    };

    return (
        <>
            {comparationUndefined()}
            {comparationNull()}
            {comparationVacio()}
        </>
    );
};
