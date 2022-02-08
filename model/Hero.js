const mongoose = require("../database");

const Schema = mongoose.Schema;

const { ObjectId, String, Number } = Schema.Types;

let hero = new Schema({
  id: { type: ObjectId, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  power: {
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
  },
  createdAt: { type: Date, default: Date.now(), required: true },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("heros", hero);
