vennEmail = Npm.require('venn-email')

vennEmail.initialize("6644bb87bcd7fceb2cd53436")

var response = Async.runSync(function(done) {
  vennEmail.send("from@email.com", "timmyg13@gmail.com", "sub88tgtg#2", "msg9917", function(err, result) {
  	console.log("result!!", result)
  	done(err, result)
  })
});

console.log(response.result); // 1001