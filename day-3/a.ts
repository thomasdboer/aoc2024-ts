import { runSolution } from "../utils.ts";

export const MUL_REGEXP = /(?:mul\(\d{1,3},\d{1,3}\))/g;
export const DIGITS_REGEXP = /\d{1,3}/g;

/** provide your solution as the return of this function */
export async function day3a(data: string[]) {
  return parse(data).reduce((total, curr) => total + curr[0] * curr[1], 0);
}

function parse(data: string[]): number[][] {
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
