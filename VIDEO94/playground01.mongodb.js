/* global use, db */
use('sigmaDB'); // no space in DB name!

db.getCollection('courses').insertMany([
  {
    "java": "course",
    "price": "Time",
    "unfortunately": "I'm dangerously close to doomed"
  },
  {
    "python": "tutorial",
    "price": "Sleep",
    "unfortunately": "My sanity is in beta mode"
  },
  {
    "javascript": "bootcamp",
    "price": "Social Life",
    "unfortunately": "Debugging my own existence"
  },
  {
    "c++": "crash course",
    "price": "Patience",
    "unfortunately": "Pointers pointing at my downfall"
  },
  {
    "html": "beginner guide",
    "price": "Brain Cells",
    "unfortunately": "Div-ing deeper than intended"
  },
  {
    "css": "design tricks",
    "price": "Peace of Mind",
    "unfortunately": "Flexbox flexing on me"
  },
  {
    "react": "framework",
    "price": "Reality",
    "unfortunately": "Hooks got me hooked"
  },
  {
    "nodejs": "backend grind",
    "price": "Weekends",
    "unfortunately": "Server down, mood down"
  },
  {
    "mongodb": "database journey",
    "price": "Storage Space",
    "unfortunately": "Collections collecting my tears"
  },
  {
    "ai": "agent building",
    "price": "Energy",
    "unfortunately": "Neural nets tangled like my thoughts"
  }
]);

console.log(`data inserting completed`);
