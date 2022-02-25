import style from '../css/User.module.css';

export function UserView(props){

    const name = props.name;
    const id = props.id;
    const info = props.info;
    const img_ = props.img_;


    return(
        <>
            <div className={style.userViewPanel}>
            <img src={style.img_} href='' alt='' />
                <h1 className={style.userName}>Camila Arevalo</h1>
                <p className={style.userId}>320472</p>
                <p className={style.userInfo}>Administrador</p>
            </div>
        </>
    );
}