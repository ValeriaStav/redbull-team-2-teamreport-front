import * as React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../src/Pages/Home Page/index";

const data = ["html", "js", "css", "images"];

describe("HomePage", () => {
    it("should render", () => {
        render(<HomePage />);
        expect(screen.getAllByRole("list")).toHaveLength(data.length);
        expect(screen.getByText(/html/)).toBeInTheDocument();
    });
    it("should render without data", () => {
        render(<HomePage />);
        expect(screen.queryByRole("list")).toBeNull();
    });
    // it("should render the page", () => {
    //     const { container } = render(<HomePage />);
    // });
});
