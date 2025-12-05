import express from "express";
const app = express();

const items = [
  { id: 1, name: "solo", age: 10 },
  { id: 2, name: "Mula", age: 20 },
  { id: 3, name: "amir", age: 30 },
];

app.get("/", (req, res) => {
  res.send(" this is Hero Pages");
});

app.get("/home", (req, res) => {
  res.send("is is  home pages that talks me");
});
app.get("/login/:year/:month", (req, res) => {
  res.send(req.params);
});

app.get("/items", (req, res) => {
  res.send(items);
});

// app.get("/items/:id", (req, res) => {
//   let item = items.find((c) => c.id == parseInt(req.params.id));
//   if (!items) res.status(404).send(" the   needed  items is not found");
//   res.send(item);
// });

app.get("/items/:id", (req, res) => {
  const hero = items.find((pro) => pro.id === parseInt(req.params.id));

  if (!hero) res.status(404).send("the page is not found");

  res.send(hero);
});

const port = 9000;
app.listen(port, () => console.log(` the port is running  in the 9000 `));
