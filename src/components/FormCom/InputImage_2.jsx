/**
 * el div es temporal, este se ba a reemplesar con el imput de imagen 
 * (que parece ser mas complicado de lo que imaginaba)
 */

 import style from '../css/Form.module.css';

 import { useRef, useState, useEffect } from "react";
 
 export function InputImage_2() {
   const [image, setImage] = useState();
   const [preview, setPreview] = useState();
   const fileInputRef = useRef();
 
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
 
   return (
     <div >
         {preview ? (
           <img className={style.imgInput}
             src={preview}
             style={{ objectFit: "cover" }}
             onClick={() => {
               setImage(null);
             }}
           />
         ) : (
            <input
            className={style.imgInput} 
            type="file" name="src-file1" 
            aria-label="Archivo"
            ref={fileInputRef}
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substr(0, 5) === "image") {
                setImage(file);
              } else {
                setImage(null);
              }
            }}
          />
         )}
     </div>
   );
 }