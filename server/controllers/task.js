const express = require("express");
const model = require("../models/task");

const app = express.Router();

app
    .get("/", (req, res, next) => {
        model.GetAll()
            .then(user => {
                res.send(user);
                console.log(user);
            })
            .catch(next)
    })
    .post("/", (req, res, next) => {
        model.Add(req.body)
            .then(x => res.status(201).send(x))
            .catch(next)
    })

module.exports = app;