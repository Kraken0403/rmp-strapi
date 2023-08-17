module.exports = ({ env }) => ({
    // ...other plugin configurations...
    'users-permissions': {
      jwtSecret: env('JWT_SECRET', '0bbebacfd81813280ec9fa7076e338701e179a9b726101b66796307f5eb3b627'),
    },
  });