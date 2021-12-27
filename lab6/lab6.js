// Invertion of Control (IoC)
function carDelivery(distance, speed) {
    travelTime = distance / speed + 0.25 // +0,25 (время затрачиваемое для посдки/высадки из автомобиля + парковка)
    return travelTime
}

function bicycleDelivery(distance, speed) {
    travelTime = distance / speed + 0.1 // +0,1 (время затрачиваемое на фиксацию груза + парковка)
    return travelTime
}

function walkDelivery(distance, speed) {
    travelTime = distance / speed   // нет временных издержек при доставке
    return travelTime
}

class Delivery {
    constructor(delivery) {
        this.delivery = delivery
        this.distance = 0
        this.speed = 0
    }

    checkTime() {
        return this.delivery(this.distance, this.speed)
    }

    setParams(distance, speed) {
        this.distance = distance
        speed != 0 ? this.speed = speed : this.speed = 0.01
    }
}


const driver = new Delivery(carDelivery)
const cyclist = new Delivery(bicycleDelivery)
const walker = new Delivery(walkDelivery)

driver.setParams(12, 34)
console.log(driver.checkTime())

cyclist.setParams(12, 9)
console.log(cyclist.checkTime())

walker.setParams(12, 4)
console.log(walker.checkTime())
