// Assigning methods to an object
const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
  }
  
  arto.greet()

// assigning method to object after creation
arto.growOlder = function() {
this.age += 1
}

console.log(arto.age)
arto.growOlder()
console.log(arto.age)

// Calling method via method reference
const arto1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
        console.log('hello, my name is ' + this.name)
    },

    doAddition: function(a, b) {
        console.log(a + b)
    },
}

arto1.doAddition(1, 4)

const referenceToAddition = arto1.doAddition
referenceToAddition(10, 15)

// Do the same with greet to unviel this turning into global context
arto1.greet()

const referenceToGreet = arto1.greet
referenceToGreet()

// Antoehr situation where this turns global
const arto2 = {
    name: 'Arto Hellas',
    greet: function() {
        console.log('hello, my name is ' + this.name)
    }
}

setTimeout(arto2.greet, 1000)

// Binding to maintain this local context
setTimeout(arto2.greet.bind(arto2), 1000)