import { runSolution } from '../utils.ts';

interface NumberLists {
  listA: number[];
  listB: number[];
}
const SEPARATOR = '   ';

/** provide your solution as the return of this function */
export async function day1a(data: string[]) {
  const parsedLists = parseDay1(data),
    listA = parsedLists.listA.sort(),
    listB = parsedLists.listB.sort();
  return listA.reduce((total, curr, idx) => total + Math.abs(curr - listB[idx]), 0);
}

export function parseDay1(data: string[]): NumberLists {
  const listA: number[] = [],
    listB: number[] = [];
  data.map((row) => {
    if (row.trim() === '') return;
    const split = row.split(SEPARATOR);
    listA.push(Number(split[0]));
    listB.push(Number(split[1]));
  });
  return { listA, listB };
}

await runSolution(day1a);
