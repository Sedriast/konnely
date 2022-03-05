import style_I from '../../css/Tools/Inputs.module.css';
import { useRef, useState, useEffect } from "react";

export function Inputs(props){

	const [image, setImage] = useState();
	const [preview, setPreview] = useState();
	const fileInputRef = useRef();
	const { handleChange } = props;

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

	const handleImage = (e) => {
		const file = e.target.files[0];

		if (file && file.type.substr(0, 5) === "image") {
			setImage(file);
			//props.HaveImage(e.target.files[0]);
		} else {
			setImage(null);
		}
	};

	const changeImage = () => {
		setImage(null);
	};

	return(
		<>
			<div className={props.clsName}>

				<h1 className={style_I.label} >{props.leyend}</h1>

				{preview ? (
					<img
						src={preview}
						style={{ objectFit: "cover" }}
						onClick={changeImage}
						alt=""
					/>
				) : (
					<input
						className={style_I.inp}
						type={props.type_}
						name={props.name_}
						aria-label={props.aLabel}
						ref={ fileInputRef }
						placeholder={props.placeholder_}
						accept="image/*"
						onChange={ handleChange }
						onClick={ handleImage }
					/>
				)}
			</div>
		</>
	);
}