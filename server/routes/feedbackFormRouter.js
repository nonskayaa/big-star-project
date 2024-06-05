const Router = require("express");
const router = new Router();
const feedbackFormController = require("../controllers/feedbackFormController");

router.post("/", feedbackFormController.create);

module.exports = router;
