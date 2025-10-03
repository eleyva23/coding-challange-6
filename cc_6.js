// step 2 Creating a Base 
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  // The describe() method
  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

// Example usage:
const employee = new Employee('david', 'fireFighting');


console.log(employee.describe()); //"david works in the fireFighting department."

//Step 3 Create a SubClass Manger

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `Name: ${this.name}, Department: ${this.department}`;
  }
}


class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); 
    this.teamSize = teamSize;
  }

  describe() {
    
    return `${super.describe()}, Team Size: ${this.teamSize}`;
  }
}

// Example Usage:
const employee1 = new Employee("Emma", "Sales");
console.log(employee1.describe()); // "Name: Emma, Department: Sales"


const manager1 = new Manager("Sophia", "Project Managment", 15);
console.log(manager1.describe()); // "Name: Sophia, Department: Project managment"

//Step 4 

