class ShipBuilder {

    constructor(name) {
      this.portholes = 0;
      this.cabins = 1;
      this.floors = 1;
      this.name = name;
    }
   
    setPortholes(amount) {
      this.portholes = amount;
      return this;
    }
   
    setCabins(bmount) {
      this.cabins = bmount;
      return this;
    }
   
    setFloors(cmount) {
      this.floors = cmount;
      return this;
    }
   
    setSail() {
      this.sail = true;
      return this;
    }

    setDiesel() {
      this.diesel = true;
      return this;
    }
   
    build() {
      return new Ship(this);
    }

    applyFor (amount, bmount, cmount) {
      const porthol = new ShipBuilder().setPortholes(amount)
      const cabin = new ShipBuilder().setCabins(bmount)
      const floor = new ShipBuilder().setFloors(cmount)

  
      return `${this.name} имеет ${amount} иллюминаторов, ${bmount} кают, ${cmount} палуб.`
    }
}
   
class Ship {
    constructor(props) {

        if (!(props instanceof ShipBuilder)) {
        return new Error('Аргумент не является примером ShipBuilder!')
      }
      this.extendProperties(props);
    }
   
    extendProperties(props) {
      for (let prop in props) {
        this[prop] = props[prop];
      }
    }
}
/*
class Capacity{
  constructor (name) {
    this.name = name
  }

  applyFor (amount) {
    const porthol = new ShipBuilder().setPortholes(a)
    const cabin = new ShipBuilder().setCabins(b)
    const floor = new ShipBuilder().setFloors(c)
    const sail = ShipBuilder().setSail()
    const diesel = ShipBuilder().setDiesel()

    return `SHIP имеет ${} иллюминаторов, ${} кают, ${} палуб, и движется с помощью ${}`
  }
}
*/
const ship = new ShipBuilder('Mirea')
const boat = ship.applyFor(10,10,10)
const speedboat = ship.applyFor(100,12,43)
const liner = ship.applyFor(1000,56,2)
console.log('boat', boat)
console.log('speedboat', speedboat)
console.log('liner', liner)


const boot = new ShipBuilder()
    .setPortholes(10) // кол-во иллюминаторов
    .setCabins(10)    // кол-во кают
    .setFloors(10)    // кол-во этажей
    .setSail()       // парус
    .build();        // Билдер


const speedboot = new ShipBuilder()
    .setPortholes(100) // кол-во иллюминаторов
    .setCabins(12)    // кол-во кают
    .setFloors(43)    // кол-во этажей
    .setDiesel()      // дизель
    .build();         // Билдер


const liiner = new ShipBuilder()
    .setPortholes(45) // кол-во иллюминаторов
    .setCabins(4)     // кол-во кают
    .setFloors(12)    // кол-во этажей
    .setDiesel()      // парус
    .setSail()        // парус
    .build();         // Билдер
