const db = require("../models");

let image;

module.exports = {

    create: (req, res) => {
        db.Document.create({
            name: req.body.name,
            src: req.body.src
        })
        .then((dbDocument) => res.json(dbDocument))
        .catch(err => { console.error(err); res.send(500) });
    },

    getImage: (req, res) => {  //******************************** */
        
        // image = req.body.image[0];
        image = req.body;
        
        db.Document.findOne({
            where: {
                id: req.params.id
            },
            name: image.name,
            src: image.src
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