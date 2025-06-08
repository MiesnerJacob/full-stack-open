// Defining list, appending to it, printing values
const t = [1, -1, 3]

t.push(5)

console.log(t.length)
console.log(t[1])

t.forEach(value => {
    console.log(value)
})

// Concat list (idiomatic way of appending to lists)
const v = [1, -1, 3]

const v2 = t.concat(5)

console.log(v)
console.log(v2)

// Map function
const p = [1, 2, 3]

const p1 = p.map(value => value * 2)
console.log(p1)

const p2 = p.map(value => '<li>' + value + '</li>')
console.log(p2)

// Deconstructing assignment
const m = [1, 2, 3, 4, 5]

const [first, second, ...rest] = m
console.log(first, second)
console.log(rest)