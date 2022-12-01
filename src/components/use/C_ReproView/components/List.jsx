import st from '../ReproView.module.css';

import { Cards } from '../../C_DataView/components/Vitae/components/ReproductiveCycle/components/Cards/Cards';
import { basicData } from '../../0-GeneralComp/0-StaticData/dataProv';

export function List({ reproductiveCycles }) {
    return (
        <>
            {reproductiveCycles?.length !== 0 ? (
                basicData?.info?.estado !== 'Inactivo' ? (
                    <>
                        {reproductiveCycles?.map(
                            (item, index) =>
                                reproductiveCycles[index]?.state === false && (
                                    <Cards key={index} stages={item.stages} item={item} />
                                )
                        )}
                    </>
                ) : (
                    <>
                        {reproductiveCycles?.map((item, index) => (
                            <Cards key={index} stages={item.stages} item={item} />
                        ))}
                    </>
                )
            ) : (
                <>
                    <div className={st.des}>No existen registros</div>
                </>
            )}
        </>
    );
}
