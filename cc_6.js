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
const employee1 = Employee("Emma", "Sales");
console.log(employee1.describe()); // "Name: Emma, Department: Sales"


const manager1 = Manager("Sophia", "Project Managment", 15);
console.log(manager1.describe()); // "Name: Sophia, Department: Project managment"

//Step 4 addin new employees 
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name, department);
  }

  getDetails() {
    return `${this.name} is a manager in the ${this.department} department.`;
  }
}


const employee2 = new Employee("Sara Kazmouz", "Interior Designer");
const manager2 = new Manager("Brody Smith", "Realtor");

console.log(employee2.describe()); // Output: "Sara Kazmouz works in the Interior Designer department"
console.log(manager2.getDetails()); // Output: "Brody Smith is a manager in the Realtor department."

//Step 5 
class Company {
  constructor() {
    this.employees = []; // Initialize employees as an empty array
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }listEmployees() {
    if (this.employees.length === 0) {
      console.log("No employees in the company.");
      return;
    }

    this.employees.forEach(employee => {
      // Assuming employee objects have a 'description' property or a method like getDescription()
      if (employee.description) {
        console.log(employee.description);
      } else if (typeof employee.getDescription === 'function') {
        console.log(employee.getDescription());
      } else {
        console.log("Employee details not available for:", employee);
      }
    });
  }
}