import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];
  render(<UserList users={users} />);

  return {
    users,
  }
}

test("render one row per user", () => {
  const {users} = renderComponent();
  //find all the rows in table
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  //assertion: correct number of rows in table
  expect(rows).toHaveLength(users.length);
});

test("correctly render the name and email of each user", () => {
  const {users} = renderComponent();

  for (let user of users) {
    const nameEl = screen.getByRole("cell", { name: user.name });
    const emailEl = screen.getByRole("cell", { name: user.email });

    expect(nameEl).toBeInTheDocument();
    expect(emailEl).toBeInTheDocument();
  }
});
