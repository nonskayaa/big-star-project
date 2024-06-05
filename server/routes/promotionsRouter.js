const Router = require("express");
const router = new Router();
const promotionsController = require('../controllers/promotionsController')

router.post("/", promotionsController.create);
router.get("/", promotionsController.getAll);

module.exports = router;
