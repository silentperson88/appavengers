const express = require("express");
const Profile = require("../model/Profile");
const profileRouter = express.Router();

//profile data import
profileRouter.get("/", (req, res) => {
  Profile.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ message: err }));
});

//profile data creater
profileRouter.post("/createprofile", (req, res) => {
  const profile = new Profile({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    description: req.body.description,
  });

  profile
    .save()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ message: err }));
});

//Profile Update
profileRouter.patch("/profileupdate/:personID", (req, res) => {
  Profile.updateOne(
    { _id: req.params.personID },
    {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        description: req.body.description,
      },
    }
  )
    .then(() => res.status(200).json({ message: "Profile updated" }))
    .catch((err) => res.status(400).json({ message: err }));
});

//Profile remove(Delete)
profileRouter.delete("/removeprofile/:personID", (req, res) => {
  Profile.remove({ _id: req.params.personID })
    .then(() => res.status(200).json({ message: "Profile Deleted" }))
    .catch((err) => res.status(400).json({ message: err }));
});
module.exports = profileRouter;
