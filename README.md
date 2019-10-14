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
The **frontend** was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app) using the default flags. For the component library I used [Chrakra-UI](https://chakra-ui.com/getting-started), an accessible, CSS-in-JS component library based on [Tailwind CSS](https://tailwindcss.com/), and [styled-system](https://styled-system.com/). I wrote [hooks](https://reactjs.org/docs/hooks-intro.html)-based functional components, and took advantage of `useReducer` in order to more predictably handle changes on the client.

The **backend** is a standard [Express](https://expressjs.com/)-based REST API with endpoints to handle retrieving a Medium feed and retrieving the list of recent searches from the "database." There's no "real" database and instead the data is stored in-memory within the data layer of the backend. The Search data layer controls this in-memory store and it gets cleared whenever the server is reset. This "database" was injected into the endpoints via context by creating an Express middleware. Since the response from the Medium RSS API is in XML, I wrote a separate service to handle converting the XML to JSON with a [third-party API](https://rss2json.com/).

![Simple Architecture Diagram](https://res.cloudinary.com/byronguina/image/upload/v1571079407/Architecture-Mediumly.png)

## Issues I had
There were a couple implementation issues I encountered while working on the take-home.

- I didn't expect the response from the Medium RSS API to be XML-based. It's been a _while_ since I've handled XML, so I took quite a bit of time trying to convert the XML-formatted response to JSON. I looked at a few libraries including `xml2json`, `xml2js` and `camaro`, but couldn't get any of them to work quickly out-of-the-box in a reasonable amount of time. I ended up using a third-party API called [RSS to JSON](https://rss2json.com/) to parse the Medium XML response and give it to us in JSON. Using a third-party API for core functionality introduces a more brittle dependency into the application and is one of the first things I would update next. See [What I would improve next](#what-i-would-improve-next) section.
- I wasn't sure of the best strategy to sync the backend "recent searches" and the frontend "recent searches". Which should be the source of truth? What happens if an API call fails before the backend is updated with the most recent search? I decided to use the backend as the source of truth between page refreshes, but to optimistically update the UI whenever a search was made. 
- While I've used Node.js and Express on the backend previously, I wasn't sure on best-practices regarding error handling. After some reading, I ended up using Express.js middleware to inject a generic error handler in the case that the use enters an invalid Medium user or publication. All other errors are handled by Express' [default error handler](https://expressjs.com/en/guide/error-handling.html).

## What I would improve next
- Remove the dependency on the third-party JSON converter API. Right now our RSS service isn't that resilient since we're dependent on the other API service. I would get one of the existing libraries working correctly (xml2js, xml2json, camaro, etc.) so we can handle the XML conversion on our own.
- Write styling for the description and content fields of the Medium post. Currently we don't style the description or content fields. This results in pretty bad reading experience when trying to look at posts with a lot of content in those fields. Alternatively, we can only show _part_ of the description or content fields so they don't take up as much space.
