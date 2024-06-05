const { NewsletterForm } = require("../models/models");
const ApiError = require("../error/ApiError");

class newsletterFormController {
  async create(req, res) {
    const { email } = req.body;
    const newsletterForm = await NewsletterForm.create({ email });
    return res.json(newsletterForm);
  }
}

module.exports = new newsletterFormController();
