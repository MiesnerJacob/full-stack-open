// Defining and calling an arrow function
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 5)
console.log(result)

// Single parameter arrow function (idiomatic)
const square = p => {
    console.log(p)
    return p * p
}

const result1 = square(2)
console.log(result1)

// Single line return arrow function (idiomatic)
const square1 = p => p * p

const result2 = square1(2)
console.log(result2)

// Single line arrow function for array manipulation
const t = [1, 2 , 3]

const tSquared = t.map(p => p * p)
console.log(tSquared)

// Function using classic declaration
function product(a, b) {
    return a * b
}

const productResult = product(2, 6)
console.log(productResult)

// Function using function expression
const average = function(a, b) {
    return (a + b) / 2
}

const averageResult = average(2, 5)
console.log(averageResult)