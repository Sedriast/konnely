import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { Loading } from "../1-Loading/Loading";

describe("<Loading />", () => {
	let com;

	beforeEach(() => {
		com = render(<Loading />);
	});

	test("render content", () => {
		com.getByText("Cargando...");
	});
});
