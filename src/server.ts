import "reflect-metadata"
import "./database/index"

import express, { Router } from "express";
import router from "./rout"

const app = express();

app.use(express.json())

app.use(router)

app.listen(3333)