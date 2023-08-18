# Scalable Rest API in Node.js

[![Build Status](https://travis-ci.org/alexgenovese/scalable-rest-api-node.svg?branch=master)](https://travis-ci.org/alexgenovese/scalable-rest-api-node)

One of the most popular Node.js frameworks is Express.js. It offers an easy approach to building applications at different scales. As a project grows, it becomes hard to scale at some point adding new routes, services and it really makes the job very hard.

It's a boilerplate Rest API in Node

# Installation

```
npm install
npm run start
``` 

# Documentation
This template was born thinking to a simple concept of Rest API easy to ship and manage for small projects and testing. In *config* folder you can setup all global variables for production and development env, the global endpoint and manage different api versions.


## Running 

Make all requests, in frontend, written in this way: 

```
// Make a request using the Fetch API
fetch('/process', {
  credentials: 'same-origin', // <-- includes cookies in the request
  headers: {
    'CSRF-Token': token // <-- is the csrf token as a header
  },
  method: 'POST',
  body: {
    favoriteColor: 'blue'
  }
})
```

Using browser connect to http://localhost:3000/api/v1/user/me


## Built With

* [Node JS](https://nodejs.org/it/)
* [express]

## Contributing

Update the code in a new branch and send a pull request. I'll validate your code and update the template. 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


