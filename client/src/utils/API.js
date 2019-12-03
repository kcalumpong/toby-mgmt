import axios from "axios";

export default {
  login: (username, password) =>
    fetch("/api/auth/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }),
  signup: (username, password) =>
    fetch("/api/auth/signup", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }),
  logout: () => 
  fetch("/api/auth/", { 
    method: 'DELETE' }),
  
  checkAuth: () => fetch('/api/auth/session/'),


  // Gets all Employees
  // findAll: function () {
  //   return axios.get("/api/employees");
  // },

  findAllProfiles: () =>
  fetch("/api/employees", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify()
  }),

  // Gets the Employee with the given id
  // getEmployee: (id) => 
  //   fetch("/api/employees/" + id, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(id)
  //   }),
  
  getEmployee: function(id) {
    return axios.get("/api/employees/" + id);
  },

  // Deletes the Employee with the given id
  deleteEmployee: function (id) {
    return axios.delete("/api/employees/delete" + id);
  },

  // Platt Suggestion
  putPersonal: () =>
  fetch("/api/employees", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(this.state)
  })
  .then(res => res.json())
  .catch(err => console.log(err)),

  //Saving to DB from Employee.js
  savePersonal: (employeeData) =>
  fetch("/api/employees/create-personal", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(employeeData)
  },console.log(employeeData)),

  // Save Employee Job Info to the database
  saveJob: function (employeeData) {
    return axios.post("/api/employees/create-job", employeeData);
  },

  // Saves Employee Asset Info to the database
  saveAsset: function (employeeData) {
    return axios.post("/api/employees/create-asset", employeeData);
  },

  // Update Employee Personal Info to the database
  updateEmployeeP: function (id) {
    return axios.get("/api/employees/update-personal-info" + id);
  },

  // Update Employee Job Info to the database
  updateEmployeeJ: function (id) {
    return axios.get("/api/employees/update-job-info" + id);
  },

  // Update Employee Asset Info to the database
  updateEmployeeA: function (id) {
    return axios.get("/api/employees/update-asset-info" + id);
  },

  // Saves an Employee Document Name to the database
  saveDocument: function (documentData) {
    return axios.post("/api/employees/save-document-name", documentData);
  },

  // Delete an Employee Document Name to the database
  deleteDocument: function (id) {
    return axios.delete("/api/employees/delete-document" + id);
  },
  // Upload File to S3 Bucket
  uploadFile: function (acceptedFiles) {
    const file = new FormData()

    file.append("file", acceptedFiles[0]);

    return fetch("/api/employees/upload", {
      method: "POST",
      body: file
    }).then(r => r.json())
  }
};
