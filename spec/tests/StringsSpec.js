	var JSIntro = require("../../src/Strings");
	describe("JSIntro-ReverseString", function(){

		it("abc reversed is cba", function(){

			var str = JSIntro.ReverseString("abc");
			expect(str).toEqual("cba");
		});

		it("abcd reversed is dcba", function(){

			var str = JSIntro.ReverseString("abcd");
			expect(str).toEqual("dcba");
		});

		it("a reversed is a", function(){

			var str = JSIntro.ReverseString("a");
			expect(str).toEqual("a");
		});
	});

	describe("JSIntro-GetFirstNames", function(){

		it("should return nothing", function(){

			var firstNames = JSIntro.GetFirstNames(null);
			expect(firstNames).toEqual(null);
		});
		it("should return nothing", function(){

			var firstNames = JSIntro.GetFirstNames(";");
			expect(firstNames.length).toEqual(0);
		});
		it("should return nothing", function(){

			var firstNames = JSIntro.GetFirstNames("");
			expect(firstNames.length).toEqual(0);
		});
		it("should return Bill", function(){

			var firstNames = JSIntro.GetFirstNames("Gates,Bill");
			expect(firstNames[0]).toEqual("Bill");
			expect(firstNames.length).toEqual(1);
		});
		it("should return Bill,Steve,Larry", function(){

			var firstNames = JSIntro.GetFirstNames("Gates,Bill;Jobs,Steve;Page,Larry");
			expect(firstNames[0]).toEqual("Bill");
			expect(firstNames[1]).toEqual("Steve");
			expect(firstNames[2]).toEqual("Larry");
			expect(firstNames.length).toEqual(3);
		});

	});
	describe("JSIntro-CreateParagraph", function(){

		it("should return nothing", function(){

			var paragraph = JSIntro.CreateParagraph(null);
			expect(paragraph).toEqual(null);
		});

		it("should return empty", function(){

			var paragraph = JSIntro.CreateParagraph([]);
			expect(paragraph.length).toEqual(0);
		});

		it("should return Hello.", function(){

			var paragraph = JSIntro.CreateParagraph(["Hello"]);
			expect(paragraph).toEqual("Hello.");
		});

		it("should return Hello.World.", function(){

			var paragraph = JSIntro.CreateParagraph(["Hello","World"]);
			expect(paragraph).toEqual("Hello.World.");
		});

		it("should return One Fish.Two Fish.Red Fish", function(){

			var paragraph = JSIntro.CreateParagraph(["Microsoft Corporation was founded in the year 1975","Google was founded in the year 1998"]);
			expect(paragraph).toEqual("Microsoft Corporation was founded in the year 1975.Google was founded in the year 1998.");
		});
	});

