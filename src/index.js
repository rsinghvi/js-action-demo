require("dotenv").config();
const core = require("@actions/core");
const github = require("@actions/github");

try {
  const nameToGreet = process.env["USER_NAME"] || "World";
  console.log(`Hello ${nameToGreet}!`);
  core.setOutput("greeting", `Hello ${nameToGreet}!`);

  const time = new Date().toTimeString();
  core.setOutput("time", time);

  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
