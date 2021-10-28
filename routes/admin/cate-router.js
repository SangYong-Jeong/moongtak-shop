const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('admin/cate/cate', { css: 'admin-cate' });
});

router.put('/', (req, res, next) => {
  res.send('/admin/cate:PUT');
});

router.delete('/', (req, res, next) => {
  res.send('/admin/cate:DELETE');
});

router.post('/', (req, res, next) => {
  res.send('/admin/cate:POST');
});

module.exports = { name: '/cate', router };
