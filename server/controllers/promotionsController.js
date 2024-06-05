const uuid = require("uuid");
const path = require("path");

const { Promotions } = require("../models/models");
const ApiError = require("../error/ApiError");

class promotionsController {
  async create(req, res, next) {
    try {
      const {
        size_of_discount,
        name_of_shop,
        date_from,
        date_to,
        description,
        link,
      } = req.body;
      const { image } = req.files;
      let fileName = uuid.v4() + ".jpg";
      image.mv(path.resolve(__dirname, "..", "static", fileName));

      const promotion = await Promotions.create({
        size_of_discount,
        name_of_shop,
        date_from,
        date_to,
        description,
        link,
        image: fileName,
      });

      return res.json(promotion);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const promotions = await Promotions.findAll();
    return res.json(promotions);
  }
}

module.exports = new promotionsController();
