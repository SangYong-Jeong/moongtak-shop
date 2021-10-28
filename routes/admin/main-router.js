const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('admin/main/main', { css: 'admin-main' });
});

module.exports = { name: '/main', router };
