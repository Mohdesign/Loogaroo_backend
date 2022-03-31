module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1f8cdb891e05d658c67dc79d6aba2107'),
  },
});
