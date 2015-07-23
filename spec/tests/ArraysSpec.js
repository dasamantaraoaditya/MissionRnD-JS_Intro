	var JSIntro = require("../../src/Arrays");
	describe("JSIntro-SumOfArray", function(){

		it("sum of 2 and 3 is 5", function(){

			var i = JSIntro.SumOfArray([2,3]);
			expect(i).toEqual(5);
		});

	});
	describe("JSIntro-SumOfUniqueNumbers", function(){

		it("sum of 2,3,3,2 is 5", function(){

			var i = JSIntro.SumOfUniqueNumbers([2,3,3,2]);
			expect(i).toEqual(5);
		});

		it("sum of 2,3,4 is 9", function(){

			var i = JSIntro.SumOfUniqueNumbers([2,3,4]);
			expect(i).toEqual(9);
		});
		it("sum of 1,2,3,4,3,3 is 10", function(){

			var i = JSIntro.SumOfUniqueNumbers([1,2,3,4,3,3]);
			expect(i).toEqual(10);
		});
	});

	describe("JSIntro-SumOfDiagonalCells", function(){

		it("should check for non-array", function(){

			var sum = JSIntro.SumOfDiagonalCells("5,6,7");

			expect(isNaN(sum)).toEqual(true);
		});

		it("should check for non-2d arrays", function(){

			var arr = [1,2,3];

			var sum = JSIntro.SumOfDiagonalCells(arr);

			expect(isNaN(sum)).toEqual(true);
		});

		it("should check for arrays with non-equal dimensions", function(){

			var arr = [[1,2,3],[2,3,4],[3,4,5],[4,5,6],[5,6,7]];

			var sum = JSIntro.SumOfDiagonalCells(arr);

			expect(isNaN(sum)).toEqual(true);
		});

		it("should return 9", function(){

			var arr = [[1,2,3],[2,3,4],[3,4,5]];

			var sum = JSIntro.SumOfDiagonalCells(arr);

			expect(sum).toEqual(9);
		});
	});




