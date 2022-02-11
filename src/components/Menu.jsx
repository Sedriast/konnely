import style from './css/Menu.module.css';

export function Menu(){
    return(
        <>
            <input type="checkbox" id="btnMenu" />
            <div className="container-menu">
                <div className="cont-menu">
                    <nav>

                    </nav>
                    <label for="btn-menu">✖️</label>
                </div>
            </div>
        </>
    );
}