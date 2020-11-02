

//////////Exercises///////////

////////Completing the Game

const circle = document.getElementById("block")
circle.style.backgroundColor="blue"


const moveRight = function(){
    circle.style.left = "25px"
}
moveRight()

const moveLeft = function(){
    circle.style.right = "25px"
}
moveLeft()

const moveTop = function(){
    circle.style.down = "25px"
}
moveTop()

const moveDown = function(){
    circle.style.top = "25px"
}
moveDown()

const movingRight = function(){
    let right = parseInt(circle.style.left);
    right += 20 
    circle.style.left = right+"px"
}
//movingRight()

const movingLeft = function(){
    let left = parseInt(circle.style.left);
    left -= 20 
    circle.style.left = left+"px"
}
//movingLeft()

const movingTop = function(){
    let top = parseInt(circle.style.top);
    top -= 20 
    circle.style.top = top+"px"
}
//movingTop()

const movingDown = function(){
    let down = parseInt(circle.style.top);
    down += 20 
    circle.style.top = down+"px"
}
//movingDown()

////////Reservations

// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }
  

// const check = function(name){
//     name = document.getElementById("check").value 
//     if (name == "Bob" || name == "Ted"){
//         if (reservation.name.claimed){
//             let name = "Hmm, someone already claimed this reservation"
//         }
//         else let name =  "Welcome, "+name ;
//     }
//     else {name= "You have no reservation"}

// }

/////////////////Visual Overload

for (let i=0 ; i<6; i++ ) {
    let box = document.createElement("div");
    box.setAttribute("class", "magicBox");
    box.style.lineHeight= "100px";
    box.style.width= "100px";

    document.body.getElementById("container").appendChild(box)
}


//////////////material//////////////////
// const up = document.getElementById("up")
// up.onclick()= movingTop


// const moveRight = function(){
//     document.getElementById("block").style.left += "150px"
//   }
// moveRight()
// const kepMovingRight= function(){
//     let left = parseInt( document.getElementById("block").style.left) || 0;
//     left += 20
//     document.getElementById("block").style.left =left+ "px"


///////////////DOM material ///////////////////
//  console.log(document)

//  const playingField = document.getElementById("playing-field")
// console.log(playingField)

// const down = document.getElementById("down")
// console.log(down)
// down.innerHTML = "Down"

// console.log(down.innerHTML)

// console.log(playingField.innerHTML)

// const circle = document.getElementById("block")
// circle.style.background = "blue"

// const moveRight = function(){
//     document.getElementById("block").style.left += "150px"
//   }
// moveRight()
// const kepMovingRight= function(){
//     let left = parseInt( document.getElementById("block").style.left) || 0;
//     left += 20
//     document.getElementById("block").style.left =left+ "px"

// }
// const header = document.createElement("h1")
// header.innerHTML = "The Best Game Ever"
// header.style.color = "#c0392b"
// header.style.fontFamily = "Helvetica"
// document.body.appendChild(header)

// const subHeader = document.createElement("h2");
// subHeader.innerHTML="Game by the Creator"
// subHeader.setAttribute("class", "Game")
// document.body.appendChild(subHeader)

// const container = document.getElementById("container");
// container.style.padding= "30px"
// ///////////////////////
// const box = document.getElementById("box")

// const enterColor = function () {
//     box.style.backgroundColor = "#c0392b"
//     box.innerHTML = "AHH GO AWAY"
// }

// const leaveColor = function () {
//     box.style.backgroundColor = "#1abc9c"
//     box.innerHTML = "Hover over me!"
// }

// const clickColor = function(){
//     box.style.background ="#8e44ad"
// }
// /////////////////////////

// const list = document.getElementsByTagName("ul");
// list[0].setAttribute("id", "my-list")

// const addItem = function(){
//     const newItem = document.createElement("li")
//     //console.log(newItem)
//     document.getElementById("my-list").appendChild(newItem)
//     newItem.innerHTML= prompt("add an item")
// }




// const box = document.getElementById("box")
// box.onclick = function () {
//     box.innerHTML = "clicked"
// }

