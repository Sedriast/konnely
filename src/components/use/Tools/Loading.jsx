import style_Loa from '../../css/Tools/Loading.module.css';

export function Loading(props){
    return(
        <>
            <div className={props.clsName}>
                <div className={style_Loa.panel_}>
                    <img src={props.src_} href='' alt='' />
                </div>
            </div>
        </>
    );
}