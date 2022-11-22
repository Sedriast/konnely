import Webcam from "react-webcam";
import st from "./SendRabbitData.module.css";

import { useState } from "react";

import {
  faCamera,
  faFloppyDisk,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { useModal } from "../../0-GeneralComp/0-StaticData/Modals/useModal";
import { addImageAndInfo } from "../../../firebase/funtions/AddInformation";
import { recuperar } from "../../0-GeneralComp/0-StaticData/dataProv";
import { Approximate } from "../../0-GeneralComp/0-StaticData/Dates/Dates";

import { DropdownForm } from "./components/DropdownForm";
import { DropdownDate } from "./components/DropdownDate";
import { Modal } from "../../0-GeneralComp/0-StaticData/Modals/Modal";
import { Inputs } from "../../0-GeneralComp/1-Inputs/Inputs";
import { Lists } from "../../0-GeneralComp/1-List/Lists";
import { Buttons } from "../../0-GeneralComp/1-Buttons/Buttons";
import { GetDocument } from "../../../firebase/funtions/GetInformation";
import {
  conditionalBasis,
  conditionalLevante,
  conditionalNext,
} from "../../0-GeneralComp/0-StaticData/Dates/conditionals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export function SendRabbitData() {
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const [reason, setReason] = useState();
  const [image, setImage] = useState(null);
  const [values, setValues] = useState({});
  const [approximate, setApproximate] = useState({});
  const [image_, setImage_] = useState(null);
  const [auxImage_, setAuxImage_] = useState(null);
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const updateState = (name, value) => {
    if (name === "nacimiento") {
      setApproximate(Approximate(value));
      setDate(value);
      setValues({ ...values, [name]: value });
    } else if (name === "motivo") {
      setReason(value);
      setValues({ ...values, [name]: value });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "motivo") {
      updateState(name, value);
    } else if (name === "nacimiento") {
      e.target.value = conditionalBasis(updateState, name, value);
    } else if (name === "traslado") {
      e.target.value = conditionalBasis(updateState, name, value);
    } else if (name === "levantefin") {
      e.target.value = conditionalLevante(
        updateState,
        name,
        value,
        values.nacimiento
      );
    } else if (name === "engordefin") {
      e.target.value = conditionalNext(
        updateState,
        name,
        value,
        values.levantefin
      );
    } else if (name === "cebafin") {
      e.target.value = conditionalNext(
        updateState,
        name,
        value,
        values.engordefin
      );
    } else {
      updateState(name, value);
    }
  }

  const handleSubmit = () => {
    addImageAndInfo({
      ...values,
      image: image,
      lifecycle: [
        {
          stage: "Nacimiento",
          state: "id de la camada",
          approDate: null,
          date: values.nacimiento,
          weigth: "Sin datos",
        },
        {
          stage: "Levante",
          state: null,
          approDate: approximate.raised,
          date: null,
          weigth: "Sin datos",
        },
        {
          stage: "Engorde",
          state: null,
          approDate: approximate.fattening,
          date: null,
          weigth: "Sin datos",
        },
        {
          stage: "Ceba",
          state: null,
          approDate: approximate.ceba,
          date: null,
          weigth: "Sin datos",
        },
      ],
    });
    recuperar(values.id);
  };

  const cm = (
    <>
      <div className={st.panelContainer}>
        <div className={st.panelInpImg}>
          <div className={st.panelImage}>
            <Inputs
              type="file"
              HaveImage={(e) => {
                setImage(e);
                if (e === null) {
                  setImage_(null);
                  setAuxImage_(null);
                }
              }}
              preeview={image_}
            />
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              {isOpenModal && (
                <>
                  <Webcam
                    audio={false}
                    height={250}
                    width={330}
                    screenshotFormat="image/jpeg"
                  >
                    {({ getScreenshot }) => (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          const imageSrc = getScreenshot();
                          setAuxImage_(imageSrc);
                        }}
                      >
                        Capturar foto
                      </button>
                    )}
                  </Webcam>
                  <img src={auxImage_} alt=""></img>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setImage_(auxImage_);
                      closeModal();
                    }}
                  >
                    Aceptar
                  </button>
                </>
              )}
            </Modal>
          </div>
          <br />
          <br />
          <div className={st.btnC}>
            <Buttons
              direction="bottom"
              label="Cámara"
              btnIconText={faCamera}
              btnClick={openModal}
              route="#"
            />
          </div>
        </div>
        <br />
        <br />
        <div className={st.panel}>
          <Inputs
            leyend="Identificador"
            name="id"
            placeholder="Ingrese el identificador"
            type="number"
            inputmode="numeric"
            handleChange={handleChange}
          />
          <Lists
            leyend="Género"
            name_="genero"
            listar={
              GetDocument({ coleccion: "lists", list: "gender" }).props
                .children[0].values
            }
            handleChange={handleChange}
          />
          <Lists
            placeholder="Raza"
            leyend="Raza"
            name_="raza"
            listar={
              GetDocument({ coleccion: "lists", list: "races" }).props
                .children[0].values
            }
            handleChange={handleChange}
          />
          <Inputs
            leyend="Porcentaje de pureza"
            name="porcentaje"
            placeholder="Procentaje de pureza"
            type="number"
            inputmode="numeric"
            min="1"
            max="100"
            step="0.1"
            handleChange={handleChange}
          />
          <Lists
            leyend="Concepción"
            name_="concepcion"
            listar={
              GetDocument({ coleccion: "lists", list: "conception" }).props
                .children[0].values
            }
            handleChange={handleChange}
          />
          <Inputs
            leyend="Fecha de nacimiento"
            name="nacimiento"
            type="date"
            handleChange={handleChange}
          />
          {date && <DropdownDate date={date} handleChange={handleChange} />}
          <Lists
            leyend="Motivo de ingreso"
            name_="motivo"
            listar={
              GetDocument({ coleccion: "lists", list: "reasons" }).props
                .children[0].values
            }
            handleChange={handleChange}
          />
          {reason && (
            <DropdownForm motivo={reason} handleChange={handleChange} />
          )}
        </div>
        <div className={st.submit}>
          <Buttons
            label="Guardar"
            direction="top"
            btnClick={() => {
              handleSubmit();
            }}
            btnIconText={faPaperPlane}
            route="#"
          />
        </div>
      </div>
    </>
  );
  return cm;
}
