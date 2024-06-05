const { FeedbackForm } = require("../models/models");

class feedbackFormController {
  async create(req, res) {
    const { first_name, email, topic_type, text } = req.body;
    const feedbackForm = await FeedbackForm.create({
      first_name,
      email,
      topic_type,
      text,
    });

    return res.json(feedbackForm);
  }
}

module.exports = new feedbackFormController();
