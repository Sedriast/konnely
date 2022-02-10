import style from '../css/listViews.module.css';
import { CardMin } from './CardMin';

export function ListViews(){
    return(
        <div className={style.subPanel}>
            <CardMin url='https://drive.google.com/uc?export=download&id=10dKfWHgApJ5ElbXCaOyrdguN8sac2jpA'/>
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