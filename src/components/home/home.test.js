import { render, screen } from "@testing-library/react";
import { Home } from "./index.js";

describe("Home component renders in correct way", () => {
  test("Tittle is rendered", () => {
    render(<Home />);
    const tittle = screen.getByText(/Are you an introvert or an extrovert?/);
    expect(tittle).toBeInTheDocument();
  });
});
