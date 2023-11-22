import { render, screen } from "@testing-library/react";
import { describe, expect, it, beforeEach } from "vitest";
import { Footer } from "./Footer";

const currentYear = new Date().getFullYear();

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders copy write info", () => {
    expect(
      screen.getByText(
        `© React TypeScript Shopping Cart ${currentYear}. All rights reserved.`
      )
    ).toBeVisible();
  });
});
