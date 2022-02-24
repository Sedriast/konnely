import style from '../css/DataView.module.css'; 
import { Paragraphs } from '../helpers/Paragraphs';

export function DataView(props){

    const img_ = props.img_;

    return(
        <>
            <div className={style.subPanelGradient}>
                <div className={style.data}>
                    <img src={img_} href='' alt='' />
                    <Paragraphs panel={style.panelPar} />
                </div>
            </div>
        </>
    );
}