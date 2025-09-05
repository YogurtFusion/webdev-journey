use("CrudDB")

db.createCollection("practiceCurd")

db.practiceCurd.insertMany([
    { name: "Alice", age: 18, grade: "A", hobbies: ["reading", "gaming"] },
  { name: "Bob", age: 20, grade: "B", hobbies: ["sports", "music"] },
  { name: "Charlie", age: 22, grade: "C", hobbies: ["gaming", "coding"] },
  { name: "David", age: 19, grade: "A", hobbies: ["music", "reading"] },
  { name: "Eva", age: 21, grade: "B", hobbies: ["coding", "sports"] }
])

// who are 20
let a = db.practiceCurd.find({age: {$eq: 20}})

// console.log(a);

// not age 20 
let b = db.practiceCurd.find({age:{$ne: 20}})
// console.log(b);

// greater then 20
let c = db.practiceCurd.find({age: {$gt: 20}})
// console.log(c);

// greater then and equal to 20 
let d = db.practiceCurd.find({age: {$gte:20}})
// console.log(d);

// less then 20
db.practiceCurd.find({age: {$lt: 20}})

// less then and equal to 20
db.practiceCurd.find({age: {$lte: 20}})

// find students whose grade either A or C 

db.practiceCurd.find({grade: {$in: ["A", "C"]}})

// logical operators 

// $and - age >= 20 AND grade = "B"

db.practiceCurd.find({$and: [ {age: {$gte: 20}}, {grade: "B"}]})
