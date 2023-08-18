var server = require('../index')
var axios = require('axios')

describe("Test the root path", () => {

    beforeEach(() => {
        jest.resetModules() // it clears the cache
    });

    test("GET /users/me", async() => {
      const res = axios.get('http://localhost:3000/api/v1/user/me')

      expect(res).toBeTruthy()
      expect(res.status).toBe(200)
      expect(res.data).toEqual('Finding user data...')

    });
  });
