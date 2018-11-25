const RegisterController = require('./controllers/RegisterController');
const LoginController = require('./controllers/LoginController');

module.exports = app => {
  app.post('/api/auth/register', RegisterController);
  app.post('/api/auth/login', LoginController);
};
