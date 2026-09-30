// oxlint-disable typescript/no-unsafe-assignment typescript/no-unsafe-call typescript/no-unsafe-member-access

import fs from "node:fs";

const FILE_PATH = "./native/index.d.cts";

let s = fs.readFileSync(FILE_PATH, {
    encoding: "utf8",
});

// Doc comments passed through `macro_rules!` become raw strings, so NAPI-RS writes a leading `r"` on each line.
s = s.replaceAll(/^(\s*\*) r" ?/gmu, "$1 ");

fs.writeFileSync(FILE_PATH, s);
