import st from "./Modal.module.css";

export const Modal = ({ children, isOpen, closeModal }) => {
	const handleModalContainerClick = (e) => e.stopPropagation();
	return (
		<article className={isOpen ? st.modalOpen : st.modal} onClick={closeModal}>
			<div className={st.container} onClick={handleModalContainerClick}>
				<button
					className={st.close}
					onClick={(e) => {
						e.preventDefault();
						closeModal;
					}}>
					❌
				</button>
				{children}
			</div>
		</article>
	);
};
