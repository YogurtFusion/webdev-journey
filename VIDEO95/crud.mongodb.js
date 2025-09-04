use("CrudDB")

db.createCollection("cafes")

// db.cafes.insertOne({
//   name: "mocha loft cafe",
//   price: "premium",
//   flavours: "limited",
//   experience: "premium"
// })

// db.cafes.insertMany([
//   {
//     name: "latte lounge",
//     price: "mid",
//     flavours: "classic",
//     experience: "cozy"
//   },
//   {
//     name: "espresso express",
//     price: "premium",
//     flavours: "strong",
//     experience: "fast-paced"
//   },
//   {
//     name: "cappuccino corner",
//     price: "budget",
//     flavours: "foamy",
//     experience: "chill"
//   },
//   {
//     name: "cold brew cave",
//     price: "premium",
//     flavours: "iced",
//     experience: "refreshing"
//   },
//   {
//     name: "americano arena",
//     price: "mid",
//     flavours: "bold",
//     experience: "energetic"
//   },
//   {
//     name: "flat white factory",
//     price: "premium",
//     flavours: "smooth",
//     experience: "minimalist"
//   },
//   {
//     name: "macchiato mansion",
//     price: "luxury",
//     flavours: "layered",
//     experience: "artsy"
//   },
//   {
//     name: "irish brew bar",
//     price: "premium",
//     flavours: "boozy",
//     experience: "festive"
//   },
//   {
//     name: "affogato alley",
//     price: "mid",
//     flavours: "dessert",
//     experience: "sweet escape"
//   },
//   {
//     name: "mocha mountain",
//     price: "budget",
//     flavours: "chocolatey",
//     experience: "comforting"
//   }
// ])

// let find = db.cafes.find({ price: "premium"})
// console.log(find);

// let  a = db.cafes.find({price: 0})

// console.log(find.toArray());

// let b = db.cafes.findOne({price: "premium"})

// console.log(b);

// Update

// db.cafes.updateOne({price:"affordable"},
//   {$set:{ price: "for delete"}}
// )


// db.cafes.updateMany({price:"mid"},
//   {$set:{ price: "affordable"}})

// Delete

// db.cafes.deleteOne({price: "for delete"})
db.cafes.deleteMany({price: "for delete"})
