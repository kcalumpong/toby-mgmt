const db = require("../models");

module.exports = {


   findAll: (req, res) => {
      db.Employee.findAll({
         include: [{
            model: Document
         }]
      })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },

   getEmployee: (req, res) => {
      db.Employee.findAll({
         include: [{
            model: Document,
            where: { name: sequelize.col("Employee.username") }
         }]
      })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },
   createPersonal: (req, res) => {
      db.Employee.create({
         genderInput: req.body.genderInput,
         firstName: req.body.firstName,
         middleName: req.body.middleName,
         lastName: req.body.lastName,
         month: req.body.month,
         day: req.body.day,
         year: req.body.year,
         workEmail: req.body.workEmail,
         personalEmail: req.body.personalEmail,
         phoneNumber: req.body.phoneNumber,
         streetAddress: req.body.streetAddress,
         city: req.body.city,
         state: req.body.state,
         zipcode: req.body.zipcode,
         countryCode: req.body.countryCode,
         ssOne: req.body.ssOne,
         ssTwo: req.body.ssTwo,
         ssThree: req.body.ssThree,
         emergencyContactFirstNameOne: req.body.emergencyContactFirstNameOne,
         emergencyContactLastNameOne: req.body.emergencyContactLastNameOne,
         emergencyContactPhoneOneCountry: req.body.emergencyContactPhoneOneCountry,
         emergencyContactPhoneOne: req.body.emergencyContactPhoneOne,
         emergencyContactFirstNameTwo: req.body.emergencyContactFirstNameTwo,
         emergencyContactLastNameTwo: req.body.emergencyContactLastNameTwo,
         emergencyContactPhoneTwoCountry: req.body.emergencyContactPhoneTwoCountry,
         emergencyContactPhoneTwo: req.body.emergencyContactPhoneTwo
      })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },


   createJob: (req, res) => {
      db.Employee.create({
         username: req.body.username,
         employeeNumber: req.body.employeeNumber,
         status: req.body.status,
         hireDate: req.body.hireDate,
      })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },
  
   createJobInformation: (req, res) => {
      db.Employee.create({
         username: req.body.username,
         employmentDate: req.body.employmentDate,
         department: req.body.department,
         location: req.body.location,
         title: req.body.title,
         reportsTo: req.body.reportsTo,
      })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },

   createCompensation: (req, res) => {
      db.Employee.create({
         username: req.body.username,
         compensationDate: req.body.compensationDate,
         hourlyPayRate: req.body.hourlyPayRate,
         salaryPayRate: req.body.salaryPayRate,
         paySchedule: req.body.paySchedule,
         changeReason: req.body.changeReason
      })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },



   createAsset: (req, res) => {
      db.Employee.create({
         category: req.body.category,
         description: req.body.description,
         notes: req.body.notes,
         dateAssigned: req.body.dateAssigned,
         dateReturned: req.body.dateReturned
      })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },


   updatePersonal: (req, res) => {
      db.Employee.update({
         genderInput: req.body.genderInput,
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         emailAddress: req.body.emailAddress,
         phoneNumber: req.body.phoneNumber,
         streetAdress: req.body.streetAdress,
         city: req.body.city,
         state: req.body.state,
         zipcode: req.body.zipcode,
         emergencyContactNameOne: req.body.emergencyContactNameOne,
         emergencyContactPhoneOne: req.body.emergencyContactPhoneOne,
         emergencyContactNameTwo: req.body.emergencyContactNameTwo,
         emergencyContactPhoneTwo: req.body.emergencyContactPhoneTwo,
      },
         {
            include: [db.Document]
         },
         {
            where: {
               id: req.params.id
            }
         })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },

   updateJob: (req, res) => {
      db.Employee.update({
         employeeNumber: req.body.employeeNumber,
         status: req.body.status,
         hireDate: req.body.hireDate,
      },
         {
            include: [db.Document]
         },
         {
            where: {
               id: req.params.id
            }
         })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },
   updateJobInformation: (req, res) => {
      db.Employee.update({
         employmentDate: req.body.employmentDate,
         department: req.body.department,
         location: req.body.location,
         title: req.body.title,
         reportsTo: req.body.reportsTo,
      },
         {
            include: [db.Document]
         },
         {
            where: {
               id: req.params.id
            }
         })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },

   updateCompensation: (req, res) => {
      db.Employee.update({
         compensationDate: req.body.compensationDate,
         hourlyPayRate: req.body.hourlyPayRate,
         salaryPayRate: req.body.salaryPayRate,
         paySchedule: req.body.paySchedule,
         changeReason: req.body.changeReason
      },
         {
            include: [db.Document]
         },
         {
            where: {
               id: req.params.id
            }
         })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },


   updateAsset: (req, res) => {
      db.Employee.update({
         category: req.body.category,
         description: req.body.description,
         notes: req.body.notes,
         dateAssigned: req.body.dateAssigned,
         dateReturned: req.body.dateReturned
      },
         {
            include: [db.Document]
         },
         {
            where: {
               id: req.params.id
            }
         })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },


   // create: (req, res) => {
   //    db.Employee.create({
   //       employeeNumber: req.body.employeeNumber,
   //       username: req.body.username,
   //       status: req.body.status,
   //       genderInput: req.body.genderInput,
   //       firstName: req.body.firstName,
   //       middleName: req.body.middleName,
   //       lastName: req.body.lastName,
   //       month: req.body.month,
   //       day: req.body.day,
   //       year: req.body.year,
   //       emailAddress: req.body.emailAddress,
   //       phoneNumber: req.body.phoneNumber,
   //       streetAdress: req.body.streetAdress,
   //       city: req.body.city,
   //       state: req.body.state,
   //       zipcode: req.body.zipcode,
   //       socialSecurity: req.body.socialSecurity,
   //       emergencyContactNameOne: req.body.emergencyContactNameOne,
   //       emergencyContactPhoneOne: req.body.emergencyContactPhoneOne,
   //       emergencyContactNameTwo: req.body.emergencyContactNameTwo,
   //       emergencyContactPhoneTwo: req.body.emergencyContactPhoneTwo,
   //       hireDate: req.body.hireDate,
   //       department: req.body.department,
   //       location: req.body.location,
   //       title: req.body.title,
   //       reportsTo: req.body.reportsTo,
   //       compensationDate: req.body.compensationDate,
   //       hourlyPayRate: req.body.hourlyPayRate,
   //       salaryPayRate: req.body.salaryPayRate,
   //       payType: req.body.payType,
   //       paySchedule: req.body.paySchedule,
   //       changeReason: req.body.changeReason,
   //       category: req.body.category,
   //       description: req.body.description,
   //       assets: req.body.assets,
   //       dateAssigned: req.body.dateAssigned,
   //       dateReturned: req.body.dateReturned
   //    })
   //       .then((dbEmployee) => res.json(dbEmployee))
   //       .catch(err => { console.error(err); res.send(500) });
   // },

   // update: (req, res) => {
   //    db.Employee.update({
   //       status: req.body.status,
   //       genderInput: req.body.genderInput,
   //       firstName: req.body.firstName,
   //       lastName: req.body.lastName,
   //       emailAddress: req.body.emailAddress,
   //       phoneNumber: req.body.phoneNumber,
   //       streetAdress: req.body.streetAdress,
   //       city: req.body.city,
   //       state: req.body.state,
   //       zipcode: req.body.zipcode,
   //       emergencyContactNameOne: req.body.emergencyContactNameOne,
   //       emergencyContactPhoneOne: req.body.emergencyContactPhoneOne,
   //       emergencyContactNameTwo: req.body.emergencyContactNameTwo,
   //       emergencyContactPhoneTwo: req.body.emergencyContactPhoneTwo,
   //       hireDate: req.body.hireDate,
   //       department: req.body.department,
   //       location: req.body.location,
   //       title: req.body.title,
   //       reportsTo: req.body.reportsTo,
   //       compensationDate: req.body.compensationDate,
   //       hourlyPayRate: req.body.hourlyPayRate,
   //       salaryPayRate: req.body.salaryPayRate,
   //       payType: req.body.payType,
   //       paySchedule: req.body.paySchedule,
   //       changeReason: req.body.changeReason,
   //       category: req.body.category,
   //       description: req.body.description,
   //       dateAssigned: req.body.dateAssigned,
   //       dateReturned: req.body.dateReturned
   //    },
   //       {
   //          include: [db.Document]
   //       },
   //       {
   //          where: {
   //             id: req.params.id
   //          }
   //       })
   //       .then((dbEmployee) => res.json(dbEmployee))
   //       .catch(err => { console.error(err); res.send(500) });
   // },
   //EXTRA??
   remove: (req, res) => {
      db.Employee.destroy({

         // include: [db.Document],

         where: {
            id: req.params.id
         },
      })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },
}