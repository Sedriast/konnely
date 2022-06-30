import Webcam from "react-webcam";
import st from "./css/Form.module.css";
import sendICO from "../../img/send.png";
import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { Modal } from "../Tools/Modals/Modal";
import { Inputs } from "../Tools/Inputs/Inputs";
import { Lists } from "../Tools/List/Lists.jsx";
import { Buttons } from "../Tools/Buttons/Buttons";
import { useModal } from "../Tools/Modals/useModal";
import { SearchAll } from "../../firebase/funtions/SearchAll";
import { addImageAndInfo } from "../../firebase/funtions/AddInformation";

export function Form() {
    const genero = ["Genero", "Hembra", "Macho"];
    const concepcion = ["Concepción", "Monta natural", "Inseminación artificial"];
    const [reason, setReason] = useState();
    const [image, setImage] = useState(null);
    const [values, setValues] = useState({});
    const [image_, setImage_] = useState(null);
    const [isOpenModal, openModal, closeModal] = useModal(false);

    function handleChange(e) {
        if (e.target.name === "motivo") {
            setReason(e.target.value);
            const { name, value } = e.target;
            setValues({ ...values, [name]: value });
        } else {
            const { name, value } = e.target;
            setValues({ ...values, [name]: value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addImageAndInfo({ ...values, image: image });
    };

    return (
        <>
            <div className={st.container}>
                <div className={st.panelImage}>
                    <Inputs
                        type_="file"
                        HaveImage={(e) => {
                            setImage(e);
                        }}
                        Preview={image_}
                    />
                    <Modal isOpen={isOpenModal} closeModal={closeModal}>
                        {isOpenModal && (
                            <>
                                <Webcam
                                    audio={false}
                                    height={250}
                                    width={330}
                                    screenshotFormat="image/jpeg">
                                    {({ getScreenshot }) => (
                                        <button
                                            onClick={() => {
                                                const imageSrc = getScreenshot();
                                                setImage_(imageSrc);
                                            }}>
                                            Capturar foto
                                        </button>
                                    )}
                                </Webcam>
                                <img src={image_} alt=""></img>
                            </>
                        )}
                    </Modal>
                </div>
                <div className={st.btnC}>
                    <Buttons text_="Camara" click_={openModal} link_="#" />
                </div>
                <div className={st.panel}>
                    <Inputs
                        leyend="Identificador"
                        name_="id"
                        placeholder_="Ingrese el identificador"
                        type_="text"
                        handleChange={handleChange}
                    />

                    <Lists
                        leyend="Genero"
                        name_="genero"
                        listar={genero}
                        handleChange={handleChange}
                    />

                    <Inputs
                        leyend="Peso"
                        name_="peso"
                        placeholder_="Ingrese el peso"
                        type_="text"
                        handleChange={handleChange}
                    />

                    <Lists
                        leyend="Raza"
                        name_="raza"
                        listar={SearchAll("raza").props.children}
                        handleChange={handleChange}
                    />

                    <Lists
                        leyend="Concepción"
                        name_="concepcion"
                        listar={concepcion}
                        handleChange={handleChange}
                    />
                    <Lists
                        leyend="Banda Asosiada"
                        name_="grupo"
                        listar={SearchAll("grupo").props.children}
                        handleChange={handleChange}
                    />

                    <Inputs
                        leyend="Fecha de nacimiento"
                        name_="nacimiento"
                        type_="date"
                        handleChange={handleChange}
                    />

                    <Inputs
                        leyend="Fecha de destete"
                        name_="destete"
                        type_="date"
                        handleChange={handleChange}
                    />

                    <Lists
                        leyend="Motivo de ingreso"
                        name_="motivo"
                        listar={SearchAll("motivo").props.children}
                        handleChange={handleChange}
                    />
                    {reason && (
                        <Dropdown motivo={reason} handleChange={handleChange} />
                    )}
                </div>
                <div className={st.submit}>
                    <Buttons click_={handleSubmit} link_="/list" icon_={sendICO} />
                </div>
            </div>
        </>
    );
}
