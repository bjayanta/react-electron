var db = require('../models');

const Party = db.party;
const Contact = db.contact;

var index = async (req, res) => {
    let data = await Party.findAll({
        include: [{
            model: Contact
        }]
    });
    
    res.status(200).json(data);
}

module.exports = {
    index: index
}