export const litterPrueba = [
    {
        displayNameEditors: [],
        uidEditors: [],
        state: true,
        uidMother: null,
        stages: [
            {
                title: 'Monta',
                state: false,
                date: null,
                male: [],
            },
            {
                title: 'Palpación',
                state: false,
                date: null,
                approximateDate: null,
            },
            {
                title: 'Preparto',
                state: false,
                date: null,
                approximateDate: null,
            },
            {
                title: 'Parto',
                state: false,
                lives: null,
                deaths: null,
                total: null,
                homogen: null,
                date: null,
                stageWeigth: null,
                approximateDate: null,
            },
            {
                title: 'Destete',
                state: false,
                approximateDate: null,
                date: null,
                WeanedPups: null,
                LitterWeight: null,
            },
        ],
    },
];

//"jumps" es el length del array donde de registran los conejos que llegó a tener la hembra durante la monta
//"W" hace referencia a peso en ingles "Weight camada" "Weight average""
export const dataMonta = [
    { date: 1, female: 2, male: 3, jumps: 0, dateAproxParto: 0 },
    { date: 1, female: 2, male: 3, jumps: 0, dateAproxParto: 0 },
    { date: 1, female: 2, male: 3, jumps: 0, dateAproxParto: 0 },
];
export const dataPalpa = [
    { first: true, second: false },
    { first: true, second: true },
    { first: true, second: false },
];
export const dataParto = [
    { date: 1, V: 2, M: 3, Wcamada: 0, homog: 0, total: 0 },
    { date: 1, V: 2, M: 3, Wcamada: 0, homog: 0, total: 0 },
    { date: 1, V: 2, M: 3, Wcamada: 0, homog: 0, total: 0 },
];
export const dataDestete = [
    { date: 1, females: 2, males: 3, total: 0, Waverage: 0 },
    { date: 1, females: 2, males: 3, total: 0, Waverage: 0 },
    { date: 1, females: 2, males: 3, total: 0, Waverage: 0 },
];
