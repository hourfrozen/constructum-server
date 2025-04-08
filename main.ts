// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express";
const port = 443; //https
const app = express();
import api from "./api.ts";

app.use("/api", api);
app.get("/", (_req, res) => {
  res.send("not set up");
  // res.sendFile(`../pages/landing.html`);
});
app.get("/apiref", (_req, res) => {
  res.send("not set up");
  // res.sendFile(`../pages/apiref.html`)
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});