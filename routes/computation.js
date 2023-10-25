var express = require("express");
var router = express.Router();
router.get("/", function (req, res, next) {
 var randNumArr = Math.random() * 2;
 var rndNumArr = Math.round(randNumArr);

var arr = [Math.atan(), Math.exp(x), Math.expm1(x)];
  let response1 = `
  Function ${funObj[rndNumArr]} applied to x: ${x} the result is ${arr[rndNumArr].toFixed(3)}`;
  res.send(response1);

 if (req.query.x) {
  let x = req.query.x;
  var arr = [Math.atan(), Math.exp(x), Math.expm1(x)];
  var funObj = {
   0: "Math.atan()",
   1: "Math.exp()",
   2: "Math.expm1()",
  };

 }
 else {
  var randNumArr = Math.random() * 2;
  var rndNumArr = Math.round(randNumArr);
  var randNum = Math.random() * 10;
  var x = Math.round(randNum);
  var funObj = {
    0: "Math.atan()",
    1: "Math.exp()",
    2: "Math.expm1()",
  };
  var arr = [Math.atan(), Math.exp(x), Math.expm1(x)];
  let response = `
  Function ${funObj[rndNumArr]} applied to the random value for x from 1 to 10 is: ${x} and the result is ${arr[rndNumArr].toFixed(3)}`
  res.send(response);
 }
});
module.exports = router;