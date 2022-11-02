import swal from 'sweetalert';
import st from './Inputs.module.css';

import { useRef, useState, useEffect } from 'react';

export function Inputs({
	name,
	type,
	handleChange,
	preeview,
	HaveImage,
	leyend,
	value,
	min,
	max,
	inputmode,
	step,
	pattern,
}) {
	const fileInputRef = useRef();
	const [image, setImage] = useState(false);
	const [preview, setPreview] = useState(null);
	const [cnsST, setCNSST] = useState(true);

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
		value ? setCNSST(false) : setCNSST(true);
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
	}, [image, preview, preeview, HaveImage, type, value]);

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
				<h1 className={cnsST ? st.lblInac : st.lblAc}>{leyend}</h1>
				{preview ? (
					<img
						className={st.inp}
						src={preview}
						style={{ objectFit: 'cover' }}
						onClick={changeImage}
						alt=""
					/>
				) : (
					<input
						className={st.inp}
						accept="image/*"
						autoComplete="off"
						id={name}
						defaultValue={value}
						required="True"
						type={type}
						name={name}
						ref={fileInputRef}
						min={min}
						max={max}
						step={step}
						pattern={pattern}
						inputMode={inputmode}
						onChange={action}
						onFocus={() => {
							setCNSST(false);
						}}
						onBlur={() => {
							if (type !== 'file') {
								if (document.getElementById(name).value === '') {
									setCNSST(true);
								}
							}
						}}
					/>
				)}
			</div>
		</>
	);
}
