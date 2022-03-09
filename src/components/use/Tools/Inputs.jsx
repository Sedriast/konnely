import style_I from "../../css/Tools/Inputs.module.css";
import { useRef, useState, useEffect } from "react";

export function Inputs(props) {
	const init = {};
	const [image, setImage] = useState();
	const [preview, setPreview] = useState();
	const fileInputRef = useRef();
	//const { handleChange } = props;
	const [values, setValues] = useState(init);

	const action = (e) => {
		if (props.type_ === "file") {
			const file = e.target.files[0];
			if (file && file.type.substr(0, 5) === "image") {
				setImage(file);
				//props.HaveImage(e.target.files[0]);
			} else {
				setImage(null);
			}
		} else if ((props.type_ === "date") | (props.type_ === "text")) {
			const { name, value } = e.target;
			setValues({ ...values, [name]: value });
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
		setImage(null);
	};

	return (
		<>
			<div className={props.clsName}>
				<h1 className={style_I.label}>{props.leyend}</h1>

				<div className={style_I.br_} />

				{preview ? (
					<img
						className={style_I.inp}
						src={preview}
						style={{ objectFit: "cover" }}
						onClick={changeImage}
					/>
				) : (
					<input
						className={style_I.inp}
						type={props.type_}
						name={props.name_}
						ref={fileInputRef}
						placeholder={props.placeholder_}
						accept="image/*"
						onChange={action}
					/>
				)}
			</div>
		</>
	);
}