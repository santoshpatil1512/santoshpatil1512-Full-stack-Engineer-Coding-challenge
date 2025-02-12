class SantaModel {
    static assignSecretSanta(employees, previousAssignments) {
      const assignments = [];
      const assigned = new Set();
  
      employees.forEach((employee, index) => {
        let secretChildIndex = (index + 1) % employees.length;
  
        while (
          secretChildIndex === index ||
          assigned.has(secretChildIndex) ||
          this.isPreviousAssignment(employee, employees[secretChildIndex], previousAssignments)
        ) {
          secretChildIndex = (secretChildIndex + 1) % employees.length;
        }
  
        assigned.add(secretChildIndex);
        assignments.push({
          Employee_Name: employee.Employee_Name,
          Employee_EmailID: employee.Employee_EmailID,
          Secret_Child_Name: employees[secretChildIndex].Employee_Name,
          Secret_Child_EmailID: employees[secretChildIndex].Employee_EmailID,
        });
      });
  
      return assignments;
    }
  
    static isPreviousAssignment(employee, secretChild, previousAssignments) {
      return previousAssignments.some(
        (assignment) =>
          assignment.Employee_EmailID === employee.Employee_EmailID &&
          assignment.Secret_Child_EmailID === secretChild.Employee_EmailID
      );
    }
  }
  
  module.exports = SantaModel;