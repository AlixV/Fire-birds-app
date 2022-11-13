const router = require("express").Router();

const Bird = require("../models/FireBirds.model");

// Routes are prefixed with /api, cf app.js

router.get("/firebirds", (req, res, next) => {
  Bird.find()
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch(next);
});

// We could call it /createfirebirds ... as we want
router.post("/firebirds", async (req, res, next) => {
  try {
    const createdBird = await Bird.create(req.body);
    res.status(201).json(createdBird);
  } catch (e) {
    next(e);
  }
});

// ! Singular ! for the route to retreive juste 1 bird.
// don't forget the / at the end in your axios request !
router.get("/firebird/:id", async (req, res, next) => {
  try {
    const oneBird = await Bird.findById(req.params.id);
    res.status(200).json(oneBird);
  } catch (error) {
    next(error);
  }
});

router.delete("/firebird/:id/delete", (req, res, next) => {
  Bird.findByIdAndDelete(req.params.id)
    .then((killedBird) => {
      res.status(200).json(killedBird);
      console.log(killedBird);
    })
    .catch(next);
});

module.exports = router;
