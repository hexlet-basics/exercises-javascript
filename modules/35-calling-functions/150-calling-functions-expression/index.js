import { length } from "hexlet-basics/string";

const text = "Hexlet";

// BEGIN
const first = text[0];
const last = text[length(text) - 1];
console.log(`First: ${first}`);
console.log(`Last: ${last}`);
// END
