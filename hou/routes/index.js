var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'gqq123..',
  database : 'item'
});

/* GET home page. */
router.post('/list', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*")
  connection.query("SELECT * FROM baobao",function(err, rows, fields){
  	res.send(rows)
  })
});

router.post('/add',function(req,res,next){
	res.header("Access-Control-Allow-Origin","*")
	var b1=req.body.a1;
	var b2=req.body.a2;
	connection.query('INSERT INTO baobao (name,title) VALUES ("'+b1+'","'+b2+'")',function(err, rows, fields){
		res.send(rows)
	})
})

module.exports = router;
