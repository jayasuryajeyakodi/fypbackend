var express = require('express')
var app = express()

var currentIndex = 0;
var list = [];


app.get('/masterFileName', function (req, res) {
	var ret = {"filetoken": 'sdfsdf'}

	var masterFileName = req.params.masterFileName;
	while(list[currentIndex].masterFileName == masterFileName) {
		var tempPointer = list[currentIndex].blockPointer;
		while(tempPointer < 1000) {
			tempPointer = list[tempPointer].
		}
		ans.push(tempPointer);
		currentIndex++;
	}
  res.send(ans);
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})

