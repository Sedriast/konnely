import st from './Cards.module.css';

import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Buttons } from '../../../../../../../0-GeneralComp/1-Buttons/Buttons';

import { Ref } from './components/Ref';
import swal from 'sweetalert';
import { RemovalCamada } from '../../../../../../../../firebase/funtions/AddInformation';
import { recuperarCamada } from '../../../../../../../0-GeneralComp/0-StaticData/dataProv';
import { useNavigate } from 'react-router-dom';

export function Cards({ stages, item }) {
    const navigate = useNavigate();
    const cm = (
        <div className={st.container}>
            <div className={st.btnEdit}>
                <div>
                    <Buttons
                        route='/formEditRepro'
                        label='Editar'
                        direction='bottom'
                        btnIconText={faPenToSquare}
                        btnClick={() => {
                            recuperarCamada(item.uid);
                        }}
                    />
                </div>
                <div>
                    <Buttons
                        route='#'
                        label='Borrar'
                        direction='bottom'
                        btnIconText={faTrash}
                        btnClick={() => {
                            swal({
                                title: '¿Esta seguro que desea eliminar este registro?',
                                text: 'Una vez eliminado no podrá recuperarlo',
                                dangerMode: true,
                                icon: 'warning',
                                buttons: ['No', 'Si'],
                            }).then(async (respuesta) => {
                                if (respuesta) {
                                    await RemovalCamada({ uid: item.uid, uidMother: item.uidMother }).then(() => {
                                        swal({
                                            title: 'El registro ha sido eliminado correctamente, para visualizar los cambios debe ingresar nuevamente a la hoja de vida de este conejo',
                                            icon: 'success',
                                            button: 'Aceptar',
                                        }).then(async () => {
                                            navigate('/vitaeslist');
                                        });
                                    });
                                }
                            });
                        }}
                    />
                </div>
            </div>
            <br />

            <div className={st.panelInfo}>
                <div className={st.pi}>
                    {stages?.map((element, index) => {
                        return (
                            <div className={st.panelcontainer}>
                                <table className={st.tableOut}>
                                    <thead>
                                        <tr>
                                            <th>{element.title}</th>
                                        </tr>
                                    </thead>
                                    <Ref key={index} stage={element} />
                                </table>
                            </div>
                        );
                    })}
                </div>
            </div>
            <br />
            <br />
        </div>
    );
    return cm;
}
