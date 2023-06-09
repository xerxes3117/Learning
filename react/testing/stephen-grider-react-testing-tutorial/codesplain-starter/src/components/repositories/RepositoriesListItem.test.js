import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RepositoriesListItem from "./RepositoriesListItem";

function renderComponent() {
  const repository = {
    full_name: "facebook/react",
    language: "Javascript",
    description: "some repository",
    owner: {
      login: "facebook",
    },
    name: "react",
    html_url: "https://github.com/facebook/react",
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );

  return {repository}
};

describe("Respository list item component", function () {
  
  test("it shows a link to github repository", async () => {
    const {repository} = renderComponent();

    //This is done to trigger 'act' functionality, which will wait for async parts while rendering our component 
    await screen.findByRole('img', { name: 'Javascript' })

    const linkEl = screen.getByRole('link', { name: /github repository/i });
    expect(linkEl).toHaveAttribute('href', repository.html_url)
  });

  test("it shows a file icon with appropriate icon", async () => {
    renderComponent();
    const iconEl = await screen.findByRole('img', { name: 'Javascript' });

    expect(iconEl).toHaveClass('js-icon')
  })

  test("it shows a link to code editor page", async () => {
    const {repository} = renderComponent();
    await screen.findByRole('img', { name: 'Javascript' });

    const linkEl = await screen.findByRole('link', {
      name: new RegExp(repository.owner.login)
    })
    expect(linkEl).toHaveAttribute('href', `/repositories/${repository.full_name}`);
  })

});
