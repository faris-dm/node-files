import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("   this is a home page ");
});

app.get("/login", (req, res) => {
  if (req.url === 404) {
    res.send(" the pages  does not  found");
  }
  res.send(" login   to acces all the authicatecation process");
});
const port = 6000;
app.listen(port, () => {
  console.log(`http://localhost${port}`);
});
