import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  render(<App />);
  const app = screen.getByTestId("container");
  expect(app).toBeInTheDocument();
});
