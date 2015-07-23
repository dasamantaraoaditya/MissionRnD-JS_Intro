	var JSIntro = require("../../src/Objects");
	describe("JSIntro-GetObjectPropertyNames", function(){


		it("should return nothing", function(){

			var propertyNames = JSIntro.GetObjectPropertyNames(null);
			expect(propertyNames).toEqual(null);

		});

		it("should return property names", function(){

			var Contact = function(){
				this.firstName = "Bill";
				this.lastName = "Gates";
			}

			var College = function(){
				this.Name = "Harvard University";
				this.Address = "Cambridge, MA 02138, United States";
			}

			var propertyNames = JSIntro.GetObjectPropertyNames(new Contact());
			expect(propertyNames.length).toEqual(2);
			expect(propertyNames[0]).toEqual("firstName");
			expect(propertyNames[1]).toEqual("lastName");

			var propertyNames = JSIntro.GetObjectPropertyNames(new College());
			expect(propertyNames.length).toEqual(2);
			expect(propertyNames[0]).toEqual("Name");
			expect(propertyNames[1]).toEqual("Address");
		});
	});

	describe("JSIntro-GetObjectPropertyValues", function(){

		it("should return nothing", function(){

			var propertyValues = JSIntro.GetObjectPropertyValues(null);
			expect(propertyValues).toEqual(null);

		});

		it("should return property values", function(){

			var Contact = function(){
				this.firstName = "Bill";
				this.lastName = "Gates";
			}

			var College = function(){
				this.Name = "Harvard University";
				this.Address = "Cambridge, MA 02138, United States";
			}

			var propertyValues = JSIntro.GetObjectPropertyValues(new Contact());
			//console.log(propertyValues);
			expect(propertyValues.length).toEqual(2);
			expect(propertyValues[0]).toEqual((new Contact()).firstName);
			expect(propertyValues[1]).toEqual((new Contact()).lastName);

			propertyValues = JSIntro.GetObjectPropertyValues(new College());
			// console.log(propertyValues);
			expect(propertyValues.length).toEqual(2);
			expect(propertyValues[0]).toEqual((new College()).Name);
			expect(propertyValues[1]).toEqual((new College()).Address);
		});
	});

