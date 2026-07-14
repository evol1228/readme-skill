#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const os = require("os");

const projectMode = process.argv.includes("--project");
const src = path.join(__dirname, "..", "skills", "readme-skill");
const destRoot = projectMode
  ? path.join(process.cwd(), ".claude", "skills")
  : path.join(os.homedir(), ".claude", "skills");
const dest = path.join(destRoot, "readme-skill");

if (!fs.existsSync(src)) {
  console.error("Could not find the skill files next to this script. Aborting.");
  process.exit(1);
}

const existed = fs.existsSync(dest);
fs.mkdirSync(destRoot, { recursive: true });
fs.cpSync(src, dest, { recursive: true });

console.log(`${existed ? "Updated" : "Installed"} readme-skill -> ${dest}`);
console.log('Ask Claude Code to "add a readme" in any project and the skill kicks in.');
if (!projectMode) {
  console.log("Tip: use --project to install into ./.claude/skills of the current repo instead.");
}
