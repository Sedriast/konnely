 import style from '../css/Form.module.css';
 import { useRef, useState, useEffect } from "react";
 
 export function InputImage(props) {

   const [image, setImage] = useState();
   const [preview, setPreview] = useState();
   const fileInputRef = useRef();
 
   useEffect( () => {
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

   
	 const handleImage = e => {

		const file = e.target.files[0];
	
		if (file && file.type.substr(0, 5) === "image") {
		  setImage(file);
      props.HaveImage(e.target.files[0]);
		} else {
		  setImage(null);
		}
	  }

  const changeImage = () => {
    setImage(null);
  }

   return (
     <div>
         {preview ? (
			<img className={style.imgInput} src={preview} style={{objectFit: "cover"}} onClick={changeImage} alt=""/>
         ) : (
			<input className={style.imgInput} type="file" name="src-file1" aria-label="Archivo" ref={fileInputRef} accept="image/*" onChange={handleImage}/>
         	)
		 }
     </div>
   );
 }