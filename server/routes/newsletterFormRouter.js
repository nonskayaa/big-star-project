const Router = require("express");
const router = new Router();
const newsletterFormController = require("../controllers/newsletterFormController");

router.post("/", newsletterFormController.create);

module.exports = router;
