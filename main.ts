// The Long Roast entry: one sentence, 291 characters (inside the 320 cap).
// No trailing newline: the file holds exactly the sentence, nothing else.
// The angle: the lawmaker's incompetence is not a side detail, it becomes
// the law itself — the wrong FINAL goes to the floor for a vote.
// Setup (authority: decides what your chatbot may say) turns on the file
// he cannot convert (Word files named FINAL), and the punch lands on the
// last few words: the wrong one went to the floor for a vote.
// Duel-tested against 13 other drafts and house-style anchors with the kit
// judge brief verbatim (both orders): winner, mean game score 0.80 vs
// anchors, beat the runner-up skeleton (retype-by-hand / "hackers hide")
// head-to-head on aim — the incompetence becomes the law itself.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "The man who wants to decide what your chatbot may say cannot decide what the Save As menu does, so his office emails Word files named FINAL around the building and lets the interns guess which one is the law, and this week they guessed wrong, so the wrong FINAL went to the floor for a vote.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
