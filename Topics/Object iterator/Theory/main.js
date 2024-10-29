// You can experiment here, it won’t be checked
let employee = {
    'name': 'Bruce Reese',
    'email': 'diam.sed@augue.org',
    'company': 'Velit Pellentesque Institute'
};

const employeeKeys = Object.keys(employee);
console.log(employeeKeys);

employeeKeys.forEach(key => console.log(`${key} : ${employee[key]}`));

employeeKeys.forEach(key => {
    if (key === 'company') {
        employee[key] = "Stiedemann Group";
    }
});

employeeKeys.forEach(key => console.log(`${key} : ${employee[key]}`));

const employeeValues = Object.values(employee);
console.log(employeeValues);

employeeValues.forEach(value => console.log(value));

employeeValues.forEach((value) => console.log(employee[value]));
// undefined
// undefined
// undefined

const employeeEntries = Object.entries(employee);
console.log(employeeEntries);

console.log(employeeEntries[0]); // [ 'name', 'Bruce Reese' ]
console.log(employeeEntries[1]); // [ 'email', 'diam.sed@augue.org' ]

employeeEntries.forEach((entries) => {
    const key = entries[0];
    const value = entries[1];

    console.log(`Key: ${key}, Value: ${value}`);
});

// Key: name, Value: Bruce Reese
// Key: email, Value: diam.sed@augue.org
// Key: company, Value: Velit Pellentesque Institute

let arr = [{name: 'Joe', age: 25}, {name: 'Moe', age: 30}, {name: 'Doe', age: 35}];

let newArr = arr.map(obj => ({...obj, olderAge: obj.age + 5}));
console.log(newArr);

