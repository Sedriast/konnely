/**
 * Props:
 * --- leyend
 * --- type_
 * --- name_
 * --- placeholder_
 * --- focus_
 *
 * **/

import swal from 'sweetalert';
import st from './css/Inputs.module.css';
import { useRef, useState, useEffect } from 'react';

export function Inputs(props) {
	const fileInputRef = useRef();
	const [image, setImage] = useState(false);
	const [preview, setPreview] = useState(null);

	const action = (e) => {
		if (props.type_ === 'file') {
			const file = e.target.files[0];
			if (file && file.type.substring(0, 5) === 'image') {
				setImage(file);
			} else {
				setImage(null);
			}
		} else if (props.type_ !== 'image') {
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
			setPreview(props.Preview);
		} else {
			setPreview(null);
		}
		if (props.type_ === 'file') {
			if (preview) {
				props.HaveImage(preview);
			}
		}
	}, [image, preview, props, props.Preview]);

	const changeImage = () => {
		swal({
			title: '¿Desea eliminar la imagen?',
			icon: 'warning',
			buttons: ['No', 'Si'],
		}).then((respuesta) => {
			if (respuesta) {
				setImage(null);
				setPreview(null);
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
						style={{ objectFit: 'cover' }}
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
