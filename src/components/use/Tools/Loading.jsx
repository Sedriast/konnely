import style_Loa from '../../css/Tools/Loading.module.css';
import lof from '../../css/Tools/lo.gif'

export function Loading(props){
    return(
        <>
            <div className={props.clsName}>
                <div className={style_Loa.panel_}>
                    <img src={lof} href='' alt='' />
                </div>
            </div>
        </>
    );
}