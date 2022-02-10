import style from './css/views.module.css';

export function ListView(){

    const init = {
        value:"Macho"
    }

    return(
        <div className={style.viewPanel}>
            <input type="submit" name='check' value={init}/>
        </div>
    );
}