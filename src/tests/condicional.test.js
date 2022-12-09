import {
    conditionalBasis,
    conditionalBasisEdit,
    conditionalLevante,
    conditionalLevanteEdit,
    conditionalNext,
    conditionalNextEdit,
    conditionalLast,
    conditionalLastEdit,
} from '../components/use/0-GeneralComp/0-StaticData/Dates/conditionals';

describe('conditionalBasis', () => {
    it('Debería retornar null si la fecha es incorrecta', () => {
        const updateState = jest.fn();
        const name = 'name';
        const value = '2022-12-30';
        const result = conditionalBasis(updateState, name, value);
        expect(result).toBeNull();
    });
    it('Debería retornar el valor si la fecha es correcta', () => {
        const updateState = jest.fn();
        const name = 'name';
        const value = '2022-11-30';
        const result = conditionalBasis(updateState, name, value);
        expect(result).toBe('2022-11-30');
    });
});

describe('conditionalBasisEdit', () => {
    it('Debería retornar el valor por defecto si la fecha es incorrecta', () => {
        const defaultValue = '2022-11-25';
        const value = '2022-12-30';
        const result = conditionalBasisEdit(value, defaultValue);
        expect(result).toBe('2022-11-25');
    });
    it('Debería retornar el valor ingresado si la fecha es correcta', () => {
        const defaultValue = '2022-11-25';
        const value = '2022-11-30';
        const result = conditionalBasisEdit(value, defaultValue);
        expect(result).toBe('2022-11-30');
    });
});

describe('conditionalLevante', () => {
    it('Debería retornar null si la fecha es anterior al nacimiento', () => {
        const updateState = jest.fn();
        const name = 'name';
        const value = '2022-11-30';
        const nacimiento = '2022-12-30';
        const result = conditionalLevante(updateState, name, value, nacimiento);
        expect(result).toBeNull();
    });
    it('Debería retornar el valor si la fecha es posterior al nacimiento', () => {
        const updateState = jest.fn();
        const name = 'name';
        const value = '2022-12-06';
        const nacimiento = '2022-10-30';
        const result = conditionalLevante(updateState, name, value, nacimiento);
        expect(result).toBe('2022-12-06');
    });
});

describe('conditionalLevanteEdit', () => {
    it('Debería retornar el valor ingresado si la fecha es posterior al nacimiento y a hoy', () => {
        const defaultValue = '2022-11-30';
        const value = '2022-11-30';
        const nacimiento = '2022-11-06';
        const result = conditionalLevanteEdit(value, defaultValue, nacimiento);
        expect(result).toBe('2022-11-30');
    });
    it('Debería retornar el valor por defecto si la fecha es anterior al nacimiento o a hoy', () => {
        const defaultValue = '2022-12-01';
        const value = '2022-11-06';
        const nacimiento = '2022-11-30';
        const result = conditionalLevanteEdit(value, defaultValue, nacimiento);
        expect(result).toBe('2022-12-01');
    });
});

describe('conditionalNext', () => {
    it('Debería retornar null si la fecha es anterior al nacimiento y al valor anterior', () => {
        const updateState = jest.fn();
        const name = 'name';
        const value = '2022-11-30';
        const next = '2022-12-30';
        const result = conditionalNext(updateState, name, value, next);
        expect(result).toBeNull();
    });
    it('Debería retornar null si la fecha es posterior a hoy y al valor anterior', () => {
        const updateState = jest.fn();
        const name = 'name';
        const value = '2023-1-1';
        const next = '2022-12-30';
        const result = conditionalNext(updateState, name, value, next);
        expect(result).toBeNull();
    });
    it('Debería retornar el valor ingresado si la fecha es posterior al nacimiento y al valor anterior', () => {
        const updateState = jest.fn();
        const name = 'name';
        const value = '2022-12-06';
        const next = '2022-11-30';
        const result = conditionalNext(updateState, name, value, next);
        expect(result).toBe('2022-12-06');
    });
});

describe('conditionalNextEdit', () => {
    it('Debería retornar el valor default si la fecha es posterior a hoy y anterior al valor next', () => {
        const defaultValue = '2022-12-01';
        const value = '2023-01-01';
        const next = '2022-12-30';
        const result = conditionalNextEdit(value, defaultValue, next);
        expect(result).toBe('2022-12-01');
    });
    it('Debería retornar el valor default si la fecha es anterior a hoy y al valor next', () => {
        const defaultValue = '2022-12-01';
        const value = '2022-11-30';
        const next = '2022-12-30';
        const result = conditionalNextEdit(value, defaultValue, next);
        expect(result).toBe('2022-12-01');
    });
    it('Debería retornar el valor ingresado si la fecha es posterior a hoy y al valor next', () => {
        const defaultValue = '2022-12-01';
        const value = '2022-12-06';
        const next = '2022-11-30';
        const result = conditionalNextEdit(value, defaultValue, next);
        expect(result).toBe('2022-12-06');
    });
});

describe('conditionalLast', () => {
    it('Debería retornar null si la fecha es posterior a hoy y anteror al valor last como primera condición', () => {
        const updateState = jest.fn();
        const name = 'name';
        const value = '2023-01-01';
        const last = '2022-11-25';
        const result = conditionalLast(updateState, name, value, last);
        expect(result).toBeNull();
    });
    it('Debería retornar null si la fecha es posterior a hoy y anteror al valor last', () => {
        const updateState = jest.fn();
        const name = 'name';
        const value = '2022-11-30';
        const last = '2022-11-25';
        const result = conditionalLast(updateState, name, value, last);
        expect(result).toBeNull();
    });
    it('Debería retornar el valor ingresado si la fecha es posterior a hoy y anterior al valor last', () => {
        const updateState = jest.fn();
        const name = 'name';
        const value = '2022-11-25';
        const last = '2022-11-30';
        const result = conditionalLast(updateState, name, value, last);
        expect(result).toBe('2022-11-25');
    });
});

describe('conditionalLastEdit', () => {
    it('Debería retornar el valor default si la fecha es posterior a hoy y anteror al valor last como primera condición', () => {
        const defaultValue = '2022-12-01';
        const value = '2023-01-01';
        const last = '2022-11-25';
        const result = conditionalLastEdit(value, defaultValue, last);
        expect(result).toBe('2022-12-01');
    });
    it('Debería retornar el valor default si la fecha es posterior a hoy y anteror al valor last', () => {
        const defaultValue = '2022-12-01';
        const value = '2022-11-30';
        const last = '2022-11-25';
        const result = conditionalLastEdit(value, defaultValue, last);
        expect(result).toBe('2022-12-01');
    });
    it('Debería retornar el valor ingresado si la fecha es posterior a hoy y anterior al valor last', () => {
        const defaultValue = '2022-12-01';
        const value = '2022-11-25';
        const last = '2022-11-30';
        const result = conditionalLastEdit(value, defaultValue, last);
        expect(result).toBe('2022-11-25');
    });
});
