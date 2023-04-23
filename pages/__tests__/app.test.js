import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../index";

describe("Portfolio App", () => {
  it("renders the image and the links", () => {
    render(<Home />);

    const image = screen.getByAltText("My Portfolio");
    expect(image).toBeInTheDocument();

    const emailLink = screen.getByText("email");
    expect(emailLink).toBeInTheDocument();

    const githubLink = screen.getByText("github");
    expect(githubLink).toBeInTheDocument();
  });

  it("navigates to the email and GitHub links", () => {
    render(<Home />);

    const emailLink = screen.getByText("email");
    userEvent.click(emailLink);
    expect(emailLink).toHaveAttribute("href", "mailto:doug@avantgrogg.com");

    const githubLink = screen.getByText("github");
    userEvent.click(githubLink);
    expect(githubLink).toHaveAttribute("href", "https://github.com/avantgrogg");
  });
});
