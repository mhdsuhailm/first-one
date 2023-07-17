function calculateSalary(departments) {
    let totalSalary = 0;

    for (let i = 0; i < departments.length; i++) {
        if (typeof departments[i] === 'object' && departments[i] !== null) {
            totalSalary += calculateSalary(Object.values(departments[i]));
        } else if (typeof departments[i] === 'number') {
            totalSalary += departments[i];
        }
    }

    return totalSalary;
}

const IT = {
    dept_name: 'IT',
    employees: [
        { name: 'John', salary: 576768 },
        { name: 'Jane', salary: 60000 },
        { name: 'Bob', salary: 55000 },
        { name: 'Alice', salary: 65000 },
        { name: 'Mike', salary: 70000 }
    ]
};

const HR = {
    dept_name: 'HR',
    employees: [
        { name: 'Lisa', salary: 45000 },
        { name: 'Mary', salary: 55000 },
        { name: 'David', salary: 60000 }
    ]
};

const Accounting = {
    dept_name: 'Accounting',
    employees: [
        { name: 'Tom', salary: 48000 },
        { name: 'Jack', salary: 52000 }
    ]
};

const departments = [IT, HR, Accounting];

const totalSalary = calculateSalary(departments);
console.log(`Total salary of all employees: $${totalSalary}`);