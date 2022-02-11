import style from '../css/ListViews.module.css';
import { CardMin } from './CardMin';

export function ListViews(props){
    return(
        <div className={style.subPanel}>
            <CardMin url='https://drive.google.com/uc?export=download&id=10dKfWHgApJ5ElbXCaOyrdguN8sac2jpA' rabitData='Esto es una prueba bien pitera :V'/>
            <CardMin url='https://drive.google.com/uc?export=download&id=1HsBxcwNJEWm_4JcGQ2nFVsrnvcBTqtQD'/>
            <CardMin />
            <CardMin />
            <CardMin />
            <CardMin />
            <CardMin />
            <CardMin />
            <CardMin />
            <CardMin />
            <CardMin />
            <CardMin />
		</div>
    );
}