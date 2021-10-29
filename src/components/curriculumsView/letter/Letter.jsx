import React from "react";
import "../../../css/Letter.css";

function Letter(props){
    return(
        <>
            <div className = "card">
                <div className="panelImage">Image</div>
                <div className="labelName">Nombre</div>
                <div className="labelAge">Edad</div>
                <div className="labelID">ID</div>
                <div className="parDes">Descript</div>
                <div className="btn" >More</div>
            </div>

        </>
    )
}
 export {Letter}