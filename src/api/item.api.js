const express = require("express");
const router = express.Router();
const controller = require("../controllers/item.controller");

module.exports = function(){
   // router.get("/", controller.getAllRooms);
    router.get("/", controller.getAllItems);
    router.post("/create", controller.createItem);
  //  router.post("/calculate", controller.calculateTotalCost);

    return router;
}