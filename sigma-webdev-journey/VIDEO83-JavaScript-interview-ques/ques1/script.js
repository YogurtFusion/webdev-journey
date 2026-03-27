// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let student = prompt("Enter you name: ")

function sortingHat(student) {
    let studentLenght = student.length
    if (studentLenght < 6) {
        house =   "you are in Gryffindor"
      
      
        
    }
     else if (  studentLenght >= 6 && studentLenght <8) {
        house  =   "you are in Hufflepuff"
      
      
    }
    else if ( studentLenght >= 8 && studentLenght <12 ){
        house =   "you are in Ravenclaw"
      
      
    }
    else{
        house =   "you are in house slytherin"
      
      
    }
    console.log(`you're in ${house}`);
    alert(`you are in ${house}`);
    
}
sortingHat(student)
