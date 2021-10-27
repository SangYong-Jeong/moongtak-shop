const path = require('path');
const express = require('express');
const router = express.Router();

router.get(['/', '/login'], (req, res, next) => {
  res.render('admin/auth/login', { css: 'admin-login' });
});

module.exports = { name: '/auth', router };
