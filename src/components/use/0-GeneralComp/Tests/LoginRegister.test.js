import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { LoginRegister } from "../../A_LoginRegister/LoginRegister";

describe("<LoginRegister />", () => {
	let com;

	beforeEach(() => {
		com = render(<LoginRegister />);
	});

	it("is enabled", () => {
		render(<LoginRegister />);
		expect(screen.getByRole("div")).toBeEnabled();
		expect(screen.getByRole("button")).toBeEnabled();
	});
});
