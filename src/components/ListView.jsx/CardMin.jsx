import style from '../css/listViews.module.css';

export function CardMin(props){

    const url = props.url;

    return(
        <div className={style.cardPanel} >
            <img className={style.imgView} src={url} />
        </div>
    );
}