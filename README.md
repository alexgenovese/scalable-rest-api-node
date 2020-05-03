# Scalable Rest API in Node.js

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=How%20to%20build%20a%20Node.js%20API%20Rest%20that%20scales&url=https://github.com/alexgenovese/scalable-rest-api-node)

One of the most popular Node.js frameworks is Express.js. It offers an easy approach to building applications at different scales. As a project grows, it becomes hard to scale at some point adding new routes, services and it really makes the job very hard.

It's a boilerplate of Rest API build in Node.

# Installation

```
npm install
``` 


## Running 

All requests in frontend needs to be written in this way: 

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


