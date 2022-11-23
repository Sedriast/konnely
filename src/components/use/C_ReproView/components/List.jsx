import st from '../ReproView.module.css';

import { Cards } from '../../C_DataView/components/Vitae/components/ReproductiveCycle/components/Cards/Cards';

export function List({ reproductiveCycles }) {
    return (
        <>
            {reproductiveCycles?.length !== 0 ? (
                <>
                    {reproductiveCycles?.map(
                        (item, index) =>
                            reproductiveCycles[index]?.state === false && (
                                <Cards
                                    key={index}
                                    id={item.id}
                                    editor={item.displayNameEditors}
                                    stages={item.stages}
                                    uidMother={item.uidMother}
                                    item={item}
                                />
                            )
                    )}
                </>
            ) : (
                <>
                    <div className={st.des}>No existen registros</div>
                </>
            )}
        </>
    );
}
