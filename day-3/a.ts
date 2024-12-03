import { runSolution } from "../utils.ts";

const MUL_REGEXP = /(?:mul\(\d{1,3},\d{1,3}\))/g;
const DIGITS_REGEXP = /\d{1,3}/g; /** provide your solution as the return of this function */

export async function day3a(data: string[]) {
  const instructions = parseDay3(data);
  return instructions.reduce((total, curr) => total + curr[0] * curr[1], 0);
}

function parseDay3(data: string[]): number[][] {
  return data
    .filter((x) => x.trim() !== "")
    .map((element) =>
      element.match(MUL_REGEXP).map((val) =>
        val
          .split(",")
          .flatMap((part) => part.match(DIGITS_REGEXP))
          .flatMap((digit) => parseInt(digit)),
      ),
    )
    .flat();
}

await runSolution(day3a);
