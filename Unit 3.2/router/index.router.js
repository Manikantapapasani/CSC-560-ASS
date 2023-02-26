const Express = require("express");
const { mongodb } = require('../model/dbconfig');
const collection = mongodb()
var app = Express();

// rest end points 
app.post("/", (request, response) => {
  collection.insert(request.body, (error, result)  => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result.result);
  })
});

app.get("/", (request, response) => {
  collection.find({}).toArray((error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result);
  })
});

app.get("/:id", (request, response) => {
  collection.findOne({"_id" : new ObjectId(request.params.id)}, (error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result);
  })
})

app.put("/:id", (request, response) => {
   collection.findByIdAndUpdate({"_id" : new ObjectId(request.params.id)}, request.body, (error, result) => {
      if(error) {
          return response.status(500).send(error)
      }
      response.send(result);
   })
})


app.delete("/:id", (request, response) => {
  collection.findByIdAndRemove({"_id" : new ObjectId(request.params.id)}).then(player => {
      if(!player) {
          return response.status(404).send({message: "Player not found with id " + request.params.id});
      }
      response.send({message:  "player deleted successfully!"})
  })
});

module.exports = app;