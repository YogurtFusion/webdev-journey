// The html audioElement interfare can be used to play audio in the browser. create an alarm clock which displays time and plays sound at a user specified time  


let alarmTime = null;
let isAlarmPlaying = false;
const audio = document.getElementById("audio")


const clock = () => {
    let date = new Date()
    let hrs = date.getHours()
    let mins = date.getMinutes()
    let period;
    if (hrs >= 12) {
        period = "PM"
    } else {
        period = "AM"
    }

    if (hrs === 0) {
        hrs = 12
    }

    if (hrs > 12) {
        hrs = hrs - 12
    }

    if (hrs < 10) {
        hrs = "0" + hrs
    }

  

    if (mins < 10) {
        mins = "0" + mins
    }

    const format = `${hrs}:${mins} ${period}  `

    // document.getElementById("clock").insertAdjacentHTML("beforeend", format) 
    // use if Injecting new HTML markup (like buttons, icons, etc.) Or appending multiple time logs to a list also it appends new line over line 
    document.getElementById("clock").textContent = format // it actually overwrites the old line so clocks don't stack up 
    console.log(format);

    if(alarmTime === format && !isAlarmPlaying){
        audio.play()
        isAlarmPlaying = true
        console.log("alarm is lining");
        alert('alarm is linging');
        
    }
}


setInterval(clock, 1000)



function setAlarm() {
    const input = document.getElementById("input").value
    console.log(`user selected: ${input}`);

    let [hrs, mins] = input.split(":")

    hrs = parseInt(hrs)
    mins = parseInt(mins)
    let period;
    if (hrs >= 12) {
        period = "PM"
    } else {
        period = "AM"
    }

    if (hrs === 0) {
        hrs = 12
    }

    if (hrs > 12) {
        hrs = hrs - 12
    }

    if (hrs < 10) {
        hrs = "0" + hrs
    }

  

    if (mins < 10) {
        mins = "0" + mins
    }

    alarmTime = `${hrs}:${mins} ${period}  `

    console.log(`alarm set for: ${alarmTime}`);


}
