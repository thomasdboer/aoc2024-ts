import { runSolution } from "../utils.ts";

type Level = number;
type Report = Level[];

/** provide your solution as the return of this function */
export async function day2a(data: string[]) {
  const reports = parseDay2(data);
  const errorCorrectedReports = reports.map((report) => isSafe(report))
    .map((safe, reportIdx) => {
      if (!safe) {
        const unsafeReport = reports[reportIdx];
        console.log("unsafe report", reports[reportIdx])
        for (let i = 0; i < unsafeReport.length; i++) {
          if (isSafe(unsafeReport.toSpliced(i, 1))) {
            return true;
          }}
        
      }
      return safe;
    })
  return errorCorrectedReports.filter((val) => val).length;
}

function isSafe(report: Report): boolean {
  const sorted = report.toSorted((a, b) => a - b);
  if (report.toString() !== sorted.toString() && report.toReversed().toString() !== sorted.toString()) {
    return false;
  }
  for(let i = 1; i < report.length; i++) {
    const step = Math.abs(report[i] - report[i-1])
    if (step < 1 || step > 3) {
      return false;
    }
  };
  return true;
}

function parseDay2(data: string[]): Report[] {
  return data
    .filter((x) => x.trim() !== "")
    .map((report) => report.split(" ").map((val) => parseInt(val)));
}

await runSolution(day2a);
