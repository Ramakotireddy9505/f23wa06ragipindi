var express = require('express');
var router = express.Router();
/* GET computation page. */
router.get('/', function(req, res, next) {
    let x = Math.floor(Math.random() * 100);
    x=x.toFixed(2)
    if (req.query.x != undefined) {
        x = parseFloat(req.query.x);
    }
    let num1 =  Math.atan(x);
    let num2 =  Math.exp(x);
    let num3 = Math.expm1(x);
    res.render('computation', { x: x, atan: num1,
        exp: num2, expm1: num3 });
});
module.exports = router;



