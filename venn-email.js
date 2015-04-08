vennEmail = Npm.require('venn-email')


vennEmail.send2 = function(from, to, subject, msg) {
	var response = Async.runSync(function(done) {
	  vennEmail.send(from, to, subject, msg, function(err, result) {
	  	console.log("result!!!!", result)
	  	done(err, result)
	  })
	});
	return response.result;
}


vennEmail.initialize("6644bb87bcd7fceb2cd53436")
var result2 = vennEmail.send2("from@email.com", "timmyg13@gmail.com", "sub88tgtg#6", "msg9917");
console.log("result2", result2)