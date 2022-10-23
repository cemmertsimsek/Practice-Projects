const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Best fruit.",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit.",
});

const berry = new Fruit({
  name: "Berry",
  rating: 3,
  review: "Not great fruit.",
});

berry.save(); //

const person = new Person({
  name: "Mert",
  age: 29,
  favouriteFruit: pineapple,
});

// const person = new Person({
//   name: "Cem",
//   age: 28,
// });

// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Best fruit so far.",
});

const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review: "Too sour for me",
});

const banana = new Fruit({
  name: "Banana",
  rating: 6,
  review: "Weird texture",
});

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits to fruitsDB");
//   }
// });

// Fruit.find((err, fruits) => {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     fruits.forEach(function (fruit) {
//       console.log(fruit.name);
//     });
//   }
// });

// Person.deleteMany({ name: "Cem" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted the document.");
//   }
// });

// Fruit.updateOne(
//   { _id: "635286189baa525bcb684ab9" },
//   { kilo: "Peach" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Succesfully updated the document.");
//     }
//   }
// );

Person.updateOne({ name: "Cem" }, { favouriteFruit: berry }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully updated the document.");
  }
});

// Fruit.deleteMany({ name: "Kiwi" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted the document.");
//   }
// });

// const findDocuments = function (db, callback) {
//   const collection = db.collection("fruits");
//   collection.find({}).toArray(function (err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// };
