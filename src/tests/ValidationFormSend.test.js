import { ValidationFormSend } from '../components/use/0-GeneralComp/0-Scripts/ValidationFormSend';

describe('ValidationFormSend', () => {
    it('should return a function', () => {
        expect(typeof ValidationFormSend).toBe('function');
    });
    test('Si concepción o la imagen es undefined debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { concepcion: undefined }, image_: '' }).props.children[0]).toBe(true);
    });
    test('Si género o la imagen es undefined debería retornar verdadero o true', () => {
        expect(
            ValidationFormSend({ values_: { concepcion: '', genero: undefined }, image_: '' }).props.children[0]
        ).toBe(true);
    });
    test('Si id o la imagen es undefined debería retornar verdadero o true', () => {
        expect(
            ValidationFormSend({ values_: { concepcion: '', genero: '', id: undefined }, image_: '' }).props
                .children[0]
        ).toBe(true);
    });
    test('Si idMadre o la imagen es undefined debería retornar verdadero o true', () => {
        expect(
            ValidationFormSend({ values_: { concepcion: '', genero: '', id: '', idMadre: undefined }, image_: '' })
                .props.children[0]
        ).toBe(true);
    });
    test('Si idPadre o la imagen es undefined debería retornar verdadero o true', () => {
        expect(
            ValidationFormSend({
                values_: { concepcion: '', genero: '', id: '', idMadre: '', idPadre: undefined },
                image_: '',
            }).props.children[0]
        ).toBe(true);
    });
    test('Si motivo o la imagen es undefined debería retornar verdadero o true', () => {
        expect(
            ValidationFormSend({
                values_: { concepcion: '', genero: '', id: '', idMadre: '', idPadre: '', motivo: undefined },
                image_: '',
            }).props.children[0]
        ).toBe(true);
    });
    test('Si nacimiento o la imagen es undefined debería retornar verdadero o true', () => {
        expect(
            ValidationFormSend({
                values_: {
                    concepcion: '',
                    genero: '',
                    id: '',
                    idMadre: '',
                    idPadre: '',
                    motivo: '',
                    nacimiento: undefined,
                },
                image_: '',
            }).props.children[0]
        ).toBe(true);
    });
    test('Si origen o la imagen es undefined debería retornar verdadero o true', () => {
        expect(
            ValidationFormSend({
                values_: {
                    concepcion: '',
                    genero: '',
                    id: '',
                    idMadre: '',
                    idPadre: '',
                    motivo: '',
                    nacimiento: '',
                    origen: undefined,
                },
                image_: '',
            }).props.children[0]
        ).toBe(true);
    });
    test('Si porcentaje o la imagen es undefined debería retornar verdadero o true', () => {
        expect(
            ValidationFormSend({
                values_: {
                    concepcion: '',
                    genero: '',
                    id: '',
                    idMadre: '',
                    idPadre: '',
                    motivo: '',
                    nacimiento: '',
                    origen: '',
                    porcentaje: undefined,
                },
                image_: '',
            }).props.children[0]
        ).toBe(true);
    });
    test('Si raza o la imagen es undefined debería retornar verdadero o true', () => {
        expect(
            ValidationFormSend({
                values_: {
                    concepcion: '',
                    genero: '',
                    id: '',
                    idMadre: '',
                    idPadre: '',
                    motivo: '',
                    nacimiento: '',
                    origen: '',
                    porcentaje: '',
                    raza: undefined,
                },
                image_: '',
            }).props.children[0]
        ).toBe(true);
    });
    test('Si raza o la imagen es undefined debería retornar falso o false', () => {
        expect(
            ValidationFormSend({
                values_: {
                    concepcion: '',
                    genero: '',
                    id: '',
                    idMadre: '',
                    idPadre: '',
                    motivo: '',
                    nacimiento: '',
                    origen: '',
                    porcentaje: '',
                    raza: '',
                },
                image_: '',
            }).props.children[0]
        ).toBe(false);
    });
    test('Si concepción o la imagen es null debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { concepcion: null }, image_: '' }).props.children[1]).toBe(true);
    });
    test('Si género o la imagen es null debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { genero: null }, image_: '' }).props.children[1]).toBe(true);
    });
    test('Si id o la imagen es null debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { id: null }, image_: '' }).props.children[1]).toBe(true);
    });
    test('Si idMadre o la imagen es null debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { idMadre: null }, image_: '' }).props.children[1]).toBe(true);
    });
    test('Si idPadre o la imagen es null debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { idPadre: null }, image_: '' }).props.children[1]).toBe(true);
    });
    test('Si motivo o la imagen es null debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { motivo: null }, image_: '' }).props.children[1]).toBe(true);
    });
    test('Si nacimiento o la imagen es null debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { nacimiento: null }, image_: '' }).props.children[1]).toBe(true);
    });
    test('Si origen o la imagen es null debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { origen: null }, image_: '' }).props.children[1]).toBe(true);
    });
    test('Si porcentaje o la imagen es null debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { porcentaje: null }, image_: '' }).props.children[1]).toBe(true);
    });
    test('Si raza o la imagen es null debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { raza: null }, image_: '' }).props.children[1]).toBe(true);
    });
    test('Si concepción o la imagen esta vacío debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { concepcion: '' }, image_: undefined }).props.children[2]).toBe(true);
    });
    test('Si género o la imagen esta vacío debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { genero: '' }, image_: undefined }).props.children[2]).toBe(true);
    });
    test('Si id o la imagen esta vacío debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { id: '' }, image_: undefined }).props.children[2]).toBe(true);
    });
    test('Si idMadre o la imagen esta vacío debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { idMadre: '' }, image_: undefined }).props.children[2]).toBe(true);
    });
    test('Si idPadre o la imagen esta vacío debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { idPadre: '' }, image_: undefined }).props.children[2]).toBe(true);
    });
    test('Si motivo o la imagen esta vacío debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { motivo: '' }, image_: undefined }).props.children[2]).toBe(true);
    });
    test('Si nacimiento o la imagen esta vacío debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { nacimiento: '' }, image_: undefined }).props.children[2]).toBe(true);
    });
    test('Si origen o la imagen esta vacío debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { origen: '' }, image_: undefined }).props.children[2]).toBe(true);
    });
    test('Si porcentaje o la imagen esta vacío debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { porcentaje: '' }, image_: undefined }).props.children[2]).toBe(true);
    });
    test('Si raza o la imagen esta vacío debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ values_: { raza: '' }, image_: undefined }).props.children[2]).toBe(true);
    });
    test('Si la imagen es un elemento null debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ image_: null }).props.children[1]).toBe(true);
    });
    test('Si la imagen es un elemento debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ image_: '' }).props.children[2]).toBe(true);
    });
    test('Si la imagen es undefined debería retornar verdadero o true', () => {
        expect(ValidationFormSend({ image_: undefined }).props.children[0]).toBe(true);
    });
});
