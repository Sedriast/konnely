import style from './css/input.module.css';

export function InputCheck(props){

    const init = props.init;

    return(
        <div className={style.chaeckPanel}>
            <input type="checkbox" name='check' value={init}/>
        </div>
    );
}