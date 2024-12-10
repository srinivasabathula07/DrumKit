
for(let i=0; i<document.querySelectorAll(".drum").length; i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function (){
    this.style.color="green";
    let button = this.innerHTML;
    switch(button)
    {
        case "w":
            let mymusic1 = new Audio("./sounds/tom-1.mp3");
            mymusic1.play();
            break;
        case "a":
            let mymusic2 = new Audio("./sounds/tom-2.mp3");
            mymusic2.play();
            break;
        case "s":
            let mymusic3 = new Audio("./sounds/tom-3.mp3");
            mymusic3.play();
            break;
        case "d":
            let mymusic4 = new Audio("./sounds/tom-4.mp3");
            mymusic4.play();
            break;
        case "j":
            let mymusic5 = new Audio("./sounds/crash.mp3");
            mymusic5.play();
            break;
        case "k":
            let mymusic6 = new Audio("./sounds/kick-bass.mp3");
            mymusic6.play();
            break;
        case "l":
            let mymusic7 = new Audio("./sounds/snare.mp3");
            mymusic7.play();
            break;

        default:
            console.log(button);
        

    }
});

} 


    




// function handleclick1()
// {
//     alert("I got clicked");
// }