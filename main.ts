// Traffic Jam Zipper — make.fun "Everyday Things, Two Lines, Longer Run"
// Writes the two-line explanation to /output/entry.txt.
//
// Line 1 explains a traffic jam to a 10-year-old in one vivid sentence built
// on a single concrete analogy: a giant zipper that forgot how to close.
// Line 2 says in one sentence why the analogy works: what it maps (cars
// taking turns sliding into one lane) and what it leaves out (the honking,
// the waiting, and the fact that nobody is pulling the zipper).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "A traffic jam is a giant zipper that forgot how to close, with a hundred metal teeth all trying to squeeze into the same tiny gap at once.";
const LINE_2 =
  "The zipper shows how cars take turns sliding into one lane, but it leaves out the honking, the waiting, and the fact that nobody is pulling it — every driver decides for themselves.";

const entry = `${LINE_1}\n${LINE_2}\n`;

// The gate only accepts UTF-8 text of 1 to 400 characters, exactly two lines.
if (entry.length < 1 || entry.length > 400) {
  throw new Error(`entry must be 1-400 chars, got ${entry.length}`);
}
if (entry.trim().split("\n").length !== 2) {
  throw new Error("entry must be exactly two lines");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote /output/entry.txt (${entry.length} chars)`);
