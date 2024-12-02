import { runSolution } from "../utils.ts";
import { parseDay1 } from "./a.ts";

/** provide your solution as the return of this function */
export async function day1b(data: string[]) {
  const parsedLists = parseDay1(data),
    listA = parsedLists.listA,
    listB = parsedLists.listB,
    setA = new Set(listA),
    frequencyInB: Record<number, number> = getFrequencyMap(setA, listB)
  return listA.reduce((total, a) => total + a * frequencyInB[a], 0);
}

function getFrequencyMap(setA: Set<number>, listB: number[]): Record<number, number> {
  const frequencyMap: Record<number, number> = {};
  setA.forEach((a) => frequencyMap[a] = listB.filter((b) => b === a).length)
  return frequencyMap;
}
await runSolution(day1b);
