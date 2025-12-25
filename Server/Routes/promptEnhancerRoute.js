




const express = require("express")
const promptEnhancer = require("./../Controllers/promptEnhancer")


const promptEnhancerRoute = express.Router()
promptEnhancerRoute.route("/").post(promptEnhancer)










module.exports = promptEnhancerRoute