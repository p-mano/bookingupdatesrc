var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
	console.log("username: "+req.body.name);
	console.log("password: "+req.body.password);
	if(req.body.name == req.body.password){
		//  req.session.user = "available";
		//  req.session.role = "admin";
		res.send('success');
	}else{
		res.send('failure');
	}
  
});

module.exports = router;
