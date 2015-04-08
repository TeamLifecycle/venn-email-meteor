VennEmail = {}

// TODO cleanup, this is kinda messy

vennEmailNpm = Npm.require('venn-email')
vennEmailNpm.sendCopy = vennEmailNpm.send

vennEmailNpm.send = function(from, to, subject, msg) {
	var response = Async.runSync(function(done) {
	  vennEmailNpm.sendCopy(from, to, subject, msg, function(err, result) {
	  	done(err, result)
	  })
	});
	return response.result;
}

VennEmail = vennEmailNpm;
VennEmail.initialize = vennEmailNpm.initialize;
VennEmail.send = vennEmailNpm.send;