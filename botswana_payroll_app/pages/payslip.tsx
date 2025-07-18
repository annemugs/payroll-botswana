import { useState } from 'react';
import { calculatePAYE } from '../utils/paye';

export default function Payslip() {
  const [salary, setSalary] = useState(0);
  const paye = calculatePAYE(salary);
  const net = salary - paye;

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Payslip Generator</h2>
      <input type="number" className="border p-2 mb-2" placeholder="Gross Salary (BWP)" value={salary} onChange={e => setSalary(parseFloat(e.target.value))} />
      <div className="mt-4">
        <p>PAYE: BWP {paye.toFixed(2)}</p>
        <p>Net Pay: BWP {net.toFixed(2)}</p>
      </div>
    </div>
  );
}