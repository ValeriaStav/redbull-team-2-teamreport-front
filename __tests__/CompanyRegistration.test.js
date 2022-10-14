import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CompanyRegistration from "../src/Pages/CompanyRegistration/index";

ReactDOM.render(
    <BrowserRouter>
        <CompanyRegistration />
    </BrowserRouter>,
    document.getElementById("root")
);

describe("CompanyRegistration", () => {
    it("renders CompanyRegistration component", () => {
        render(<CompanyRegistration />);
        screen.debug();
        expect(screen.getByText(/Company Registration/i)).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText(/Company Name/i)
        ).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("renders CompanyRegistration button Sign Up", () => {
        render(<CompanyRegistration />);
        const Button = screen.getByText("Sign Up");
        expect(
            screen.getByRole("button", { name: /Sign Up/i })
        ).toBeInTheDocument();
        expect(Button.type).toBe("submit");
    });

    it("renders CompanyRegistration button Sign In", () => {
        render(<CompanyRegistration />);
        const Button = screen.getByText("Sign In");
        expect(
            screen.getByRole("button", { name: /Sign In/i })
        ).toBeInTheDocument();
        expect(Button.type).toBe("submit");
    });
});
