const Router = require("express");
const router = new Router();
const feedbackFormRouter = require("./feedbackFormRouter");
const newsletterFormRouter = require("./newsletterFormRouter");
const promotionsRouter = require("./promotionsRouter");

router.use("/feedbackForm", feedbackFormRouter);
router.use("/newsletterForm", newsletterFormRouter);
router.use("/promotions", promotionsRouter);

module.exports = router;
