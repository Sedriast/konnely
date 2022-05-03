import style_I from "../../css/Tools/Inputs.module.css";
import { useRef, useState, useEffect } from "react";
import swal from "sweetalert";

export function Inputs(props) {
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const fileInputRef = useRef();

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
        } else {
            setPreview(null);
        }
    }, [image]);

    const changeImage = () => {
        swal({
            title: "¿Desea eliminar la imagen?",
            icon: "warning",
            buttons: ["No", "Si"],
        }).then((respuesta) => {
            if (respuesta) {
                setImage(null);
            }
        });
    };

    return (
        <>
            <div className={props.clsName}>
                <div className={style_I.panel_}>
                    <h1 className={style_I.label}>{props.leyend}</h1>

                    <div className={style_I.br_} />

                    {preview ? (
                        <img
                            className={style_I.inp}
                            src={preview}
                            style={{ objectFit: "cover" }}
                            onClick={changeImage}
                            alt=""
                        />
                    ) : (
                        <input
                            required="True"
                            className={style_I.inp}
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
            </div>
        </>
    );
}
