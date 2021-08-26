const ChampionshipModel = require('../model/Championship');

class Championship {

    async create(req, res){
        const champion = new ChampionshipModel(req.body); 
        await champion
                .save()
                .then(response => {
                    return res.status(200).json(response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                });
    }

    async update(req, res){
        await ChampionshipModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
            .then(resposnse => {
                return res.status(200).json(resposnse);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

}

module.exports = new Championship();