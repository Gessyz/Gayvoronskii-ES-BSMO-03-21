class Worker{
    constructor(name) {
        if (Worker.exists) {
            return Worker.instance;
        }
        this._name = name;
        Worker.instance = this;
        Worker.exists = true;
        return this;
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
}

const ivan = new Worker('ivan')
console.log(ivan.getName());

const egor = new Worker('egor')
console.log(egor.getName());

// const ivan = new Worker('ivan')
// console.log(ivan.getName());

let a = new Worker()
let b = new Worker()

console.log( a === b);
console.log( a.getName() === b.getName() );
console.log(a.getName(), b.getName());
