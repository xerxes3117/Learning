import { render, screen } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

describe("Respository Summary component", function () {
  test("it displays information about the repository", () => {
    const repository = {
      language: "Javascript",
      stargazers_count: 5,
      open_issues: 10,
      forks: 20,
    };
    
    //Render the component
    render(<RepositoriesSummary repository={repository} />);

    for(let key in repository) {
      const value = repository[key];
      const el = screen.getByText(new RegExp(value));

      expect(el).toBeInTheDocument()
    }
  });
});
