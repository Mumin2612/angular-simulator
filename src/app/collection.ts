import { elementAt } from "rxjs"

export class Collection <T> {

    private collection: T[]

    constructor (arr:T[]) {
        this.collection = arr
    }

    getEllements(): T[] {
        return this.collection
    }

    getCertain(index:number): T {
        return this.collection[index]
    }

    clearCollection(): void {
        this.collection = []
    }

    deleteCertain(index:number): void {
        this.collection.splice(index, 1)
    }

    replaceCertain(index:number, element:T): void {
        this.collection[index] = element
    }
}

export class CollectionWithKey<T> extends Collection<T> {
    constructor (src:T[] | string) {
        if (Array.isArray(src)) {
            super(src)
            return
        } 
      const data = localStorage.getItem(src)
      super(data ? JSON.parse(data) : [])     
    }
}

const numbers = new Collection<number>([1,2,3,4,5,6,7,8,9,10])
console.log(numbers.getEllements())
console.log(numbers.getCertain(2))
numbers.clearCollection()
console.log(numbers.getEllements())
const numbers2 = new Collection<number>([1,2,3,4,5,6,7,8,9,10])
numbers2.deleteCertain(1)
console.log(numbers2.getEllements())
numbers2.replaceCertain(1, 100)
console.log(numbers2.getEllements())

localStorage.setItem('asd', JSON.stringify(['c','a', 'd']))
const numbersFromKey = new CollectionWithKey<string>('asd')
console.log(numbersFromKey.getEllements())