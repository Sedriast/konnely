import { ValidationMonth } from '../components/use/0-GeneralComp/0-Scripts/ValidationMonth';

describe('ValidationMonth', () => {
    it('should return a function', () => {
        expect(typeof ValidationMonth).toBe('function');
    });
    test('Dedería retornar enero o en', () => {
        expect(ValidationMonth('0').props.children).toBe('En');
    });
    test('Dedería retornar febrero o Febr', () => {
        expect(ValidationMonth('1').props.children).toBe('Febr');
    });
    test('Dedería retornar marzo o Mzo', () => {
        expect(ValidationMonth('2').props.children).toBe('Mzo');
    });
    test('Dedería retornar abril o Abr', () => {
        expect(ValidationMonth('3').props.children).toBe('Abr');
    });
    test('Dedería retornar mayo o May', () => {
        expect(ValidationMonth('4').props.children).toBe('Myo');
    });
    test('Dedería retornar junio o Jun', () => {
        expect(ValidationMonth('5').props.children).toBe('Jun');
    });
    test('Dedería retornar julio o Jul', () => {
        expect(ValidationMonth('6').props.children).toBe('Jul');
    });
    test('Dedería retornar agosto o Agto', () => {
        expect(ValidationMonth('7').props.children).toBe('Agto');
    });
    test('Dedería retornar septiembre o Sept', () => {
        expect(ValidationMonth('8').props.children).toBe('Sept');
    });
    test('Dedería retornar octubre o Oct', () => {
        expect(ValidationMonth('9').props.children).toBe('Oct');
    });
    test('Dedería retornar noviembre o Nov', () => {
        expect(ValidationMonth('10').props.children).toBe('Nov');
    });
    test('Dedería retornar diciembre o Dic', () => {
        expect(ValidationMonth('11').props.children).toBe('Dic');
    });
    test('Dedería retornar Sin Datos', () => {
        expect(ValidationMonth('12').props.children).toBe('Sin Datos');
    });
});
