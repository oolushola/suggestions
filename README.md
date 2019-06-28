[![Build Status](https://travis-ci.org/oolushola/suggestions.svg?branch=master)](https://travis-ci.org/oolushola/suggestions) [![Coverage Status](https://coveralls.io/repos/github/oolushola/suggestions/badge.svg?branch=master)](https://coveralls.io/github/oolushola/suggestions?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/447b577716e54980cde4/maintainability)](https://codeclimate.com/github/oolushola/suggestions/maintainability) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



### GDEV - SUGGESTIONS

![Logo of the project](ui/images/hom-design.jpg)

An API that exposes city suggestions around the world.

### Prerequisites
In order to get the most of this application, there are a few prerequisites required: 

- Basic Understanding of HTML, CSS and Javascript
- Command Line Tools, e.g. Git Bash for Windows User
- [`Node Js`](https://nodejs.org/en/): a javascript runtime built on Chrome's V8 Javascript Engine.
- [`npm`](https://www.npmjs.com/package/download) Essential javascript development tools that assists to build powerful applications using modern open source code.
- [`express js`](https://expressjs.com/): A fast unopinionated, minimalist, web framework for node.js

## Installing / Getting started


- Install `NODE` and `NPM`
- clone the repository into your local directory. To do that, open either the terminal for macOS  users or command prompt for windows users and paste in `https://github.com/oolushola/suggestions.git`
- Once its cloned, cd into the path where the repo is on the pc from the terminal and run `npm install` or `npm i` to install every necesarry development and production dependencies in the package.json file.
- After all dependencies are done, still on the terminal run `npm run serve`
- **To run integration test**: `npm run test`


## Tools
- [`Travis CI`](https://travis-ci.com/): is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub.
- [`Coveralls`](https://coveralls.io/): consolidates the results from a suite of static analysis tools into a single, real-time report, giving your team the information it needs to identify hotspots, evaluate new approaches, and improve code quality(from crunch base).

- Test Framework
    * [`Mocha`](https://mochajs.org/): A javascript testing framework
    * [`Chai`](https://www.chaijs.com/): Javascript test assertation library
- [`Postman`](https://www.getpostman.com/): is the only complete API development environment, and flexibly integrates with the software development cycle.
- [`Heroku`](https://www.heroku.com/): is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
- [`Code Climate`](https://codeclimate.com/): Helps to get automated code review for test coverage, complexity, duplication, security and style.


## Features

Suggestions aims to perform the following core objectives?

```gherkin
Near Match for the search criteria
suggestions:[
    {
    "name": "London, ON, Canada",
    "latitude": "42.98339",
    "longitude": "-81.23304",
    "score": 0.9
  },
  {
    "name": "London, OH, USA",
    "latitude": "39.88645",
    "longitude": "-83.44825",
    "score": 0.5
  },
  {
    "name": "London, KY, USA",
    "latitude": "37.12898",
    "longitude": "-84.08326",
    "score": 0.5
  },
  {
    "name": "Londontowne, MD, USA",
    "latitude": "38.93345",
    "longitude": "-76.54941",
    "score": 0.3
  }
]

No match found
suggestions:[];
```



## UI-Links on GitHub Pages
- [User Interface](https://oolushola.github.io/suggestions/ui) 
```gherkin
Note: 
Above link expose the suggestions api for the users via the use interface.
```

## Additional Links
Suggestion API, deployed to Heroku. Accessible via public URL [Here](https://get-dev-city-suggestions.herokuapp.com/)

## Endpoints


`Endpoints`

|  Method  | URI             | Description  |  Status code |
|:----------:|:---------------------:|--------------|:---------:|
|`GET`  | /api/v1/ |  Index | 200  |
|`GET`  | /api/v1/suggestion |  exposes the city search suggestion with an empty array of records | 200  |
|`GET`  | /api/v1/suggestion?q=somecityofyourchoice |  exposes the city search suggestion any city around the world that matches your search criteria | 200  |


## Contributing

````
I believe the best software are written by teams of software developers. Hence, If you'd like to contribute, 
please fork the repository and use a feature branch. Pull requests are warmly welcome.
````

## Resource
[city.json](https://www.npmjs.com/package/cities.json/)
[fuse.js](https://fusejs.io/)

## Licensing

    The code in this project is licensed under MIT license.
