// path: ./src/api/region/controllers/region.js
'use strict';

const axios = require('axios'); // Pastikan axios sudah diinstal di proyek Strapi Anda

module.exports = {
  async getProvinces(ctx) {
    try {
      const response = await axios.get('https://wilayah.id/api/provinces.json');
      // Wilayah.id API mengembalikan data di properti 'data'
      ctx.body = response.data.data;
    } catch (err) {
      console.error('Error fetching provinces from external API:', err);
      ctx.throw(500, 'Gagal mengambil daftar provinsi dari API eksternal.');
    }
  },

  async getRegencies(ctx) {
    const { provinceCode } = ctx.params;
    if (!provinceCode) {
      return ctx.badRequest('Kode provinsi diperlukan.', { field: 'provinceCode' });
    }
    try {
      const response = await axios.get(`https://wilayah.id/api/regencies/${provinceCode}.json`);
      // Wilayah.id API mengembalikan data di properti 'data'
      ctx.body = response.data.data;
    } catch (err) {
      console.error(`Error fetching regencies for province ${provinceCode} from external API:`, err);
      ctx.throw(500, `Gagal mengambil daftar kabupaten/kota untuk provinsi ${provinceCode} dari API eksternal.`);
    }
  },

  async getDistricts(ctx) {
    const { regencyCode } = ctx.params;
    if (!regencyCode) {
      return ctx.badRequest('Kode kabupaten/kota diperlukan.', { field: 'regencyCode' });
    }
    try {
      const response = await axios.get(`https://wilayah.id/api/districts/${regencyCode}.json`);
      // Wilayah.id API mengembalikan data di properti 'data'
      ctx.body = response.data.data;
    } catch (err) {
      console.error(`Error fetching districts for regency ${regencyCode} from external API:`, err);
      ctx.throw(500, `Gagal mengambil daftar kecamatan untuk kabupaten/kota ${regencyCode} dari API eksternal.`);
    }
  },
};