import { recuperar, basicData } from '../components/use/0-GeneralComp/0-StaticData/dataProv';

describe('dataProv', () => {
    it('should export a function', () => {
        expect(typeof recuperar).toBe('function');
    });
    it('should export an object', () => {
        expect(typeof basicData).toBe('object');
    });
    it('should export an object with id and info properties', () => {
        expect(basicData).toHaveProperty('id');
        expect(basicData).toHaveProperty('info');
    });
    it('should export an object with id and info properties', () => {
        const update = jest.fn(() => {
            recuperar(15, 'Prueba');
        });
        update();
        expect(basicData.id).toBe(15);
        expect(basicData.info).toBe('Prueba');
    });
    it('should export an object with id and info properties', () => {
        expect(basicData.id).toBeNull();
        expect(basicData.info).toBe({});
    });
});
