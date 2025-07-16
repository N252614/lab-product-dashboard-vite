import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Product Dashboard", () => {
  test("renders product dashboard title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Product Dashboard/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("displays all products initially", () => {
    render(<App />);
    const productItems = screen.getAllByTestId("product-item");
    expect(productItems.length).toBe(3);
  });

  test("applies conditional styling for out-of-stock products", () => {
    render(<App />);
    const outOfStockProduct = screen.getByText(/Out of stock/i);
    expect(outOfStockProduct).toHaveStyle("background-color: rgb (255, 229, 229)");

  });

  test('removes product from the dashboard when "Remove" button is clicked', () => {
    render(<App />);
    const removeButtons = screen.getAllByText("Remove");
    const initialCount = screen.getAllByTestId("product-item").length;

    fireEvent.click(removeButtons[0]);

    const updatedCount = screen.getAllByTestId("product-item").length;
    expect(updatedCount).toBe(initialCount - 1);
  });
});