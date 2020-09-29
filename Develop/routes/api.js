const express = require("express");
const app = express();
const path = require("path");
const db = require("../models")

//view all workouts
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});

//create new workout
app.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//delete workout
app.delete("/api/workouts", ({ body }, res) => {
  db.Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});

//update workout
app.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(params.id, {$push: {exercises: body}})
    .then(dbUpdatedData => {
      res.json(dbUpdatedData);
    })
    .catch(err => {
      res.json(err);
    });
});

//view all workouts in charts
app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = app;