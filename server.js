const app = require("express")();
const bodyParser = require("body-parser");
const serverless = require("serverless-http");
const { sendMail } = require("./mail");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Sight Study API!"
  });
});

app.get("/mail", (req, res) => {
  sendMail("hajji.wadii@gmail.com", "Wadii Hajji", 30)
    .then(result => {
      res.json(result.body);
    })
    .catch(err => {
      console.log(err.statusCode);
    });
});

// app.listen(process.env.PORT || 3000, () => console.log("Server is running"));
module.exports.handler = serverless(app);
