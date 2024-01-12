const express = require("express");
const router = express.Router();

// const { auth } = require("../middleware/auth");
// const { USER_TYPE: { ADMIN } } = require("../json/enums.json");

const {
  USER: { VALIDATOR, APIS },
} = require("../contollers");

// // POST METHOD 
router.post("/signup",(req,res,next)=>{
  console.log(req.body);
  next();
}, VALIDATOR.signup, APIS.signUp);
// router.post("/signin", VALIDATOR.signIn, APIS.signIn);

module.exports = router;
