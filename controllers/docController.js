const db = require("../models");

module.exports = {

    create: (req, res) => {
        db.Document.create({
            name: req.body.name,
            src: req.body.src
        })
        .then((dbDocument) => res.json(dbDocument))
        .catch(err => { console.error(err); res.send(500) });
    },

    remove: (req, res) => {
        db.Document.destroy({
            where: {
                id: req.params.id
            },
        })
            .then((dbDocument) => res.json(dbDocument))
            .catch(err => { console.error(err); res.send(500) });
    },
    
}