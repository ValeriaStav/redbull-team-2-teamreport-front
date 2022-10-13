import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
    it("renders Routes", async () => {
        render(<App />);
        screen.debug();
        expect(screen.getAllByRole("img")[0]).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
        const Routes = screen.getByText(/routesNoSideBar/i);
        expect(Routes).toBeInTheDocument();
    });
});
