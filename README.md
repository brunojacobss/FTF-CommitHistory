# Commit history App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Basic styling was constructed with [React Bootstrap](https://react-bootstrap.github.io/).

I followed TDD guidelines for the development of this application, using [Cypress](https://www.cypress.io/) for E2E testing, and basic unit testing with [Jest](https://jestjs.io/) and [Nock](https://github.com/nock/nock)

The application fetches the [GitHub REST API](https://docs.github.com/en/free-pro-team@latest/rest) using the official [GitHub request library](https://github.com/octokit/request.js) in order to get all the commits for this repository, and displays them in an accordion along with basic information about each commit.

## Usage

1. Clone this repo
2. Run `npm install`
3. Execute one of the available scripts

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run cypress:open`

Launches the cypress client to start the E2E test.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
