// 2.1 Визначення інтерфейсу
interface Worker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: string;
}

const getAllWorkers = (): Worker[] => [
    { id: 1, name: 'John', surname: 'Doe', available: true, salary: 'High' },
    { id: 2, name: 'Jane', surname: 'Smith', available: false, salary: 'Medium' },
    { id: 3, name: 'Emily', surname: 'Jones', available: true, salary: 'Low' },
];

const getWorkerByID = (id: number): Worker | undefined => {
    return getAllWorkers().find(worker => worker.id === id);
};

const printWorker = (worker: Worker): void => {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
};

// 2.2 Визначення інтерфейсів для типів функцій
interface PrizeLogger {
    (message: string): void;
}

interface WorkerWithPrize extends Worker {
    markPrize: PrizeLogger;
}

const logPrize: PrizeLogger = (message: string): void => {
    console.log(message);
};

logPrize('Prize awarded!');

// 2.3 Розширення інтерфейсів
interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string): void;
}

const favoriteAuthor: Author = {
    name: 'Mark',
    email: 'mark@example.com',
    numBooksPublished: 10,
};

const favoriteLibrarian: Librarian = {
    name: 'Anna',
    email: 'anna@example.com',
    department: 'Literature',
    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    },
};

// 2.4 Інтерфейси для типів класів
class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

const librarian = new UniversityLibrarian();
librarian.name = 'Emily';
librarian.assistCustomer('John');

// 2.5 Створення та використання класів
class ReferenceItem {
    public title: string;
    protected year: number;

    private _publisher: string;

    static department: string = 'General';

    constructor(title: string, year: number) {
        console.log('Creating a new ReferenceItem...');
        this.title = title;
        this.year = year;
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
}

const ref = new ReferenceItem('Book Title', 2022);
ref.printItem();
ref.publisher = 'Publisher Name';
console.log(ref.publisher);

// 2.6 Розширення класів
class Encyclopedia extends ReferenceItem {
    public edition: number;

    constructor(title: string, year: number, edition: number) {
        super(title, year);
        this.edition = edition;
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
}

const refBook = new Encyclopedia('Encyclopedia Title', 2021, 3);
refBook.printItem();

// 2.7 Створення абстрактних класів
abstract class AbstractReferenceItem {
    public title: string;
    protected year: number;

    constructor(title: string, year: number) {
        this.title = title;
        this.year = year;
    }

    abstract printCitation(): void;
}

class AdvancedEncyclopedia extends AbstractReferenceItem {
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

const advancedBook = new AdvancedEncyclopedia('Advanced Book', 2023);
advancedBook.printCitation();
