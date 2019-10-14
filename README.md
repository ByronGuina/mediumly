# Mediumly

Mediumly is an application used to read articles written by users or publications on Medium.

## Running Locally

Both the backend and frontend projects were scaffolded using [Yarn](https://yarnpkg.com/lang/en/). You can substitude all of the below commands containing `yarn` to use the equivalent `npm` command instead.

### Start backend

```bash
yarn install:backend
yarn start:backend
```

### Start frontend

```bash
yarn install:frontend
yarn start:frontend
```

## Architecture
The **frontend** was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app) using the default flags. For the component library I used [Chrakra-UI](https://chakra-ui.com/getting-started), an accessible, CSS-in-JS component library based on [Tailwind CSS](https://tailwindcss.com/), and [styled-system](https://styled-system.com/).

The **backend** is a standard Express-based REST API with endpoints to handle retrieving a Medium feed and retrieving the list of recent searches from the "database." There's no "real" database and instead the data is stored in-memory within the data layer of the backend. The Search data layer controls this in-memory store and it gets cleared whenever the server is reset.

![Simple Architecture Diagram](https://res.cloudinary.com/byronguina/image/upload/v1571079407/Architecture-Mediumly.png)

## Issues I had

## What I would improve next
