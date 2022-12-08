import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { Modal } from "../0-StaticData/Modals/Modal.jsx";

describe("<Modal />", () => {
	let com;
	const prop = {
		closeModal: () => console.log("close"),
		children: <div>conten</div>,
	};
	beforeEach(() => {
		com = render(<Modal {...prop} />);
	});

	test("render content", () => {
		com.getByText("❌");
	});
	test("render content", () => {
		com.getByText("conten");
	});

	test("clicking the buttom calls event", () => {
		const btn = com.getByText("❌");

		//Tambien se puede usar el metodo submit para probar los formularios
		fireEvent.click(btn);

		const el = com.getByText("conten");

		expect(el.parentNode).not.toHaveStyle("display: flex");
	});
});
