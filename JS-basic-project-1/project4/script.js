// Create a Digital  seconds clock using setTimeinterval and date object in JavaScript. The date object can be used to get the date, time , hours and seconds which can the be updated using setInterval. Try to keep UI good looking 

const myFunction =() =>  {
    
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    // console.log(now, hours, minutes, seconds);
    let period;

    if (hours >= 12 ) {
    period = "PM"
    }
    else{
        period = "AM"
    }

    if(hours > 12){
        hours = hours -12
    }
    if (hours === 0) {
        hours  = 12;
    }

    
    if (hours < 10) {
        hours = "0" + hours;
    }
    
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10 ) {
        seconds = "0" + seconds
    }
    let formattedTime = `${hours}:${minutes}:${seconds} ${period}`
    
    console.log(formattedTime);
    
    document.getElementById("clock").textContent = formattedTime
}

// myFunction()
setInterval(myFunction, 1000)