import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter } from "react-router";
import { createServer } from "../test/server";
import HomeRoute from "./HomeRoute";

createServer([
  {
    path: 'api/repositories',
    res: (req) => {
      const language = req.url.searchParams.get("q").split('language:')[1];

      return {
        items: [
          { id: 1, full_name: `${language}_one` },
          { id: 2, full_name: `${language}_two` },
        ],
      }
    }
  }
])

const handlers = [
  rest.get("/api/repositories", (req, res, ctx) => {
    const language = req.url.searchParams.get("q").split('language:')[1];

    return res(
      ctx.json({
        items: [
          { id: 1, full_name: `${language}_one` },
          { id: 2, full_name: `${language}_two` },
        ],
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

test('render 2 links for each language', async () => {
  render(
    <MemoryRouter>
      <HomeRoute />
    </MemoryRouter>
  )

  //Loop over each language
  const languages = [
    'javascript',
    'typescript',
    'python',
    'rust',
    'go',
    'java'
  ]

  for(let language of languages){
    //For each language make sure we see 2 links
    const links = await screen.findAllByRole('link', {
      name: new RegExp(`${language}_`)
    });

    expect(links).toHaveLength(2);
    //Assert the links have appropriate full name
    expect(links[0]).toHaveTextContent(`${language}_one`)
    expect(links[1]).toHaveTextContent(`${language}_two`)
    expect(links[0]).toHaveAttribute('href', `/repositories/${language}_one`)
    expect(links[1]).toHaveAttribute('href', `/repositories/${language}_two`)
  };

})
