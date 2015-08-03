
describe("Tutorial Test Suite", function(){
	var tutorial = require("../../src/Tutorial");

		it("should run tutorials", function(){
			tutorial.Variables();
			tutorial.WeakTyping();
			tutorial.DataTypes();
			tutorial.Arrays();
			tutorial.Objects();
			tutorial.InstanceOf();
			tutorial.Serialization();
			
		});

});

