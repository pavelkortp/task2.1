// 1. 


function getFirstWord(a: string): number {
    return a.split(/ +/)[0].length;
}

// 2. 

function getUserNamings(a: { name: string, surname: string }): object {
    return {
        fullName: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}

// 3. 

// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
function getAllProductNames(a: { products: Array<{ name: any }> }): Array<any> {
    return a?.products?.map(prod => prod?.name) || [];
}

// 4.1

// easy way is using 'as' keyword
// hard way is ?...
function hey(a: { name: () => string, cuteness?:number, coolness?:number}): string {
    return "hey! i'm " + a.name();
}
console.log(hey({ name: () => "roma", cuteness: 100 })  );
console.log(hey({ name: () => "vasya", coolness: 100 }));

// 4.2
class Pet {
    constructor(protected Name: string) { }
    name(): string {
        return this.Name;
    }
}

class Dog extends Pet {
    constructor(Name: string, public coolness: number) {
        super(Name);
    }
    get type(): string {
        return 'dog';
    }
}

class Cat extends Pet {
    constructor(Name: string, public cuteness: boolean) {
        super(Name);
    }
    get type(): string {
        return 'cat';
    }

}

function hey2(abstractPet: Pet): string {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("myavchik", true);
let b = new Dog("gavchik", 333);

console.log(hey2(a));
console.log(hey2(b));

// 4.3

function hey3(a: { name: ()=>string, type?: string, cuteness?: any, coolness?: number }): string {
    return "hey! i'm " + a.name()
        + (a.type === "cat" ? ("cuteness: " + a.cuteness) : ("coolness: " + a.coolness))
}

console.log(hey3({ name: () => "roma", type: "cat", cuteness: 100 }));
console.log(hey3({ name: () => "vasya", type: "dog", coolness: 100 }));



// 5.

// google for Record type
function stringEntries(a: Array<any> | object): Array<any> | object {
    return Array.isArray(a) ? a : Object.keys(a)
}

// 6.
// you don't know Promises and async/await yet. Or do you? 
// ....can be hard, don't worry and SKIP if you do not know how to do it

async function world(a: number): Promise<string> {
    return "*".repeat(a)
}
const hello = async () => {
    return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))