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

  it("renders correctly the shopping cart widget", () => {
    expect(screen.queryByText(/Buy Online/i)).toBeInTheDocument();

    expect(screen.getByTestId("cart-widget-btn")).toBeInTheDocument();
  });
});
