var socket = io();


socket.emit('new player');
var mouse = { x: 0, y: 0 };
var color = 4;

// ширина границ
let border = 1
    // цвет границ
let borderColor = 'rgba(0,0,0,.4)'
    // setInterval(function() {

// }, pixSize00 / 60);



socket.on('state', function(players, data) {

    var div = document.getElementById("Iimg").src = data

});

socket.on('edit', function(data) {

    var div = document.getElementById("Iimg").src = data
})


click = false;
document.getElementById("Iimg").onclick = function(e) {

    var rect = e.target.getBoundingClientRect();
    mouse.x = e.clientX - rect.left; //x position within the element.
    mouse.y = e.clientY - rect.top; //y position within the element.
    console.log("Left? : " + mouse.x + " ; Top? : " + mouse.y + ".");

    socket.emit('ckick', mouse.x, mouse.y, color)
}


function Write() { document.getElementById("colors").style.visibility = "visible" }

function Hidden() { document.getElementById("colors").style.visibility = "hidden" }

function Colorwhite() { color = 0 }

function Colorgrey1() { color = 1 }

function Colorgrey2() { color = 2 }

function Colorblack1() { color = 3 }

function Colorblack2() { color = 4 }

function Colorgreen1() { color = 5 }

function Colorgreen2() { color = 6 }

function Colorgreen3() { color = 7 }

function Coloryelow1() { color = 8 }

function Coloryelow2() { color = 9 }

function Coloryelow3() { color = 10 }

function Colorred1() { color = 11 }

function Colorred2() { color = 12 }

function Colorred3() { color = 13 }

function Colorviolet1() { color = 14 }

function Colorviolet2() { color = 15 }

function Colorblue1() { color = 16 }

function Colorblue2() { color = 17 }

function Colorblue3() { color = 18 }