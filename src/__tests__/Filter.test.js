import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

// Mock data for testing
const mockItems = [
  { name: "Lettuce", category: "Produce" },
  { name: "Swiss Cheese", category: "Dairy" },
  { name: "String Cheese", category: "Dairy" },
  { name: "Cookies", category: "Dessert" },
];

test("uses a prop of 'search' to display the search term in the input field", () => {
  render(<Filter search="test" onSearchChange={() => {}} category="All" onCategoryChange={() => {}} />);
  
  // Check if the search input displays the prop value
  expect(screen.getByPlaceholderText(/Search.../)).toHaveValue("test");
});

test("calls the onSearchChange callback prop when the input is changed", () => {
  const handleSearchChange = jest.fn();
  render(<Filter search="" onSearchChange={handleSearchChange} category="All" onCategoryChange={() => {}} />);

  fireEvent.change(screen.getByPlaceholderText(/Search.../), {
    target: { value: "new search" },
  });

  expect(handleSearchChange).toHaveBeenCalledWith("new search");
});

test("the shopping filters based on the search term to include full matches", () => {
  render(
    <Filter
      search="Lettuce"
      onSearchChange={() => {}}
      category="All"
      onCategoryChange={() => {}}
    />
  );

  // Debug output to see what is rendered
  screen.debug();

  // Ensure that filtered items are present or not
  expect(screen.queryByText("Lettuce")).toBeInTheDocument();
  expect(screen.queryByText("Swiss Cheese")).not.toBeInTheDocument();
});

test("the shopping filters based on the search term to include partial matches", () => {
  render(
    <Filter
      search="Cheese"
      onSearchChange={() => {}}
      category="All"
      onCategoryChange={() => {}}
    />
  );

  // Debug output to see what is rendered
  screen.debug();

  expect(screen.queryByText("Swiss Cheese")).toBeInTheDocument();
  expect(screen.queryByText("String Cheese")).toBeInTheDocument();
  expect(screen.queryByText("Lettuce")).not.toBeInTheDocument();
});
