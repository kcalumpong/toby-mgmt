import axios from "axios";

export default {
  // Gets all Employee
  getEmployees: function() {
    return axios.get("/api/employees");
  },
  // Gets the Employee with the given id
  getEmployee: function(id) {
    return axios.get("/api/employees/" + id);
  },
  // Deletes the Employee with the given id
  deleteEmployee: function(id) {
    return axios.delete("/api/employees/" + id);
  },
  // Saves a Employee to the database
  saveEmployee: function(employeeData) {
    return axios.post("/api/employees", employeeData);
  },

  uploadFile: function(acceptedFiles) {
    
    const file = new FormData()
    
    file.append("file", acceptedFiles[0]);
    
    fetch("/api/employees/upload", {
      method: "POST",
      body: file
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
};
