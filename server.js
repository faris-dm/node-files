import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const product = [
  { id: 1, name: "faris" },
  { id: 2, name: "naser" },
  { id: 3, name: "nida" },
];

app.get("/", (req, res) => {
  res.send("  this a tender client  new post man we  solve the prolem");
});
app.get("/product", (req, res) => {
  res.send(product);
});

app.post("/new", (req, res) => {
  const newItem = {
    id: product.length + 1,
    name: req.body.name,
  };
  product.push(newItem);
  res.send(product);
});

// app.post("/product", (req, res) => {
//   const added = {
//     id: product.length + 1,
//     name: req.body.name,
//   };
//   product.push(added);
//   res.send(product);
// });

const port = 7000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
