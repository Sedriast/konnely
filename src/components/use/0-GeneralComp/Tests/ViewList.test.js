import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { ViewIsList } from "../../B_VitaeIsList/VitaeIsList";

describe("<ViewIsList />", () => {
	let com;

	beforeEach(() => {
		com = render(<ViewIsList />);
	});

	test("render content", () => {
		com.getByText("Simon");
	});
});
