import swal from "sweetalert";
import st from "./css/Inputs.module.css";
import { useRef, useState, useEffect } from "react";

export function Inputs(props) {
    const fileInputRef = useRef();
    const preview_ = props.Preview;
    const [image, setImage] = useState(false);
    const [preview, setPreview] = useState(false);

    const action = (e) => {
        if (props.type_ === "file") {
            const file = e.target.files[0];
            if (file && file.type.substr(0, 5) === "image") {
                setImage(file);
            } else {
                setImage(null);
            }
        } else if (props.type_ !== "image") {
            props.handleChange(e);
        }
    };

    // Configuracion para input tipo imagen
    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(image);
        } else if (props.Preview !== null) {
            setPreview(preview_);
        } else {
            setPreview(null);
        }
    }, [image, props.Preview]);

    const changeImage = () => {
        swal({
            title: "¿Desea eliminar la imagen?",
            icon: "warning",
            buttons: ["No", "Si"],
        }).then((respuesta) => {
            if (respuesta) {
                setPreview(null);
                props.HaveImage(null);
                setImage(null);
            }
        });
    };

    if (preview) {
        props.HaveImage(preview);
    }

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
