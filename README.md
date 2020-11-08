# Strain Search App
An app that provides a vast collection of marijuana strains sortable by desired effects (medicinal or otherwise) 🌱. 

Data is pulled from [The Strain API](http://strains.evanbusse.com/index.html).

## Requirements
* Node
* Yarn

In order to run the app locally you need to setup a config.js file. The contents of that file are not available through this repo. Ask Geoff for the details.

Built with create-react-app.

### Installation
```
yarn install
```

### Running the app in development mode
```
yarn start
```
Open http://localhost:3000 to view it in the browser.

### Testing
```
yarn test
```
Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### Build the app for production
```
yarn build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
By default, it also [includes a service worker](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) so that your app loads from local cache on future visits.

Your app is ready to be deployed.
