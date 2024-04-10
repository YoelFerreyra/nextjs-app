# Admin Panel

This administrator panel

## Tech Stack

- NextJS (v14)
- Node.js (v20.11.1)

## Getting Started

1. Clone the repository

```bash
git clone 
```

2. Add a .env file in the root directory and provide the necessary environment variables. You can copy the .env.example file and fill in the necessary values.

3. Install dependencies

```bash
npm install
#or
yarn add
```

4. Run server. This will start the admin panel.

```bash
npm run dev
#or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the page.

## Dependencies

This repository uses testing libraries such as cypress, jest, storybook. Also husky as a pre-commit verifier.

- [Cypress](https://www.cypress.io/) - e2e library to test the page and functionality.
- [Jest](https://jestjs.io/) - Specialy to do unit tests for functions and components.
- [Storybook](https://storybook.js.org/) - Test your components without complicate configurations divide and isolate them.
- [Husky](https://www.npmjs.com/package/husky) - Create actions to build pre-commit and push-commit.

