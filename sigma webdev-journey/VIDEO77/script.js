function createCard(vLink, title, cname, views, monthsOld, duration, thumbnail) {

    let viewStr

    if (views < 1000) {
        viewStr = views
    }

    else if (views > 1000000)
        viewStr = ((views / 1000000).toFixed(1) + "M")
    else {
        viewStr = (views / 1000).toFixed(1) + "K"

    }

    let dayNo

    if (monthsOld < 1) {
        dayNo = (monthsOld * 30).toFixed() + "days"

    }
    else if (monthsOld < 12) {
       dayNo = monthsOld.toFixed(0) + " months"

    }

    else {
        const years = monthsOld / 12;
        dayNo = years.toFixed(1) + "years"
    }


    let html =
        `
        <div class="card">
        <a href="${vLink}" target="_blank" rel="noopener noreferrer">
            <div class="image"> <img src="${thumbnail}  " alt="">
           <div class="capsule"> ${duration} </div> </div>
        </a>
            <div class=" text">
                <h1> ${title} </h1>
                <p> ${cname} . ${viewStr} views . ${dayNo} ago</p>
            </div>
        </div>`

    document.querySelector(".container").insertAdjacentHTML("beforeend", html)
}

function handleAddCard() {
    
    const vLink = document.getElementById("vLink").value
    const title = document.getElementById("title").value
    const cname = document.getElementById("cname").value
    const views = parseInt(document.getElementById("views").value)
    const monthsOld = parseFloat(document.getElementById("monthsOld").value)
    const duration = document.getElementById("duration").value
    const thumbnail = document.getElementById("thumbnail").value

    createCard(vLink, title, cname, views, monthsOld, duration, thumbnail)
    
}

createCard("https://www.youtube.com/watch?v=tVzUXW6siu0","Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")




