import { Stadics } from '../components/use/0-GeneralComp/0-Scripts/FormatStadics';

describe('Stadics', () => {
    it('should return a function', () => {
        expect(typeof Stadics).toBe('function');
    });
    test('Si concepción o la imagen es undefined debería retornar verdadero o true', () => {
        expect(
            Stadics([
                { stages: [{}, {}, {}, { state: true, date: '2022-12-02', lives: 5, homogen: 6, deaths: 7 }] },
            ])
        ).toEqual({ Deaths: [7], Homogen: [6], Labels: ['Dic 2022'], Lives: [5] });
    });
});
