// Stand-in for a slow full suite: 30 seconds of "tests".
import { add } from "./src/math.mjs";
await new Promise((resolve) => setTimeout(resolve, 30_000));
if (add(1, 2) !== 3) throw new Error("test: add is broken");
console.log("full suite passed");
