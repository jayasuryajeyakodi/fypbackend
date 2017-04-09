var express = require('express')
var app = express()

app.get('/filetag/:filetag/userid/:userid', function (req, res) {
	var permission = { "jaya" : "1", "gobi" : "2", "nandha" : "3"}
	var ret = {"filetoken": req.params.filetag, "userid": req.params.userid, "success":"false"}
	if(permission[req.params.userid] > 0)
  		ret.success = "true";

  	res.send(ret)
})

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})

