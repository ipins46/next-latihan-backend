module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0e8cdaadadda4bf1bf855e0f076bc354'),
  },
});
