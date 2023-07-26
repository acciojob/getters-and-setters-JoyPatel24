//complete this code
class Person {
	constructor(name , age){
		this.Name = name
		this.Age = age
	}

	// Getter for name
	get name(){
		return this.Name
	}

	// Setter for name
	set age(){
		return this.Age
	}
}

class Student extends Person {
	study(){
		console.log(`${this.Name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.Name} is studying`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
