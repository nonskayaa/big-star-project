const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const FeedbackForm = sequelize.define("feedback_form", {
  feedback_form_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  topic_type: { type: DataTypes.STRING, allowNull: false },
  text: { type: DataTypes.STRING, allowNull: false },
});

const NewsletterForm = sequelize.define("newsletter_form", {
  newsletter_form_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: { type: DataTypes.STRING, allowNull: false },
});

const Promotions = sequelize.define("promotions", {
  promotion_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: { type: DataTypes.STRING, allowNull: false },
  size_of_discount: { type: DataTypes.INTEGER, allowNull: true }, //< 100
  name_of_shop: { type: DataTypes.STRING, allowNull: false },
  date_from: { type: DataTypes.DATEONLY, allowNull: false },
  date_to: { type: DataTypes.DATEONLY, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  link: { type: DataTypes.STRING, allowNull: false },
});

module.exports = {
  FeedbackForm,
  NewsletterForm,
  Promotions,
};
