import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { Lists } from "../1-List/Lists";

describe("<Lists />", () => {
	let com;

	beforeEach(() => {
		com = render(<Lists leyend='testG' listar={["1", "2", "3"]} />);
	});

	test("render content", () => {
		com.getByText("testG");
	});

	test(" calls event", () => {
		const btn = com.getByText("testG");
		expect(btn.textContent).toEqual("testG");
		expect(btn.parentNode).toHaveStyle("font-size: 10px !important");
	});
});
