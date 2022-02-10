import style from '../css/listViews.module.css';
import { CardMin } from './CardMin';

export function ListViews(){
    return(
        <div className={style.subPanel}>
            <CardMin />
		</div>
    );
}