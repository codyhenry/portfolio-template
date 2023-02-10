import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { App, WrappedApp } from "../App";

describe("App", () => {
  it("Renders hellow world", () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    // EXPECT
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Hello World"
    );
  });

  it("Renders 'Not Found' if invalid path", () => {
    render(
      <MemoryRouter initialEntries={["/something"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Not Found"
    );
  });
});
