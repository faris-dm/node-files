import express from "express";
import Joi from "joi";
const app = express();

app.get("/", (req, res) => {
  res.send(
    " this  is hero pages  and i am learning  post man   which is amazing"
  );
});

app.get("/contact", (req, res) => {
  res.end(
    "  contact as whatwver  you want  and   my idea is    to be a good dev   in  mnageing apis a nd  work flow"
  );
});

const port = 5000;
app.listen(port, () => {
  console.log(`server active on http://localhost:${port}`);
});

// const items = [
//   { id: 1, name: "solo", age: 10 },
//   { id: 2, name: "Mula", age: 20 },
//   { id: 3, name: "amir", age: 30 },
// ];

// app.get("/", (req, res) => {
//   res.send(" this is Hero Pages");
// });

// // app.get("/home", (req, res) => {
// //   res.send("is is  home pages that talks me");
// // });
// // app.get("/login/:year/:month", (req, res) => {
// //   res.send(req.params);
// // });

// app.post("/items", (req, res) => {
//   const sheme = {
//     name: Joi.string().min(3).required(),
//   };
//   const result = Joi.ValidationError(req.body, sheme);
//   console.log(result);

//   const items = {
//     id: items.listen + 1,
//     name: req.body.name,
//   };

//   items.push(items);
//   res.send(items);
// });

// app.get("/items/:id", (req, res) => {
//   let item = items.find((c) => c.id == parseInt(req.params.id));
//   if (!items) res.status(404).send(" the   needed  items is not found");
//   res.send(item);
// });

// app.get("/items/:id", (req, res) => {
//   const hero = items.find((pro) => pro.id === parseInt(req.params.id));

//   if (!hero) res.status(404).send("the page is not found");

//   res.send(hero);
// });

// const port = 9000;
// app.listen(port, () => console.log(` the port is running  in the 9000 `));
