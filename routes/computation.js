const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {

  let x = req.query.x;
  if (!x) {
    x = Math.random() * 10;
  }

  let result;
  let functionName;

  switch (lastDigitOfID % 3) {
    case 0:
      result = Math.atan(x, 2);
      functionName = "Math.atan";
      break;
    case 1:
      result = Math.exp(x);
      functionName = "Math.exp";
      break;
    case 2:
      result = Math.expm1(x);
      functionName = "Math.expm1";
      break;
    default:
      result = 'Invalid last digit';
      functionName = 'Unknown function';
  }

  const response1 = `Function ${functionName} applied to x: ${x} the result is ${result.toFixed(3)}`;
  res.send(response1);
});

module.exports = router;




