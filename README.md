# Scalable Rest API in Node.js



One of the most popular Node.js frameworks is Express.js. It offers an easy approach to building applications at different scales. As a project grows, it becomes hard to scale at some point adding new routes, services and it really makes the job very hard.

It's a boilerplate Rest API in Node

# Installation

```
npm install
``` 


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

## Contributing

Please read contact me.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


