import swal from "sweetalert";
import st from "./css/Inputs.module.css";
import { useRef, useState, useEffect } from "react";
import { ModalCamera } from "../../Form/ModalCamera";
import { usePreview } from "../../../../context/AuthContext";

export function Inputs(props) {
    const { imagen64, imagenPreview } = usePreview();
    const fileInputRef = useRef();
    const [image, setImage] = useState(false);
    const [preview, setPreview] = useState();

    const action = (e) => {
        if (props.type_ === "file") {
            const file = e.target.files[0];
            if (file && file.type.substr(0, 5) === "image") {
                setImage(file);
                props.HaveImage(file);
            } else {
                setImage(null);
            }
        } else if (props.type_ !== "image") {
            props.handleChange(e);
        } else if (props.type_ !== "modal") {
            console.log("Hola");
            ModalCamera("openModal");
        }
    };

    // Configuracion para input tipo imagen
    useEffect(() => {
        if (imagen64 && props.type_ === "file") {
            setPreview(imagen64);
        } else if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [image, imagen64]);

    const changeImage = () => {
        swal({
            title: "¿Desea eliminar la imagen?",
            icon: "warning",
            buttons: ["No", "Si"],
        }).then((respuesta) => {
            if (respuesta) {
                setPreview(null);
                imagenPreview(null);
                setImage(null);
                props.HaveImage(null);
            }
        });
    };

    return (
        <>
            <div className={st.container}>
                <h1 className={st.label}>{props.leyend}</h1>
                {preview ? (
                    <img
                        className={st.inp}
                        src={preview}
                        style={{ objectFit: "cover" }}
                        onClick={changeImage}
                        alt=""
                    />
                ) : (
                    <input
                        required="True"
                        className={st.inp}
                        type={props.type_}
                        name={props.name_}
                        ref={fileInputRef}
                        placeholder={props.placeholder_}
                        accept="image/*"
                        onChange={action}
                        onFocus={props.focus_}
                    />
                )}
            </div>
        </>
    );
}
