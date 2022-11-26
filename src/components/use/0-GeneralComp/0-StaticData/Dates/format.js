import { QueriesSimple_ } from '../../../../firebase/funtions/GetInformation';
import { basicData } from '../dataProv';
import { ApproximateRepro } from './Dates';

export const formatCycleReproductive = (e, format, user) => {
    const rabbit = QueriesSimple_({ coleccion: 'rabbits', parametro: 'id', busqueda: basicData.uid }).props
        .children[0];
    format.uidMother = rabbit.uid;

    if (!format.displayNameEditors.includes(user.displayName)) {
        format.displayNameEditors.push(user.displayName);
    }
    if (!format.uidEditors.includes(user.uid)) {
        format.uidEditors.push(user.uid);
    }
    if (e.target.DateInitial.value) {
        format.stages[0].state = true;
        format.stages[0].male = e.target.Macho.value;
        format.stages[0].idCamada = e.target.idCamada.value;
        format.stages[0].date = e.target.DateInitial.value;
    }
    if (e.target.DatePalpacion.value && e.target.DateInitial.value) {
        format.stages[1].state = true;
        format.stages[1].date = e.target.DatePalpacion.value;
    }
    if (e.target.DatePreparto.value && e.target.DatePalpacion.value) {
        format.stages[2].state = true;
        format.stages[2].date = e.target.DatePreparto.value;
    }
    if (e.target.DateParto.value && e.target.DatePreparto.value) {
        format.stages[3].state = true;
        format.stages[3].date = e.target.DateParto.value;
        format.stages[3].lives = e.target.lives.value;
        format.stages[3].deaths = e.target.deaths.value;
        format.stages[3].total = e.target.total.value;
        format.stages[3].homogen = e.target.homogen.value;
    }
    if (e.target.DateDestete.value && e.target.DateParto.value) {
        format.state = false;
        format.stages[4].state = true;
        format.stages[4].date = e.target.DateDestete.value;
        format.stages[4].WeanedPups = e.target.WeanedPups.value;
        format.stages[4].MaleHatchlings = e.target.MaleHatchlings.value;
        format.stages[4].FemaleHatchlings = e.target.FemaleHatchlings.value;
        format.stages[4].LitterWeight = e.target.LitterWeight.value;
    }
    format.stages[1].approximateDate = ApproximateRepro(e.target.DateInitial.value).palpation;
    format.stages[2].approximateDate = ApproximateRepro(e.target.DateInitial.value).prepartum;
    format.stages[3].approximateDate = ApproximateRepro(e.target.DateInitial.value).birth;
    format.stages[4].approximateDate = ApproximateRepro(e.target.DateInitial.value).weaning;
    return format;
};
