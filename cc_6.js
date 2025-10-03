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


console.log(employee1.describe()); // Prints "Alice works in the Engineering department."
