This repo is a collection of apps, structured to compare popular React state management libraries. Each app is the exact same todo app, but uses a different state management library. Presentational components and utils are shared, and business logic and container components are analogous.

I hope this repo is useful to anyone that may already be familiar with one library and interested in another.

### Use this repo to compare:
- How state is updated and components are connected.
- Boilerplate and configuration.
- Common and best practices.

### Libraries implemented:
- Apollo
- MobX
- Redux
- React.createContext

### How to use:
- Compare each library's state logic and connected components inside `client/src`.
- See shared presentational components and utils in `client/src/shared`.

### To run the project:
Start a GraphQL server on `localhost:8080/graphql`:
```
$ cd server
$ npm install
$ npm start
```
Start the React client on `localhost:3000`:
```
$ cd client
$ npm install
$ npm start
```

NOTE: You can select the app to render inside `client/src/index.js`.

In the future I may add more complex usage examples, especially where one library really excels. For example, optimistic UI is really nice in Apollo and interesting to implement in the others. For now I've just tried to keep everything as simple as possible.

Thanks to igorlima for the GraphQL server: https://github.com/igorlima/todo-mongo-graphql-server