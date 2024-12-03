import { runSolution } from "../utils.ts";
import { isSafe, parseDay2, Report } from "./a.ts";

/** provide your solution as the return of this function */
export async function day2a(data: string[]) {
  const reports = parseDay2(data);
  return reports
    .map((report) => isSafe(report))
    .map((safe, idx) => safe ? safe : isAnyWindowSafe(reports[idx]))
    .filter((val) => val)
    .length;
}

function isAnyWindowSafe(report: Report) {
  for (let i = 0; i < report.length; i++) {
    const window = report.toSpliced(i, 1)
    if (isSafe(window)) {
      return true;
    }
  }
  return false;
}

await runSolution(day2a);
