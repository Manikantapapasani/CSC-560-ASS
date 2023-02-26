const Express = require("express");
const BodyParser = require("body-parser");
const router = require('./router/index.router');

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use('/player', router)


app.listen(5000, () => {
    console.log("PORT Running")
});
