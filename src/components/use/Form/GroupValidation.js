export const GroupValidation = (props) => {
    const error_message = {
        Azul: 'blue',
        Rojo: 'red',
        Blanco: 'white',
        Verde: 'green',
    };
    const error_message_default = 'Se produjo un error interno revise sus credenciales';

    const notificacion = () => {
        return error_message[props] || error_message_default;
    };
    return <>{notificacion()}</>;
};
