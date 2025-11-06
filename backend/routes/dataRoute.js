import express from "express";
const route=express.Router();

import {getHoldings,getPositions} from "../controllers/dataController.js";

route.get("/holdings",getHoldings);
route.get("/positions",getPositions);

export default route;