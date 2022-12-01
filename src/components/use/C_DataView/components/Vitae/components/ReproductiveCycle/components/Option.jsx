import st from '../ReproductiveCycle.module.css';

import { Buttons } from '../../../../../../0-GeneralComp/1-Buttons/Buttons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Cards } from './Cards/Cards';

import { Loading } from '../../../../../../0-GeneralComp/1-Loading/Loading';

export function Option({ op, rep }) {
    switch (op) {
        case false:
            return (
                <div className={st.act}>
                    <Buttons route='/NewRepro' label='Nueva camada' direction='bottom' btnIconText={faCirclePlus} />
                    <br />
                    Nueva camada
                </div>
            );
        case true:
            return rep !== '[]' ? (
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
            );
        default:
            return <>Def</>;
    }
}
