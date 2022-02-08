const express = require("express");
const router = express.Router();

const Hero = require("../model/Hero");

router.get("/all", async (req, res) => {
  let herosList = await Hero.find();

  return res.send(herosList);
});

// router.put("/:name", async (req, res) => {
//   let {
//     name,
//     age,
//     power: { attack, defense },
//   } = req.body;

//   let updatedAt = Date.now();

//   let updatedHero = await Hero.findOneAndUpdate(req.params.name, {
//     name,
//     age,
//     power: { attack, defense },
//     updatedAt,
//   });

//   return res.send(updatedHero);
// });

router.post("/new", async (req, res) => {
  let {
    name,
    age,
    power: { attack, defense },
  } = req.body;

  let newHero = await Hero.create({ name, age, power: { attack, defense } });

  return res.send(newHero);
});

// router.delete("/delete/:id", (req, res) => {
//   let id = req.params.id - 1;

//   heroList.splice(id);

//   return res.send(heroList);
// });

module.exports = router;
