
describe("JSIntro Test Suite", function(){
	var JSIntro = require("../../src/JSIntro");

	describe("JSIntro-Sum", function(){

		it("sum of 2 and 3 is 5", function(){

			var i = JSIntro.Sum(2,3);
			expect(i).toEqual(5);
		});

		it("sum of -1 and 3 is 2", function(){

			var i = JSIntro.Sum(-1,3);
			expect(i).toEqual(2);
		});

	});

});

