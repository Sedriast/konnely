import st from "./Modal.module.css";
const Modal = ({ children, isOpen, closeModal }) => {
    const handleModalContainerClick = (e) => e.stopPropagation();
    var modal = st.modal;
    if (isOpen) {
        modal = st.modalOpen;
    } else if (!isOpen) {
        modal = st.modal;
    }

    return (
        <article className={modal} onClick={closeModal}>
            <div className={st.container} onClick={handleModalContainerClick}>
                <button className={st.close} onClick={closeModal}>
                    X
                </button>
                {children}
            </div>
        </article>
    );
};

export default Modal;
