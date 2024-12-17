// 1.1. Базові типи
type Worker = {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
};

// Enum Category
enum Category {
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster
}

// Функція getAllWorkers()
function getAllWorkers(): Worker[] {
    let workers: Worker[] = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Developer },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.BusinessAnalyst },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA }
    ];
    return workers;
}

function logFirstAvailable(workers: Worker[] = getAllWorkers()): void {
    console.log(`Number of workers: ${workers.length}`);
    for (const worker of workers) {
        if (worker.available) {
            console.log(`Available worker: ${worker.name} ${worker.surname}`);
            break;
        }
    }
}

// 1.2. Реалізація функцій
function getWorkersNamesByCategory(category: Category = Category.Designer): string[] {
    const workers = getAllWorkers();
    return workers.filter(worker => worker.category === category).map(worker => worker.surname);
}

function logWorkersNames(workerNames: string[]): void {
    workerNames.forEach(name => console.log(name));
}

// 1.3. Стрілочні функції
function getWorkerByID(id: number): Worker | undefined {
    return getAllWorkers().find(worker => worker.id === id);
}

function printDeveloperNames() {
    getAllWorkers()
        .filter(worker => worker.category === Category.Developer)
        .forEach(worker => console.log(`${worker.name} ${worker.surname}`));
}

// 1.4. Типи функцій
function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

let myID: string = createCustomerID('Ann', 10);
console.log(myID);

let IdGenerator: (name: string, id: number) => string;
IdGenerator = (name, id) => `${name}${id}`;
console.log(IdGenerator('Ann', 10));

// 1.5. Необхідні, додаткові та залишкові параметри
function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer Name: ${name}`);
    if (age) {
        console.log(`Customer Age: ${age}`);
    }
    if (city) {
        console.log(`Customer City: ${city}`);
    }
}

createCustomer('John');
createCustomer('John', 30);
createCustomer('John', 30, 'Kyiv');

function сheckoutWorkers(customer: string, ...workerIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);
    return workerIDs
        .map(id => getWorkerByID(id))
        .filter(worker => worker && worker.available)
        .map(worker => `${worker!.name} ${worker!.surname}`);
}

const myWorkers = сheckoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(worker => console.log(worker));

// Запуск функцій
logFirstAvailable();
logWorkersNames(getWorkersNamesByCategory());
printDeveloperNames();
