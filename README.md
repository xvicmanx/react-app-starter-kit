# React App Starter Kit

A boiler plate project to start coding your React application right away.

### Things this kit includes

* [EditorConfig](http://editorconfig.org/) to maintain consinstency in code style among different editors. See the `.editorconfig` file to customize the configuration.

* [Babel](https://babeljs.io/) to transpile the javascript code. See the `.babelrc` file to customize the configuration.

* [Webpack](https://webpack.js.org/) to bundle the modules and assets. See the `webpack.config.*.js` files to customize the configuration.

* [ExpressJS](https://expressjs.com/) to serve our app in development mode. See the `scripts/start-server.js` for more details.

* [NSP](https://nodesecurity.io/) to check for any vulnerabilities in the dependencies.


* [Localtunnel](https://github.com/localtunnel/localtunnel) to easily share your in development to others.
See the `scripts/share-development.js` for more details.

* [React](https://reactjs.org/) to build the interfaces.

* [Jest](https://facebook.github.io/jest/) to test the code being developed.

* [Critical](https://github.com/addyosmani/critical) to extract the critical path CSS  and inject it into  the HTML. See the `config/critical.config.js` to customize the extraction process and more details.

* [React-snapshot](https://github.com/geelen/react-snapshot) to convert the React Code to html.

* [Docker](https://www.docker.com/) to run your application in development in a virtualized environment.



## Getting Started

To get started it is only necessary to clone this repository, install all the dependencies and start your server.

```
  git clone https://github.com/xvicmanx/react-app-starter-kit

  npm install
  npm start
```


## Getting Started with Docker/Docker Compose

If you want to get started running your app in development in Docker using Docker Compose, do the following:

```
  git clone https://github.com/xvicmanx/react-app-starter-kit
  docker-compose build
  docker-compose up
```

## Running the tests

To test the code [Jest](https://facebook.github.io/jest/) is being used.

In order to test your code run the following command: 
```bash
npm test
```

## Building your app

In order to build your app run the following command: 
```bash
npm run build
```

The building process will minify, optimize and bundle the assets for production. I will generate static HTML from your React app and inject the critical rendering CSS.

Optionally, to serve the built app run the command: 
```bash
npm run serve:build
```

## Share your development progress

While developing your app, you can share your progress by creating a localtunnel to your app by running the following command: 
```bash
npm run start-and-share:development
```

This will create a random url to access your app.


## Contributing

Feel free to make any suggestion to improve this project.


## Authors

See the list of [contributors](https://github.com/xvicmanx/react-app-starter-kit/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
