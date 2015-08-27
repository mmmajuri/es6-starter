ES6-Webpack-React Starter
=========================

A starter template for projects using ES6, Webpack and React.

Preconfigured with a build process, linting and testing.

## Features

#### Hot-live-reload

React hot-live-reload is pre-configured. You can leverage this by accessing
the app at `localhost:8100/webpack-dev-server` in the browser.

#### Linting

Linting is implemented with Eslint.
Opinionated configuration (by the author) with React-specific
rules can be found in `.eslintrc`.

Linting is run by webpack, thus no separate linting process is needed.
Moreover, tests are also linted.

#### Testing

Run tests once: `npm run test`

Run tests continuously: `karma start`

Create test coverage: `npm run test-coverage`

Installed frameworks and components: *Jasmine*, *rewire-webpack*

#### Building

Build dir: `./dist`

Build by: `npm run build`

#### Module loaders

The following loaders are pre-configured:

* babel-loader
* json-loader
* css-loader
* less-loader
* sass-loader
* stylus-loader
* file-loader

You may use all LESS, SASS and Stylus styles.

#### Bundle size analyzer

First `npm install -g webpack-bundle-size-analyzer`.

Now you may analyze bundle sizes by `npm run bundle-stats`.

#### Source maps

Source maps are automatically on dev environment to enable debugging.

#### Shims

Webpack configuration includes default shims and placeholders for more.

## Install

1. `npm install -g karma-cli webpack-dev-server`

2. `npm install`

## Running the app

Create directory for the assets.

`npm start`run and watch changes at http://localhost:8100

`npm test` run units tests once
