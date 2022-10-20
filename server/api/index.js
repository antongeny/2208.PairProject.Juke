//const express = require("express");
const router = require("express").Router();

// connect your API routes here!

//localhost:8080/api/albums
const userRouter = require("./album");
router.use("/albums", userRouter);

module.exports = router;
