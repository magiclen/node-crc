import fs from "node:fs";

const FILE_PATH = "./index.d.cts";

let s = fs.readFileSync(FILE_PATH, {
    encoding: "utf8"
});

s = s.replaceAll("*r\"", "*");

fs.writeFileSync(FILE_PATH, s);