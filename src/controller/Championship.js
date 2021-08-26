const Championship = require('../model/Championship');

class Championship {

    async create(req, res){
        const championship = new Championship(req.body); 
        await championship
                .save()
                .then(response => {
                    return res.status(200).json(response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                });
    }

}

module.exports = new Championship();