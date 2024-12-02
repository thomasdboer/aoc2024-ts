import { runSolution } from "../utils.ts";
import { parseDay1 } from "./a.ts";

/** provide your solution as the return of this function */
export async function day1b(data: string[]) {
  const parsedLists = parseDay1(data),
    listA = parsedLists.listA,
    listB = parsedLists.listB,
    setA = new Set(listA),
    occurrencesInB: Record<number, number> = {};
  setA.forEach((a) => occurrencesInB[a] = listB.filter((b) => b === a).length)
  return listA.reduce((total, a) => total + a * occurrencesInB[a], 0);
}

await runSolution(day1b);
