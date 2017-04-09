
var express = require('express')
var BloomFilter = require('bloom-filter')
var app = express()

app.get('/blockhash/:blockhash/fname/:fname', function (req, res) {
	ar bloom = new BloomFilter(
  16 * 256, // number of bits to allocate.
  16        // number of hash functions.
);

// Add some elements to the filter.
bloom.add("testing");
var fs = require('fs');
var dict;
fs.readFile('C:\\Users\\jayas\\Documents\\BlockHashDictionary.txt','utf8', function(err,data) {
	if(err) throw err;
	dict = JSON.parse(data);
  
});

var ret;
var fname = req.params.fname;
var key = req.params.blockhash;
if(key in dict) {
	ret = {"duplicate":"true", "fname": dict[key]}
}
else {
	bloom.add(key);
	dict[blockhash] = fname;
	ret = {"duplicate":"false", "fname": fname}

}
});
