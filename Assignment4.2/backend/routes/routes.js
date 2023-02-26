const express = require('express');
const playersController = require('../controller/index');

const router = express.Router();

//Post method 
router.post('/post', playersController.addPlayers)

// Get all Method
router.get('/getAll', playersController.getAllPlayers)

// Get by ID method 
router.get('/getOne/:id', playersController.getSpecificPlayer)

// update by ID method 
router.patch('/update/:id', playersController.updatePlayerDetails)

// delete by ID method 
router.delete('/delete/:id',  playersController.deletePlayers)

// get player with most amount of passing touchdowns
router.get('/get/mostPassingTouchdowns', playersController.getMostPassing)

// get player with most amount of rushing yards
router.get('/get/mostRushingYards', playersController.getMostRushingYards)

// get player with least amount of rushing yards
router.get('/get/leastRushingYards', playersController.getLeastRushingYard)

// players iwth most to least recieving yards 
router.get('/get/mostToLeastRecievingYards', playersController.ANalysingRushingyards)

module.exports = router;