module.exports = {
    hostname: 'localhost',
    port: 3000,
    settings: {
      cookie_session_expires: 5,
      cookie_session_name: 'session',
      cookie_user_data: 'user'
    },
    api: {
      endpoint: '/api',
      version: '/v1'
    }
  }