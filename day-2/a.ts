import { runSolution } from "../utils.ts";

export type Level = number;
export type Report = Level[];

/** provide your solution as the return of this function */
export async function day2a(data: string[]) {
  const reports = parseDay2(data);
  return reports.map((report) => isSafe(report)).filter((val) => val).length;
}

export function isSafe(report: Report): boolean {
  const sorted = report.toSorted((a, b) => a - b);
  return !(isNotIncreasingOrDecreasing(report, sorted) || hasIllegalStepSize(report))
}

export function isNotIncreasingOrDecreasing(report: Report, sorted: Report) {
  return (report.toString() !== sorted.toString() && 
      report.toReversed().toString() !== sorted.toString())
}

export function hasIllegalStepSize(report: Report) {
  for(let i = 1; i < report.length; i++) {
    const step = Math.abs(report[i] - report[i-1])
    if (step < 1 || step > 3) {
      return true;
    }
  };
  return false;
}

export function parseDay2(data: string[]): Report[] {
  return data
    .filter((x) => x.trim() !== "")
    .map((report) => report.split(" ").map((val) => parseInt(val)));
}

await runSolution(day2a);
