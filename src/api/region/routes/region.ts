// path: ./src/api/region/routes/region.js
'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/regions/provinces',
      handler: 'region.getProvinces',
      config: {
        auth: false, // Atur ke 'true' jika Anda ingin endpoint ini memerlukan autentikasi Strapi
      },
    },
    {
      method: 'GET',
      path: '/regions/regencies/:provinceCode',
      handler: 'region.getRegencies',
      config: {
        auth: false, // Atur ke 'true' jika Anda ingin endpoint ini memerlukan autentikasi Strapi
      },
    },
    {
      method: 'GET',
      path: '/regions/districts/:regencyCode',
      handler: 'region.getDistricts',
      config: {
        auth: false, // Atur ke 'true' jika Anda ingin endpoint ini memerlukan autentikasi Strapi
      },
    },
  ],
};