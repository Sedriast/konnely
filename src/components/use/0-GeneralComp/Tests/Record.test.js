import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { Record } from "../../B_Record/Record";

describe("<Record />", () => {
	let com;

	beforeEach(() => {
		com = render(<Record />);
	});

	test("render content", () => {
		com.getByText("Simon");
	});
});
