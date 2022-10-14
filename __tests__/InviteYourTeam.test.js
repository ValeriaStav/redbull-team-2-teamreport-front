import React, { useState } from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, user } from "@testing-library/react";
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
        expect(
            screen.getByRole("button", { name: /Invite/i })
        ).toBeInTheDocument();
        expect(Button.type).toBe("submit");
    });

    it("calls onClick prop when clicked", async () => {
        render(<InviteYourTeam />);
        const handleClick = jest.fn();
        render(<button onClick={handleClick}>Invite</button>);
        fireEvent.click(screen.getByText(/invite/i));
        expect(handleClick).toHaveBeenCalledTimes(0);
        await user.click(screen.getByRole("button", { name: "Invite" }));
        expect(screen.getByRole("strong")).toBeVisible();
    });

    it("The user can see the closed text after the toggle has been clicked", async () => {
        const Button = async () => {
            const [open, setOpen] = useState(false);
            return (
                <Toggle
                    value={open}
                    setValue={setOpen}
                    onText="/Success/i"
                    offtext=""
                />
            );
        };
        render(<div />);
        fireEvent.click(screen.getByRole("Button"));
        expect(await screen.getByText(/Success/i)).toBeVisible();
    });
});

const user = userEvent.setup();
await user.type(screen.getByLabelText(/last name/i), values.lastName);
await user.type(screen.getByLabelText(/first name/i), values.firstName);
await user.type(screen.getByLabelText(/email address/i), values.email);
await user.click(screen.getByRole('button', { name: 'Invite' }));
expect(screen.getByLabelText(/InputFirstName1/i)).toBeInTheDocument();
expect(screen.getByDisplayValue("")).toBeInTheDocument();
expect(screen.getByTestId("exampleInputEmail1")).toBeInTheDocument();
screen.getByRole("");
it("should render the InviteYourTeam page", () => {
const { container } = render(<InviteYourTeam />);
render(<InviteYourTeam />);
screen.getByRole("button", { name: /Invite/i });
