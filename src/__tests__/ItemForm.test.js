import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm"; // Import the ItemForm component
import { v4 as uuidv4 } from 'uuid'; // Import uuid for ID generation

test("calls the onItemFormSubmit callback prop when the form is submitted", () => {
  // Create a mock function
  const onItemFormSubmit = jest.fn();
  
  // Render the ItemForm component with the mock function
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/Name/), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: "Dessert" },
  });

  // Submit the form
  fireEvent.submit(screen.getByText(/Add to List/));

  // Assert that the mock function was called with the correct arguments
  expect(onItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      id: expect.any(String),
      name: "Ice Cream",
      category: "Dessert",
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  // Create a mock function
  const onItemFormSubmit = jest.fn();

  // Render the ItemForm component with the mock function
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/Name/), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: "Dessert" },
  });

  // Submit the form
  fireEvent.submit(screen.getByText(/Add to List/));

  // Assert that the mock function was called
  expect(onItemFormSubmit).toHaveBeenCalled();

  // Optionally, check the item added (if needed)
  expect(onItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      id: expect.any(String),
      name: "Ice Cream",
      category: "Dessert",
    })
  );
});
