import st from '../ReproductiveCycle.module.css';

import { Buttons } from '../../../../../../0-GeneralComp/1-Buttons/Buttons';
import { faCirclePlus, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { Cards } from './Cards/Cards';

import { Loading } from '../../../../../../0-GeneralComp/1-Loading/Loading';
import { basicData } from '../../../../../../0-GeneralComp/0-StaticData/dataProv';

export function Option({ op, rep }) {
    switch (op) {
        case false:
            return (
                <>
                    {basicData?.info?.estado !== 'Inactivo' ? (
                        <>
                            <div className={st.act}>
                                <Buttons
                                    route='/NewRepro'
                                    label='Nueva camada'
                                    direction='bottom'
                                    btnIconText={faCirclePlus}
                                />
                                <br />
                                Nueva camada
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={st.act}>
                                <Buttons
                                    route='/litterList'
                                    label='Lista de camadas'
                                    direction='bottom'
                                    btnIconText={faRectangleList}
                                />
                                <br />
                                Lista de camadas
                            </div>
                        </>
                    )}
                </>
            );
        case true:
            return (
                <>
                    {basicData?.info?.estado !== 'Inactivo' ? (
                        <>
                            {rep !== '[]' ? (
                                rep?.map(
                                    (item, index) =>
                                        item.state === true && (
                                            <>
                                                <div className={st.con}>
                                                    <Cards
                                                        key={index}
                                                        id={item.id}
                                                        editor={item.displayNameEditors}
                                                        stages={item.stages}
                                                        item={item}
                                                    />
                                                </div>
                                            </>
                                        )
                                )
                            ) : (
                                <>
                                    <Loading />
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <div className={st.act}>
                                <Buttons
                                    route='/litterList'
                                    label='Lista de camadas'
                                    direction='bottom'
                                    btnIconText={faRectangleList}
                                />
                                <br />
                                Lista de camadas
                            </div>
                        </>
                    )}
                </>
            );

        default:
            return <>Def</>;
    }
}
