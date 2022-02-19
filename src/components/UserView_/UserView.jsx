import style from '../css/User.module.css';

export function UserView(props){

    const name = props.name;
    const id = props.id;
    const info = props.info;
    const profilePhoto = props.profilePhoto;


    return(
        <>
            <div className={style.userViewPanel}>
                <img className={style.userImageProfile} src={profilePhoto} href='' />
                <h1 className={style.userName}>{name}</h1>
                <p className={style.userId}>{id}</p>
                <p className={style.userInfo}>{info}</p>
            </div>
        </>
    );
}