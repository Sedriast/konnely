import swal from 'sweetalert';
import st from './styles/Inputs.module.css';

import { useRef, useState, useEffect } from 'react';

export function Inputs({
    name,
    type,
    placeholder,
    handleChange,
    preeview,
    HaveImage,
    leyend,
    value,
    min,
    focus,
    max,
    inputmode,
    step,
}) {
    const fileInputRef = useRef();
    const [image, setImage] = useState(false);
    const [preview, setPreview] = useState(null);

    const action = (e) => {
        if (type === 'file') {
            const file = e.target.files[0];
            if (file && file.type.substring(0, 5) === 'image') {
                setImage(file);
            } else {
                setImage(null);
            }
        } else if (type !== 'image') {
            handleChange(e);
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
        } else if (preeview !== null) {
            setPreview(preeview);
        } else {
            setPreview(null);
        }
        if (type === 'file') {
            if (preview) {
                HaveImage(preview);
            }
        }
    }, [image, preview, preeview, HaveImage, type]);

    const changeImage = () => {
        swal({
            title: '¿Desea eliminar la imagen?',
            icon: 'warning',
            buttons: ['No', 'Si'],
        }).then((respuesta) => {
            if (respuesta) {
                setImage(null);
                setPreview(null);
                HaveImage(null);
            }
        });
    };

    return (
        <>
            <div className={st.container}>
                <h1 className={st.label}>{leyend}</h1>
                {preview ? (
                    <img
                        className={st.inp}
                        src={preview}
                        style={{ objectFit: 'cover' }}
                        onClick={changeImage}
                        alt=''
                    />
                ) : (
                    <input
                        className={st.inp}
                        defaultValue={value}
                        required='True'
                        type={type}
                        name={name}
                        ref={fileInputRef}
                        placeholder={placeholder}
                        accept='image/*'
                        onChange={action}
                        onFocus={focus}
                        min={min}
                        max={max}
                        step={step}
                        inputMode={inputmode}
                        pattern='^[0-9]+'
                    />
                )}
            </div>
        </>
    );
}
