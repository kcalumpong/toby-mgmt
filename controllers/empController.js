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

   findByUsername: (req, res) => {
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
         gender: req.body.gender,
         firstName: req.body.firstName,
         middleName: req.body.middleName,
         lastName: req.body.lastName,
         birthMonth: req.body.birthMonth,
         birthDay: req.body.birthDay,
         birthYear: req.body.birthYear,
         address: req.body.address,
         city: req.body.city,
         state: req.body.state,
         zipCode: req.body.zipCode,
         phone: req.body.phone,
         email: req.body.email,
         sSI: req.body.sSI
      })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },


   createJob: (req, res) => {
      db.Employee.create({
         employeeId: req.body.employeeId,
         username: req.body.username,
         empStatus: req.body.status,
         hireDate: req.body.hireDate,
         department: req.body.department,
         title: req.body.title,
         location: req.body.location,
         manager: req.body.manager,
         payDate: req.body.payDate,
         hourlyRate: req.body.hourlyRate,
         salary: req.body.salary,
         payType: req.body.payType,
         payCycle: req.body.payCycle,
         transReason: req.body.transReason,
         category: req.body.category
      })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },



   createAsset: (req, res) => {
      db.Employee.create({
         category: req.body.category,
         description: req.body.description,
         assets: req.body.assets,
         dateAssigned: req.body.dateAssigned,
         dateReturned: req.body.dateReturned
      })
         .then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500) });
   },


   updatePersonal: (req, res) => {
      db.Employee.update({
         gender: req.body.gender,
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         email: req.body.email,
         phone: req.body.phone,
         address: req.body.address,
         city: req.body.city,
         state: req.body.state,
         zipCode: req.body.zipCode,
         emergency1Name: req.body.emergency1Name,
         emergency1Phone: req.body.emergency1Phone,
         emergency2Name: req.body.emergency2Name,
         emergency2Phone: req.body.emergency2Phone,
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
         empStatus: req.body.status,
         hireDate: req.body.hireDate,
         department: req.body.department,
         location: req.body.location,
         title: req.body.title,
         manager: req.body.manager,
         payDate: req.body.payDate,
         hourlyRate: req.body.hourlyRate,
         salary: req.body.salary,
         payType: req.body.payType,
         payCycle: req.body.payCycle,
         transReason: req.body.transReason,
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
   //       employeeId: req.body.employeeId,
   //       username: req.body.username,
   //       empStatus: req.body.status,
   //       gender: req.body.gender,
   //       firstName: req.body.firstName,
   //       middleName: req.body.middleName,
   //       lastName: req.body.lastName,
   //       birthMonth: req.body.birthMonth,
   //       birthDay: req.body.birthDay,
   //       birthYear: req.body.birthYear,
   //       email: req.body.email,
   //       phone: req.body.phone,
   //       address: req.body.address,
   //       city: req.body.city,
   //       state: req.body.state,
   //       zipCode: req.body.zipCode,
   //       sSI: req.body.sSI,
   //       emergency1Name: req.body.emergency1Name,
   //       emergency1Phone: req.body.emergency1Phone,
   //       emergency2Name: req.body.emergency2Name,
   //       emergency2Phone: req.body.emergency2Phone,
   //       hireDate: req.body.hireDate,
   //       department: req.body.department,
   //       location: req.body.location,
   //       title: req.body.title,
   //       manager: req.body.manager,
   //       payDate: req.body.payDate,
   //       hourlyRate: req.body.hourlyRate,
   //       salary: req.body.salary,
   //       payType: req.body.payType,
   //       payCycle: req.body.payCycle,
   //       transReason: req.body.transReason,
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
   //       empStatus: req.body.status,
   //       gender: req.body.gender,
   //       firstName: req.body.firstName,
   //       lastName: req.body.lastName,
   //       email: req.body.email,
   //       phone: req.body.phone,
   //       address: req.body.address,
   //       city: req.body.city,
   //       state: req.body.state,
   //       zipCode: req.body.zipCode,
   //       emergency1Name: req.body.emergency1Name,
   //       emergency1Phone: req.body.emergency1Phone,
   //       emergency2Name: req.body.emergency2Name,
   //       emergency2Phone: req.body.emergency2Phone,
   //       hireDate: req.body.hireDate,
   //       department: req.body.department,
   //       location: req.body.location,
   //       title: req.body.title,
   //       manager: req.body.manager,
   //       payDate: req.body.payDate,
   //       hourlyRate: req.body.hourlyRate,
   //       salary: req.body.salary,
   //       payType: req.body.payType,
   //       payCycle: req.body.payCycle,
   //       transReason: req.body.transReason,
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