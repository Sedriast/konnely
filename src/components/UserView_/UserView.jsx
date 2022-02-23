import style from '../css/User.module.css';

export function UserView(props){

    const name = props.name;
    const id = props.id;
    const info = props.info;


    return(
        <>
            <div className={style.userViewPanel}>
                
                <h1 className={style.userName}>{name}</h1>
                <p className={style.userId}>{id}</p>
                <p className={style.userInfo}>{info}</p>
            </div>
        </>
    );
}