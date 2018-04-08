         function Dog (name) {
                this.name = name;
                var hello = function() {
                	return "I am dog, but I can be e cat";
                }
        }

		Dog.prototype.hello = function() {
		  return "I am dog, but I can be cat!";
		}

		function Cat(name) {
		  Dog.call(this, name);  
		}

		var rex = new Dog('Rex');
		console.log(rex.hello());   //działa

		var garfield = new Cat('Garfield');
		console.log(garfield.name);		//działa
		console.log(garfield.hello());		//nie działa ```