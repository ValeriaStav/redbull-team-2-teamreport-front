import "@testing-library/jest-dom";
import * as React from "react";
import { render, userEvent, getByText, screen } from "@testing-library/react";
import InviteYourTeam from "../src/Pages/Invite Your Team/index";

describe("InviteYourTeam", () => {
    it("renders InviteYourTeam component", () => {
        render(<InviteYourTeam />);
        screen.debug();
        expect(screen.getByText(/Invite Your Team/i)).toBeInTheDocument();
        expect(screen.getByText(/First Name/i)).toBeInTheDocument();
        expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
        expect(screen.getByText(/Email/i)).toBeInTheDocument();
        expect(screen.getAllByRole("textbox")[0]).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
    it("renders InviteYourTeam button", () => {
        render(<InviteYourTeam />);
        const Button = screen.getByText("Invite");
        expect(Button).toBeInTheDocument();
        expect(Button.type).toBe("submit");
    });

    it("loads items eventually", async () => {
        render(<InviteYourTeam />);
        const Button = screen.getByRole("Button");
        userEvent.click(screen.getByText("Invite"));
        const items = await screen.findAllByText(/Invite /);
        expect(items).toHaveLength(1);
    });

    // const user = userEvent.setup();
    // await user.type(screen.getByLabelText(/last name/i), values.lastName);
    // await user.type(screen.getByLabelText(/first name/i), values.firstName);
    // await user.type(screen.getByLabelText(/email address/i), values.email);
    // await user.click(screen.getByRole('button', { name: 'Invite' }));
    // expect(screen.getByLabelText(/InputFirstName1/i)).toBeInTheDocument();
    // expect(screen.getByDisplayValue("")).toBeInTheDocument();
    // expect(screen.getByTestId("exampleInputEmail1")).toBeInTheDocument();
    // screen.getByRole("");
    // it("should render the InviteYourTeam page", () => {
    // const { container } = render(<InviteYourTeam />);
    // render(<InviteYourTeam />);
    // screen.getByRole("button", { name: /Invite/i });
});
