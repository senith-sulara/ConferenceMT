const express = require('express');
const router = express.Router();
const controller = require('../controllers/reviwer.controller');

module.exports = function () {
  router.post('/add', controller.addDecisions);
  router.delete('/:id', controller.deleteReviwe);
  router.get('/', controller.getAllReviwes);
  return router;
}