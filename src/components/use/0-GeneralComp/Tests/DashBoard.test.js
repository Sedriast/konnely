import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { DashBoard } from "../../B_DashBoard/DashBoard";

describe("<DashBoard />", () => {
	let com;

	beforeEach(() => {
		com = render(<DashBoard />);
		com.getByText("Simon");
	});

	test("render content", () => {
		com.getByText("Simon");
	});
});
