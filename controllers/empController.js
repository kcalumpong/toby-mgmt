const db = require("../models");

let personal;
let job;
let jobInfo;
let comp;
let assets;

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

   findAllProfiles: (req, res) => {
      personal = req.body.personal;
      job = req.body.job;
      jobInfo = req.body.jobInformation[0];
      db.Employee.findAll({
         id: req.body.id,
         firstName: personal.firstName,
         lastName: personal.lastName,
         title: jobInfo.title,
         include: [{
            model: Document,
            where: { name: sequelize.col("Document.name") }
         }]
      })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },

   getEmployee: (req, res) => {
      personal = req.body.personal;
      job = req.body.job;
      jobInfo = req.body.jobInformation[0];
      db.Employee.findOne({
         id: req.body.id,
         firstName: personal.firstName,
         lastName: personal.lastName,
         title: jobInfo.title,
         include: [{
            model: Document,
            where: { name: sequelize.col("Document.name") }
         }]
      },
      {
         where: {
            id: req.params.id
      }
   })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },
   createPersonal: (req, res) => {
      console.warn(req.body);
         personal = req.body.personal;
         job = req.body.job;
         jobInfo = req.body.jobInformation[0];
         comp = req.body.compensation[0];
         assets = req.body.assets[0];
      db.Employee.create({
         genderInput: personal.genderInput,
         firstName: personal.firstName,
         middleName: personal.middleName,
         lastName: personal.lastName,
         month: personal.month,
         day: personal.day,
         year: personal.year,
         workEmail: personal.workEmail,
         personalEmail: personal.personalEmail,
         phoneNumber: personal.phoneNumber,
         streetAddress: personal.streetAddress,
         city: personal.city,
         state: personal.state,
         zipcode: personal.zipcode,
         countryCode: personal.countryCode,
         ssOne: personal.ssOne,
         ssTwo: personal.ssTwo,
         ssThree: personal.ssThree,
         emergencyContactFirstNameOne: personal.emergencyContactFirstNameOne,
         emergencyContactLastNameOne: personal.emergencyContactLastNameOne,
         emergencyContactPhoneOneCountry: personal.emergencyContactPhoneOneCountry,
         emergencyContactPhoneOne: personal.emergencyContactPhoneOne,
         emergencyContactFirstNameTwo: personal.emergencyContactFirstNameTwo,
         emergencyContactLastNameTwo: personal.emergencyContactLastNameTwo,
         emergencyContactPhoneTwoCountry: personal.emergencyContactPhoneTwoCountry,
         emergencyContactPhoneTwo: personal.emergencyContactPhoneTwo,
         employeeNumber: job.employeeNumber,
         status: job.status,
         hireDate: job.hireDate,
         employmentDate: jobInfo.employmentDate,
         department: jobInfo.department,
         location: jobInfo.location,
         title: jobInfo.title,
         reportsTo: jobInfo.reportsTo,
         compensationDate: comp.compensationDate,
         hourlyPayRate: comp.hourlyPayRate,
         salaryPayRate: comp.salaryPayRate,
         paySchedule: comp.paySchedule,
         changeReason: comp.changeReason,
         category: assets.category,
         description: assets.description,
         notes: assets.notes,
         dateAssigned: assets.dateAssigned,
         dateReturned: assets.dateReturned
      })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },


   createJob: (req, res) => {
      db.Employee.create({
         employeeNumber: req.body.employeeNumber,
         status: req.body.status,
         hireDate: req.body.hireDate,
      })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },
  
   createJobInformation: (req, res) => {
      db.Employee.create({
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
         streetAddress: req.body.streetAddress,
         city: req.body.city,
         state: req.body.state,
         zipcode: req.body.zipcode,
         emergencyContactFirstNameOne: req.body.emergencyContactFirstNameOne,
         emergencyContactLastNameOne: req.body.emergencyContactLastNameOne,
         emergencyContactPhoneOneCountry: req.body.emergencyContactPhoneOneCountry,
         emergencyContactPhoneOne: req.body.emergencyContactPhoneOne,
         emergencyContactFirstNameTwo: req.body.emergencyContactFirstNameTwo,
         emergencyContactLastNameTwo: req.body.emergencyContactLastNameTwo,
         emergencyContactPhoneTwoCountry: req.body.emergencyContactPhoneTwoCountry,
         emergencyContactPhoneTwo: req.body.emergencyContactPhoneTwo
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