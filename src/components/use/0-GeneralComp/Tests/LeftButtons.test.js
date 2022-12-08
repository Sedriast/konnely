import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { LeftBottomMenu } from "../1-PanelButtons/LeftBottomMenu/LeftBottomMenu.jsx";

describe("<LeftBottomMenu />", () => {
	let com;

	beforeEach(() => {
		com = render(<LeftBottomMenu />);
	});

	test("render content", () => {
		com.getByRole("div");
	});
});
