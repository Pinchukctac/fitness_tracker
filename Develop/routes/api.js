const express = require("express");
const app = express();
const path = require("path");
const db = require("../models")

//view all workouts
app.get("/api/workouts", (req, res) => {
    db.workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});

//create new workout
app.post("/api/workouts", (req, res) => {
  db.workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//delete workout
app.delete("/api/workouts", ({ body }, res) => {
  db.workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});

//update workout
app.put("/api/workouts/:id", ({ body, params }, res) => {
  db.workout.findByIdAndUpdate(params.id, {$push: {exercises: body}})
    .then(dbUpdatedData => {
      res.json(dbUpdatedData);
    })
    .catch(err => {
      res.json(err);
    });
});

//view all workouts in charts
app.get("/api/workouts/range", (req, res) => {
  db.workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = app;