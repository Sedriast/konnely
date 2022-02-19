import style from '../css/User.module.css';

export function UserView(props){

    const name = props.name;
    const id = props.id;
    const profilePhoto = props.profilePhoto;


    return(
        <>
            <div className={style.userViewPanel}>
                <img className={style.userImageProfile} src={profilePhoto} href=''></img>
                <h1 className={style.userName}></h1>
                <p className={style.userInfo}></p>
            </div>
        </>
    );
}