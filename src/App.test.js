import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Stopwatch/Stopwatch", () => () => (
  <div>Mocked Stopwatch</div>
));

describe("App Component", () => {
  it("should render the Stopwatch component", () => {
    render(<App />);
    expect(screen.getByText("Mocked Stopwatch")).toBeInTheDocument();
  });
});
