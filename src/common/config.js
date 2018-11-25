const Validator = require('./Validator/index');
const env = require('../../env/common');

module.exports = {
  port: env.port,
  validators: {
    register: data => ({
      name: [Validator.validators.required, Validator.validators.min(2)],
      password: [Validator.validators.required, Validator.validators.matches(data.passwordConfirm)],
    }),
    login: () => ({
      name: [Validator.validators.required, Validator.validators.max(15)],
      password: [Validator.validators.required],
    }),
  },
};
