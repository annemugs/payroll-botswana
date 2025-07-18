export function calculatePAYE(salary: number): number {
  if (salary <= 3916) return 0;
  if (salary <= 7250) return (salary - 3916) * 0.05;
  if (salary <= 11083) return 167 + (salary - 7250) * 0.125;
  if (salary <= 14916) return 625 + (salary - 11083) * 0.1875;
  return 1332 + (salary - 14916) * 0.25;
}