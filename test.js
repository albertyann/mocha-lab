var assert  = require("assert")
var test    = require('unit.js');

var request = test.httpAgent("http://localhost");

describe('User metohds', function(){
	it('/user/login 003 user no exist', function(done){
		request.post('/user/login')
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.send({"Account": "18614048603x", "Password": "e10adc3949ba59abbe56e057f20f883e"})
			.expect(200)
			.end(function(err, res) {
				test.assert.equal(res.body.code,  '003');
				done();
			});
	});
	it('/user/login 0 user login succee', function(done){
		request.post('/user/login')
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.send({"Account": "18614048603", "Password": "e10adc3949ba59abbe56e057f20f883e"})
			.expect(200)
			.end(function(err, res) {
				test.assert.equal(res.body.code,  '0');
				done();
			});
	});
	it('/user/login 006 password error', function(done){
		request.post('/user/login')
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.send({"Account": "18614048603", "Password": "e10adc3949ba59abbe56e057f20f883ex"})
			.expect(200)
			.end(function(err, res) {
				test.assert.equal(res.body.code,  '006');
				done();
			});
	});
	it('/user/register 0 register success', function(done){
		request.get('/user/register')
			.expect(200)
			.end(function(err, res) {
				test.assert.equal(res.body.code,  '0');
				done();
			});
	})
});

describe('Firends mehtods', function(){
});
