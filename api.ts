// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express";
import * as fs from "jsr:@std/fs"; // have to get an std to check if something exists goddamn
const old = Date.now();
const router = express.Router();

const _loadIfExists = async (name: string, contents: string) => {
  try {
    return await Deno.readTextFile(name);
  } catch {
    await Deno.writeTextFile(name, contents);
    return contents;
  }
};

if (!fs.existsSync("data")) Deno.mkdirSync("data");
// const logindata: UserCreds[] = JSON.parse(await loadIfExists("data/login.json", "[]"));

router.get("/time", (_req, res) => {
  console.log(Date.now()); // testing
  // req.body;
  let final = "error"
  final = Date.now().toString();
  res.send(final);
});

router.get("/uptime", (_req, res) => {
  console.log(Date.now()); // testing
  // req.body;
  let final = 0
  final = Date.now() - old;
  res.send(final.toString());
});

router.get("/", (_req, res) => {
  res.send("Invalid api service.");
});

export default router;