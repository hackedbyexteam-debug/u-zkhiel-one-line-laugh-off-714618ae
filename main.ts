// One-Line Laugh-Off — the fridge is the only one who still replies.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: the joke turns on a lonely modern truth — the smart fridge
// texts about expiring milk, which is helpful, until the punchline
// reframes it: the milk is the only thing in the house that still
// replies to me. The turn lands in the last clause, flipping a gadget
// gag into a small, relatable confession about being ignored by everyone
// except the appliances. Every word earns its place: "texts me" sets the
// smart-home premise in two words, "which is great" sells the fake
// approval before the twist, and the final "still replies to me" is the
// whole joke — no setup left over, nothing to trim.
// Fresh angle: not a "smart home gone wrong" gag about a fridge ordering
// groceries — the fridge works exactly as designed, and that is the
// problem. The laugh comes from the human, not the machine.
// Single line, no trailing newline in the entry file: the scorer counts
// the text as written.
//
// Gate: exactly 1 line, 136 characters (limit 1-200).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My fridge texts me when the milk expires, which is great — except the milk is now the only thing in this house that still replies to me.";

const MAX_CHARS = 200;
if (ENTRY.trim().length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-${MAX_CHARS}`);
}

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, ENTRY);

console.log(`wrote ${OUT_DIR}/entry.txt (${ENTRY.length} chars)`);
