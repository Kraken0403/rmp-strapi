module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_AUTH_SECRET', 'lU6OYSfapxTfv5+hHU0Hnv2Tn0E9hiHk4WudTeutdks='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'M+uoPkk7zfIQYh1MJhh1NA=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'csDYO11iYYxSqc2SpdAIBn1vdWjZtS2cgrGnIHMykrI='),
    },
  },
});
