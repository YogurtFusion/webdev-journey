// Genrate a dummy data set n this format in a collection called employees in a db called company 

// { 
// name: "Harry",
// salary: 45000000,
// language: "python", 
// city: "New York",
// isManager: true 
 
// }

// Genrate 10 such records thwn a button called generate data is clicked !
// Create an express app with mongoose to achive it 
// Eeverything the  button is clicked, you should clear the collection
import mongoose, { connect } from "mongoose"
import express from "express"
import { Employee } from "./employee.js"

const app = express()
const port = 3000

await mongoose.connect("mongodb://localhost:27017/company")
const dummyEmployees = [
  { title: "Harry", salary: 45000000, language: "Python", city: "New York", isManager: true },
  { title: "Sophie", salary: 3200000, language: "JavaScript", city: "London", isManager: false },
  { title: "Raj", salary: 1500000, language: "Java", city: "Mumbai", isManager: true },
  { title: "Emily", salary: 5000000, language: "C#", city: "Toronto", isManager: false },
  { title: "Carlos", salary: 2800000, language: "Go", city: "San Francisco", isManager: false },
  { title: "Aisha", salary: 3500000, language: "Ruby", city: "Dubai", isManager: true },
  { title: "Tom", salary: 2000000, language: "PHP", city: "Berlin", isManager: false },
  { title: "Mia", salary: 4000000, language: "Swift", city: "Paris", isManager: false },
  { title: "Kenji", salary: 4500000, language: "TypeScript", city: "Tokyo", isManager: true },
  { title: "Fatima", salary: 3000000, language: "Kotlin", city: "Istanbul", isManager: false }
];
 
app.get('/generate-data',async (req, res) => {
    try{
        await Employee.deleteMany({});
        await Employee.insertMany(dummyEmployees)
        res.send("Insterd 10 dummy employees")
            
} catch(err){
    console.error(err)
    res.status(500).send("failed to insert employees")
}
})

app.get("/employee", async (req, res)=>{
    const employees = await Employee.find({})
    res.json(employees)
});

app.listen(port, () =>{
    console.log(`server running on http:// localhost: ${port}`);
    
})