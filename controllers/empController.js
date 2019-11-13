const db = require("../models");

module.exports = {


   findAll: (req, res) => {
    db.Employee.findAll({ }, { include: [db.Emergency] }).then((dbEmployee) => res.json(dbEmployee))
    .catch(err => { console.error(err); res.send(500)});
   },

   findByName: (req, res) => {
      db.Employee.findAll({ 
         where: {
            firstName: req.query.firstName,
            lastName: req.query.lastName
         }
      }).then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.sendStatus(500)});
   },

   create: (req, res) => {
      db.Employee.create({
         empStatus: req.body.status,
         gender: req.body.gender,
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         birthdate: req.body.birthdate,
         email: req.body.email,
         streetNumber: req.body.streetNumber,
         streetName: req.body.streetName,
         city: req.body.city,
         state: req.body.state,
         zipCode: req.body.zipCode,
         sSI: req.body.sSI
      },
      {
         include: [db.Emergency]
      }).then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500)});
   },

   update: (req, res) => {
      db.Employee.update({
         empStatus: req.body.status,
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         email: req.body.email,
         streetNumber: req.body.streetNumber,
         streetName: req.body.streetName,
         city: req.body.city,
         state: req.body.state,
         zipCode: req.body.zipCode,
         },
         {
            include: [db.Emergency]
         },
         {
            where: {
               id: req.params.id
            }
         }).then((dbEmployee) => res.json(dbEmployee))
         .catch(err => { console.error(err); res.send(500)});
   },
   //EXTRA??
   remove: (req, res) => {
      db.Employee.destroy({
         where: {
            id: req.params.id
         }
      }).then((dbEmployee) => res.json(dbEmployee))
      .catch(err => { console.error(err); res.send(500)});
   },
}