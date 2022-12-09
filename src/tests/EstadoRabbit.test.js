import { estadoRabbit } from '../components/use/0-GeneralComp/0-Scripts/EstadoRabbit';

describe('Establece el estado de un conejo o coneja', () => {
    test('Debería retornar Inactivo', () => {
        expect(estadoRabbit({ estado: 'Inactivo' })).toBe('Inactivo');
    });
    test('Debería retornar Camada Activa', () => {
        expect(estadoRabbit({ reproductivecycle: true })).toBe('Camada Activa');
    });
    test('Debería retornar Se puede reproducir', () => {
        expect(estadoRabbit({ lifecycle: [{}, {}, {}, { date: true }], reproductivecycle: false })).toBe(
            'Se puede reproducir'
        );
    });
    test('Debería retornar En Engorde', () => {
        expect(estadoRabbit({ lifecycle: [{}, {}, { date: true }], reproductivecycle: false })).toBe('En Engorde');
    });
    test('Debería retornar En Levante', () => {
        expect(estadoRabbit({ lifecycle: [{}, {}] })).toBe('En Levante');
    });
});
