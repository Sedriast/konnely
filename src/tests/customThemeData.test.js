import { themesData } from '../components/use/0-GeneralComp/0-StaticData/customThemeData';

describe('Custom Theme Data', () => {
    it('Debría devolver el númerop de temas', () => {
        expect(themesData.length).toBe(3);
    });
    it('Debería devolver el nombre del primer tema', () => {
        expect(themesData[0].name).toBe('Cary');
    });
    it('Debería devolver el nombre del segundo tema', () => {
        expect(themesData[1].name).toBe('Darpa');
    });
    it('Debería devolver el nombre del tercer tema', () => {
        expect(themesData[2].name).toBe('Darpa Wine');
    });
    it('Deberia devolver las propiedades de los temas', () => {
        expect(themesData[0]).toHaveProperty('name');
        expect(themesData[0]).toHaveProperty('theme');
        expect(themesData[0]).toHaveProperty('themeId');
        expect(themesData[1]).toHaveProperty('name');
        expect(themesData[1]).toHaveProperty('theme');
        expect(themesData[1]).toHaveProperty('themeId');
        expect(themesData[2]).toHaveProperty('name');
        expect(themesData[2]).toHaveProperty('theme');
        expect(themesData[2]).toHaveProperty('themeId');
    });
});
