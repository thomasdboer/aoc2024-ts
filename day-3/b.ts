import { runSolution } from "../utils.ts";
import { DIGITS_REGEXP, MUL_REGEXP } from "./a.ts";

const DONT_REGEXP = /(don't\(\).*?(do\(\)|$))+/g;

/** provide your solution as the return of this function */
export async function day3b(data: string[]) {
  return parse(data).reduce((total, curr) => total + curr[0] * curr[1], 0);
}

function parse(data: string[]): number[][] {
  return data
    .filter((x) => x.trim() !== "")
    .join("")
    .replace(DONT_REGEXP, "")
    .match(MUL_REGEXP)
    .map((mul) =>
      mul
        .split(",")
        .flatMap((part) => part.match(DIGITS_REGEXP))
        .flatMap((digit) => parseInt(digit)),
    );
}

await runSolution(day3b);
