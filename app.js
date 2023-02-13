const btn = document.getElementById(`btn`)
const colorBox = document.getElementById(`colorBox`)
const hex = document.getElementById(`hex`)

function getNewColor(){
    var code = `0123456789ABCDEF` // the all possible code for colours

    var color = `#` // the hastag

    for(var i=0; i<6; i++){
        color = color + code[Math.floor(Math.random()*16)]
    }

    // the Box color

    colorBox.style.background = color;
}
