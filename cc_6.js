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
const employee1 = new Employee('david', 'fireFighting');


console.log(employee1.describe()); //"david works in the fireFighting department."
//Step 3 Create a SubClass Manger 
class Manager extends Employee{
  constructor(name, department, teamSize){
    super(name, department);
    this.teamSize= teamSize;
  }
  describe() {
    // Override the parent's describe method
    return `${super.describe()} They manage a team of ${this.teamSize} people.`;
  }
}

// Example usage:
const manager1 = new Manager("Emma Leyva", "Sales", 10);
console.log(manager1.describe()); // 
// Step 4 Adding new employees 
