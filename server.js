const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//body parser middleWare

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let employerInfo = [{ name: "", company: "", email: "" }];

app.get("/submit", (req, res) => {
  // const customers = [
  //   { id: 1, firstName: "John" },
  //   { id: 2, middletName: "will" },
  //   { id: 3, lastName: "William" },
  // ];
  res.json(employerInfo);
});

app.post("/submit", (req, res) => {
  employerInfo = [
    {
      id: Math.random(),
      name: req.body.name,
      company: req.body.company,
      email: req.body.email,
    },
  ];
  res.redirect("/submit");
});

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log("Server Running");
});
