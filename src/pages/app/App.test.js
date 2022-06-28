import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

const response = { speaker: "Speaker", quote: "ok" };
//
const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(response));
  })
);
//
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders the app whith a button, a text, a img", () => {
  render(<App />);

  const textEl = screen.getByText(/Speaker/);
  const buttonEl = screen.getByRole("button");
  const imageEl = screen.getByRole("img");

  expect(textEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
});
//
// test("calls api on button click and update its text", async() => {
// render(<App />);
// const buttonEl = screen.getByRole("button");
// const quoteEl = await.screen.findByText(response.quote);
//
// expect(quoteEl).toBeInTheDocument();
// expect(buttonEl).toBeInTheDocument();
//
// fireEvent.click(buttonEl);
// });
