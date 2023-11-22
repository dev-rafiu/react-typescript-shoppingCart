import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";

import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it("renders correctly the logo", () => {
    expect(
      screen.getByAltText(/Shoping Cart Application/i)
    ).toBeInTheDocument();
  });
});
