const Model = require('../model/model');

module.exports = {
  addPlayers: async(req, res) => {
    const data = new Model({
      name: req.body.name,
      position: req.body.position
    })
    try {
      const dataToSave = await data.save();
      res.status(201).json(dataToSave)
    } catch(error) {
      res.status(400).json({message: error.message})
    }
  },

  getAllPlayers: async(req, res) => {
    try{
      const data = await Model.find();
      res.json(data)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
  },

  getSpecificPlayer: async(req, res) => {
    try {
      const data = await Model.findById(req.params.id);
      res.json(data);
    } catch(error) {
        res.status(500).json({message: error.message})
    }
  },

  updatePlayerDetails: async(req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = {new: true};
  
      const result = await Model.findByIdAndUpdate(id, updatedData, options)
  
      res.send(result)
     } catch (error) {
      res.status(400).json({message: error.message})
     }
  },

  deletePlayers: async(req, res) => {
    try { 
      const id = req.params.id;
      const data = await Model.findByIdAndDelete(id);
      res.send('Document with ' + data.name + ' has been deleted');
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
  },

  getMostPassing: async(req, res) => {
    try {
      const data = await Model.find().sort([['passingTouchdowns', -1]]).limit(1);
      res.json(data);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
  },

  getMostRushingYards: async(req, res) => {
    try {
      const data = await Model.find().sort([['rushingYards', -1]]).limit(1);
      res.json(data);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
  },

  getLeastRushingYard: async(req, res) => {
    try {
      const data = await Model.aggregate([
          {
              "$match": {
              "rushingYards" : {"$exists": true}
          }
      },
          {
              "$sort" : { "rushingYards" : 1}
          }
      ]).limit(1)
      res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
  },

  ANalysingRushingyards: async(req, res) => {
    try {
      const data = await Model.aggregate(
      [
          {
              "$match": {
              "recievingYards" : {"$exists": true}
          }
      },
          {
              "$sort" : { "recievingYards" : -1}
          }]
      )
      res.json(data);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
  }
};