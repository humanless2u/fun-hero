const express = require("express");
const router = express.Router();

// Fake DB
let heroList = [
  {
    id: 01,
    name: "super-dog",
    age: 32,
    power: {
      attack: 60,
      defense: 30,
    },
  },
  {
    id: 02,
    name: "blaster",
    age: 21,
    power: {
      attack: 80,
      defense: 60,
    },
  },
  {
    id: 03,
    name: "damanic",
    age: 17,
    power: {
      attack: 700,
      defense: 50,
    },
  },
];

router.get("/all", (req, res) => {
  return res.send(heroList);
});

router.put("/:id", (req, res) => {
  let id = req.params.id - 1;
  let {
    name,
    age,
    power: { attack, defense },
  } = req.body;

  heroList[id].name = name;
  heroList[id].age = age;
  heroList[id].power.attack = attack;
  heroList[id].power.defense = defense;

  return res.send(heroList[id]);
});

router.post("/new", (req, res) => {
  let {
    id,
    name,
    age,
    power: { attack, defense },
  } = req.body;

  heroList.push({ id, name, age, power: { attack, defense } });

  return res.send(heroList);
});

router.delete("/delete/:id", (req, res) => {
  let id = req.params.id - 1;

  heroList.splice(id);

  return res.send(heroList);
});

module.exports = router;
