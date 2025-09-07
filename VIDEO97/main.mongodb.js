use("companydb")

db.createCollection("Employee")

db.Employee.insertMany([
     { name: "Harry", salary: 45000000, language: "Python", city: "New York", isManager: true },
  { name: "Sophie", salary: 3200000, language: "JavaScript", city: "London", isManager: false },
  { name: "Raj", salary: 1500000, language: "Java", city: "Mumbai", isManager: true },
  { name: "Emily", salary: 5000000, language: "C#", city: "Toronto", isManager: false },
  { name: "Carlos", salary: 2800000, language: "Go", city: "San Francisco", isManager: false },
  { name: "Aisha", salary: 3500000, language: "Ruby", city: "Dubai", isManager: true },
  { name: "Tom", salary: 2000000, language: "PHP", city: "Berlin", isManager: false },
  { name: "Mia", salary: 4000000, language: "Swift", city: "Paris", isManager: false },
  { name: "Kenji", salary: 4500000, language: "TypeScript", city: "Tokyo", isManager: true },
  { name: "Fatima", salary: 3000000, language: "Kotlin", city: "Istanbul", isManager: false },
])

db.Employee.deleteOne({})