import st from './Tuto.module.css';

import copy from "copy-to-clipboard";  

import u from '../../../img/Tuto/1.png';
import d from '../../../img/Tuto/2.png';
import t from '../../../img/Tuto/3.png';
import c from '../../../img/Tuto/4.png';

import { useState } from 'react';
import { newTreats } from '../0-StaticData/options';
import { LeftBottomMenu } from '../1-PanelButtons/LeftBottomMenu/LeftBottomMenu';

export function Tuto() {
    const [copyText, setCopyText] = useState('');
  
    const handleCopyText = (e) => {
       setCopyText(e.target.value);
    } 
    
    const copyToClipboard = () => {
       copy(copyText);
       alert(`You have copied "${copyText}"`);
    }
    return (
        <div className={st.back}>
            <LeftBottomMenu
				backCancel={newTreats}
				click={() => {
					window.history.back();
				}}
			/>
            <div className={st.cont1}>
                <ol>
                    <div className={st.paso}>
                        <img src={u} alt="" />
                        <div className={st.ol}>
                            <li>  
                                Como primer paso, se debe abrir el correo institucional.
                            </li>
                            <br />
                            <li> 
                                Una vez abierto, debemos buscar la esquina superior derecha 
                                del correo.
                            </li>
                            <br />
                            <li>
                                Aquí buscaremos el icono de configuración (⚙️), como se muestra en la imagen
                            </li>
                        </div>
                    </div>
                    <div className={st.paso_}>
                        <div className={st.ol_}>
                            <li>  
                                Al dar clic en el icono de configuración, se desplegará el menu de preferencias.
                            </li>
                            <br />
                            <li>
                                Y, en el debemos dar clic en el texto: ‘Ver toda la configuración de Outlook’. 
                                Generalmente este texto está ubicado al final del menú. 
                            </li>
                        </div>
                        <img src={d} alt="" />
                    </div>
                    <div className={st.paso}>
                        <img className={st.t} src={t} alt="" />
                        <div className={st.ol}>
                            <li>  
                            Al dar clic en el texto descrito, veremos
                            un menú con opciones primarias y secundarias.
                            </li>
                            <br />
                            <li> 
                                Dentro del primer menú buscaremos la opción de ‘Correo’
                            </li>
                            <br />
                            <li>
                                Y dentro de este menú, buscaremos la opción de ‘Correo electronico no deseado’ 
                            </li>
                        </div>
                    </div>           
                     <div className={st.paso_}>
                        <div className={st.ol_}>
                            <li>  
                                Y aquí, buscaremos en la parte inferior el apartado que dice ‘Remitentes y dominios seguros’
                            </li>
                            <li>  
                                Aquí, debemos dar clic en ‘Agregar’, donde se copiará y pegará la siguiente dirección.
                            </li>
                        </div>
                        <img className={st.c} src={c} alt="" />
                    </div>
                    <div className={st.lin}>
                        <p id="p" className={st.p}>Konnely@konnely-67d6a.firebaseapp.com</p>
                        {/* <button onclick={copyToClipboard}>📎</button> */}
                    </div>
                    <div className={st.paso}></div>
                    <div></div>
                </ol>
            </div>
        </div>
    )
}