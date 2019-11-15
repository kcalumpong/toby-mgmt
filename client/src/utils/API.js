import axios from "axios";

export default {

  // Gets all Employees
  findAll: function() {
    return axios.get("/api/employees");
  },

  // Gets the Employee with the given id
  getEmployee: function(username) {
    return axios.get("/api/employees/" + username);
  },

  // Deletes the Employee with the given id
  deleteEmployee: function(id) {
    return axios.delete("/api/employees/delete" + id);
  },

  // Saves Employee Personal Info to the database
  savePersonal: function(employeeData) {
    return axios.post("/api/employees/create-personal", employeeData);
  },

  // Save Employee Job Info to the database
  saveJob: function(employeeData) {
    return axios.post("/api/employees/create-job", employeeData);
  },

  // Saves Employee Asset Info to the database
  saveAsset: function(employeeData) {
    return axios.post("/api/employees/create-asset", employeeData);
  },

  // Update Employee Personal Info to the database
  updateEmployeeP: function(id) {
    return axios.get("/api/employees/update-personal-info" + id);
  },

  // Update Employee Personal Info to the database
  updateEmployeeP: function(id) {
    return axios.get("/api/employees/update-personal-info" + id);
  },

  // Update Employee Job Info to the database
  updateEmployeeJ: function(id) {
    return axios.get("/api/employees/update-job-info" + id);
  },

  // Update Employee Asset Info to the database
  updateEmployeeA: function(id) {
    return axios.get("/api/employees/update-asset-info" + id);
  },

  // Saves an Employee Document Name to the database
  saveDocument: function(documentData) {
    return axios.post("/api/employees/save-document-name", documentData);
  },

  // Delete an Employee Document Name to the database
  deleteDocument: function(id) {
    return axios.delete("/api/employees/delete-document" + id);
  },
  // Upload File to S3 Bucket
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
