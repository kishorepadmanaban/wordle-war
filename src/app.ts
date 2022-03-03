import express from "express";
import http from "http";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import fileUpload from "express-fileupload";
import { Server } from "socket.io";
import Logger from "./helpers/logger.helper";
import authRoute from "./routes/v1/user.route";
import connectDB from "./db";
import { initAWS } from "./helpers/s3.helper";
import initSocketIO from "./helpers/socker.helper";

// create server
const app = express();
const server = http.createServer(app);
const io = new Server(server);

function assignId(req, res, next) {
  req.id = nanoid(10);
  next();
}

// config dotenv
dotenv.config();

app.use(assignId);

//Init logger
Logger(app);

//Init AWS
initAWS();

//InitSocketServer
initSocketIO(io);

// connect mongoose
if (process.env.NODE_ENV === "test") {
  process.env.DB = process.env.TEST_DB;
}
// connectDB();

app.set("view engine", "ejs");

//BodyParser
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// set mongoose as global
mongoose.Promise = global.Promise;

//To enable Cross-Origin Resource Sharing
let domain = "*";
if (process.env.NODE_ENV === "dev") {
  domain = "*";
}
app.use(
  cors({
    origin: domain,
  })
);

// fileUpload
app.use(fileUpload());

// routes
app.use("/api/v1/auth", authRoute);

//Error Handling
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV === "production") {
    res.status(500).send({ desc: err.desc || "Something Went Wrong" });
    console.error(err);
  } else {
    console.error(err);
    res.status(500).send({ desc: err.desc, stack: err.stack, message: err.message });
  }
});

export default server;
