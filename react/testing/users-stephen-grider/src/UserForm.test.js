import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("It shows two inputs and a button", () => {
  //Render the component
  render(<UserForm />);

  //Manipulate the component or find and element in it
  const inputEls = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  //Assert - make sure the component is doing what is expected
  expect(inputEls).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it call onUserAdd when form is submitted", () => {
  const mock = jest.fn();

  //Try to render the component
  render(<UserForm onUserAdd={mock} />);

  //Find the 2 inputs
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });

  const emailInput = screen.getByRole("textbox", {
    name: /enter email/i,
  });

  //Simulate typing in name
  user.click(nameInput);
  user.keyboard("vaibhav");

  //Simulate typing in email
  user.click(emailInput);
  user.keyboard("test@test.com");

  //Find the button
  const button = screen.getByRole("button");

  //Simulate clicking the button
  user.click(button);

  //Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "vaibhav",
    email: "test@test.com",
  });
});

test("it empties the input when form is submitted", () => {
  render(<UserForm onUserAdd={() => {}} />);

	const nameInput = screen.getByRole('textbox', {name: /name/i})
  const emailInput = screen.getByRole('textbox', {name: /enter email/i})
	const button = screen.getByRole('button');

	user.click(nameInput);
  user.keyboard('jane');
  user.click(emailInput);
  user.keyboard('jane@jane.com');
  
  user.click(button);

	expect(nameInput).toHaveValue('');
	expect(emailInput).toHaveValue('');
});
