mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/Week8'; 
mongoose.connect(MONGO_URI)

const db = mongoose.connection;

db.on('error', function(err){
    console.log("Error occured during connection" + err);
});

db.once('connected', function() {
    console.log(`Connected to ${MONGO_URI}`);
});

// Schema
const PersonScheme = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    Gender: String,
    Salary: Number
});

// Model
const person_doc = mongoose.model('modelname', PersonScheme, 'personCollection');

// Create a document - Task 1
const doc1 = new person_doc({
    name: 'Jeremy',
    age: 14,
    Gender: 'Male',
    Salary: 1200
});

doc1
    .save()
    .then((doc1) => {
        console.log("New document added:", doc1);
    })
    .catch((err) => {
        console.error(err);
    });


// Task 2
const manypersons = [
    { name: 'Simon', age: 42, Gender: "Male", Salary: 3456 },
    { name: 'Neesha', age: 23, Gender: "Female", Salary: 1000 },
    { name: 'Mary', age: 27, Gender: "Female", Salary: 5402 },
    { name: 'Mike', age: 40, Gender: "Male", Salary: 4519 }
];

person_doc.insertMany(manypersons)
    .then(function() {
        console.log("Multiple documents inserted successfully.");
    })
    .catch(function(error) {
        console.log("Error inserting multiple documents:", error);
    });


// Task 3
person_doc.find({})
    .limit(5)
    .exec()
    .then(docs => {
        console.log("Showing first 5 documents:");
        console.log(docs);
    })
    .catch(err => console.error(err));

// Task 4  
var givenage = 25;

person_doc.find({ Gender: "Female", age: { $gte: givenage } })
    .exec()
    .then(docs => {
        console.log("Filtered results:");
        console.log(docs);
    })
    .catch(err => console.error(err));

// Task 5
person_doc.countDocuments()
    .exec()
    .then(count => {
        console.log("Total documents:", count);
    })
    .catch(err => console.error(err));


// Task 6
person_doc.deleteMany({ age: { $gte: 25 } })
    .exec()
    .then(result => {
        console.log("Deleted documents:", result);
    })
    .catch(err => console.error(err));

// Task 7
person_doc.updateMany({ Gender: "Female" }, { Salary: 5555 })
    .exec()
    .then(result => {
        console.log("Updated documents:", result);
    })
    .catch(err => console.error(err));
