import { useState } from 'react';

interface Employee {
  name: string;
  tin: string;
  salary: number;
}

export default function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [form, setForm] = useState<Employee>({ name: '', tin: '', salary: 0 });

  const handleAdd = () => {
    setEmployees([...employees, form]);
    setForm({ name: '', tin: '', salary: 0 });
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Employees</h2>
      <input className="border p-2 mb-2" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="border p-2 mb-2 ml-2" placeholder="TIN" value={form.tin} onChange={e => setForm({ ...form, tin: e.target.value })} />
      <input type="number" className="border p-2 mb-2 ml-2" placeholder="Salary" value={form.salary} onChange={e => setForm({ ...form, salary: parseFloat(e.target.value) })} />
      <button className="bg-blue-500 text-white px-4 py-2 ml-2" onClick={handleAdd}>Add</button>

      <ul className="mt-4">
        {employees.map((emp, i) => (
          <li key={i} className="mb-2">{emp.name} - TIN: {emp.tin} - Salary: BWP {emp.salary}</li>
        ))}
      </ul>
    </div>
  );
}