// Element.innerHtml is used to populate a div with Html. Search online about this method and create a website with a div tag containing a random joke given an array of jokes  from the internet (use any website to create the array ) Your website should show a random joke on every reload. Minimum  length of you jokes array should  be 10

let jokes = [
    "From my dad: What do you get when a topless blonde rubs sun tanning oil on a topless brunette? \n ME : Your camera.",

    "A Japanese student: Master Aykodo, why do Europeans think we look all the same? \n The master replied: I'm not master Aykodo.",

    "I told my dad my neck hurt cause I slept wrong \n He said the only thing you do, you can’t do right?",

    " \" Wife: OK, that's it, I'm leaving you! You're SO childish! \"  \n Husband: \" Well, good luck with that - because the floor is lava! \" ",

    "A clairvoyant to a man, “I can see you are the father of 3 kids.” \n - The man smiles smugly, “No, I have 4 kids.”  - \n  The clairvoyant, “That’s what you think.” ",

    "Coco Chanel once said that you should put perfume on places where you want to be kissed by a man. But hell does that burn!",

    "Wow, honey, I never thought our son would go that far! \n-\n Yeah, the catapult is really amazing. Go get our daughter!",

    "A guest is ordering at a restaurant, “Do you think you could bring me what that gentleman over there is having?” \n - \n The waiter looks at him sternly, “No sir, I’m very sure he intends to eat it himself. ” ",

    "What do politicians and diapers have in common? \n -\n Both should be changed regularly, and both for the same reason",

    "How do you rob a snowman?\n - \n With a hairdryer."
]

let randomJokes = jokes[Math.floor(Math.random()*jokes.length)]
console.log(randomJokes);

let jokesDiv = document.getElementsByClassName("div")[0]

jokesDiv.innerHTML = randomJokes.split("\n").join("<br>")
