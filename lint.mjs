// Stand-in for quick checks (lint, type-check, build).
import { add } from "./src/math.mjs";
if (add(2, 2) !== 4) throw new Error("lint: add is broken");
console.log("quick checks passed");
