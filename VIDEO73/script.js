// finish this function

function Fviews(views) {
    if (views >= 1_000_000) 
        return (views/1_000_000).toFixed(1) + "M";
    else if (views >= 1_000) 
        return (views /1_000).toFixed(1) + "k";
    return views.toString();
    
}

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    document.querySelector(".card").innerHTML = `
    <img src = "${thumbnail}" alt = "video thumbnail"style="max-width: 300px;width: 100%;" />
    <h3>${title}</h3>
    <p>${cName}</p>
    <p>${Fviews(views)} views • ${monthsOld} months ago</p>
    
    <p>${duration}</p>`
    document.querySelector(".container").style.maxWidth = "300px"
    

}


createCard("Introduction to Backend| Sigma Web Dev video #2",
    "CodeWithHarry", 560000, "7months", "31:22", "http://i.pinimg.com/736x/19/db/31/19db31732931019b73bedcf17924f814.jpg"
)
console.log()

