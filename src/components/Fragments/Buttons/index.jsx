import "./buttons.css";

function Buttons({ type, title, placeholder, click_Fn }) {
	return (
		<button type={type} title={title} onClick={click_Fn}>
			{placeholder}
		</button>
	);
}

export { Buttons };
