const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});
app.use(express.static("code"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});