import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { Buttons } from "../1-Buttons/Buttons";

import { faSkiing } from "@fortawesome/free-solid-svg-icons";

describe("<Buttons />", () => {
	let com;

	const prop = {
		direction: "top",
		label: "test",
		btnId: "test",
		btnName: "test",
		route: "#",
		btnIconText: faSkiing,
	};

	beforeEach(() => {
		com = render(<Buttons {...prop} />);
	});

	test("clicking the buttom calls event", () => {
		const btn = screen.getByRole("figure");

		//Tambien se puede usar el metodo submit para probar los formularios
		fireEvent.click(btn);

		const el = com.getByText("figure");

		expect(el.parentNode).not.toHaveStyle("display: flex");
	});
});
