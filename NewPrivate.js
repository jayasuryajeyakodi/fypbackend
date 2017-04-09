var express = require('express')
var app = express()

var currentIndex = 0;
var list = [];
var BlockObject = function(filetag, masterFileName, isExists, blockName) {
	this._filetag = filetag;
	this._masterFileName = masterFileName;
	this._isExists = isExists;
	this._blockName = blockName;
	this._indexPointer = currentIndex + 1;
	if(isExists == 1 && currentIndex !=0	) {
		var duplicateBlockIndex = 0; // need to update the code to find the duplicate block index
		this._blockPointer = list[duplicateBlockIndex]._blockPointer;
		list[duplicateBlockIndex]._blockPointer = currentIndex
	}
	else {
		this._blockPointer = blockName;
	}
};

app.get('/filetag/:filetag/masterFileName/:masterFileName/isExists/:isExists/blockName/:blockName', function (req, res) {
	var ret = {"filetoken": 'sdfsdf'}

	
	var obj = new BlockObject(req.params.filetag, req.params.masterFileName, req.params.isExists, req.params.blockName);
	
	list.push(obj);
	currentIndex++;
	list.forEach(function(entry) {
		console.log(entry);
	});
  res.send(obj)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

