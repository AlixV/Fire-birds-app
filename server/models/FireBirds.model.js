const { model, Schema } = require("mongoose");

const fireBirdSchema = new Schema({
  name: String,
  powers: String,
  colors: String,

  size: {
    type: String,
    enum: ["petit", "moyen", "grand", "immense"],
  },

  picture: String,
});

module.exports = model("firebird", fireBirdSchema);
