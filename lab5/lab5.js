class Iterator {
    constructor(element) {
        this.index = 0
        this.keys = Object.keys(element)
        this.elements = element
    }

    next() {
        return this.elements[this.keys[this.index++]]
    }

    hasNext() {
        return this.index < this.keys.length
    }
}

class Delivery {
    constructor(type, name, price) {
        this.type = type
        this.name = name
        this.price = price
    }
}

class DeliveryFactory {
    make(type, name) {
        if (type === 'press')
            return new Delivery(type, name, 250);
        if (type === 'product')
            return new Delivery(type, name, 500);
    }
}

// создание новой фабрики
const factory = new DeliveryFactory()

const pressIvan = factory.make('press', 'Ivan')
const productIvan = factory.make('product', 'Ivan')
const pressEgor = factory.make('press', 'Egor')
const productEgor = factory.make('product', 'Egor')

const delivery = {
    pressIvan,
    productIvan,
    pressEgor,
    productEgor
}

const collection = new Iterator(delivery)

while(collection.hasNext()) {
    console.log(collection.next())
}
