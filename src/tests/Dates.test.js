import {
    Approximate,
    ApproximateRepro,
    DateInactive,
} from '../components/use/0-GeneralComp/0-StaticData/Dates/Dates';

describe('Approximate', () => {
    it('Debería retornar un objeto con las fechas pronosticados', () => {
        const days = Approximate('2020-1-1');
        expect(typeof days).toBe('object');
    });
    it('Debería retornar un objeto con los dias pronosticados', () => {
        const days = ApproximateRepro('2020-1-1');
        expect(typeof days).toBe('object');
    });
});

describe('ApproximateRepro', () => {
    it('Debería retornar las fechas del ciclo de vida de un conejo', () => {
        const days = Approximate('2020-1-1');
        expect(days.raised).toBe('2020-3-2');
        expect(days.fattening).toBe('2020-4-1');
        expect(days.ceba).toBe('2020-5-2');
    });
    it('Debería retornar las fechas del ciclo reproductivo de un conejo', () => {
        const days = ApproximateRepro('2020-1-1');
        expect(days.palpation).toBe('2020-1-11');
        expect(days.prepartum).toBe('2020-1-29');
        expect(days.birth).toBe('2020-1-31');
        expect(days.weaning).toBe('2020-3-1');
    });
});

describe('DateInactive', () => {
    it('Debería retornar true si la fecha es mayor a 6 meses', () => {
        const dia = Date.parse('2021-1-01');
        const date = DateInactive(dia);
        expect(date).toBe(true);
    });
    it('Debería retornar false si la fecha es menor a 6 meses', () => {
        const dia = Date.parse('2022-12-4');
        const date = DateInactive(dia);
        expect(date).toBe(false);
    });
});
