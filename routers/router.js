const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/' , controller.defaultController);
router.post('/form' , controller.addController);
router.get('/viewlist', controller.viewController);
router.get('/edit/:id' , controller.editController);
router.post('/update/:id' , controller.updateController);
router.get('/delete/:id' , controller.deletedController);

module.exports = router;