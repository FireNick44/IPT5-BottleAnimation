var svg = document.getElementById('bottleComp');
var left = document.getElementById('hoverLeft');
var right = document.getElementById('hoverRight');

var leftPath = document.getElementById('hoverLeftPath');
var rightPath = document.getElementById('hoverRightPath');

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


window.addEventListener('resize', windowResize());

function windowResize(){
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;

    console.log( windowWidth + ' X ' + windowHeight);
}

function mousemove(event){

    var mousecircle = document.getElementById('mousecircle');

    var e_pos_x = event.clientX;
    var e_pos_y = event.clientY;

    var x = e_pos_x - 15;
    var y = e_pos_y - 15;

    mousecircle.style.left = x + 'px';
    mousecircle.style.top = y + 'px';
    //console.log('X:' + e_pos_x + ' Y:' + e_pos_y);
}

function ShowBorder(){
    left.classList.toggle("invis");
    right.classList.toggle("invis");

    rightPath.classList.toggle("invis");
    leftPath.classList.toggle("invis");
}

function Showmousecircle(){

    var mousecircle = document.getElementById('mousecircle');
    mousecircle.classList.toggle("disappear");

}

async function bottlemouseOverLeft(event){
    svg.setAttribute('transform', ' rotate(-10) translate(1037 -2495)');
    right.classList.add("disappear");
    await Sleep(200);
    left.classList.add("disappear");
    await Sleep(600);
    left.classList.remove("disappear");
    right.classList.remove("disappear");

    //var pos_x = event.clientX;
    //var pos_y = event.clientY;
    //console.log('X:' + pos_x + ' Y:' + pos_y);
}

async function bottlemouseOverRight(event){
    svg.setAttribute('transform', 'rotate(10) translate(1040 -3990)');
    left.classList.add("disappear");
    await Sleep(200);
    right.classList.add("disappear");
    await Sleep(600);
    right.classList.remove("disappear");
    left.classList.remove("disappear");

    //var pos_x = event.clientX;
    //var pos_y = event.clientY;
    //console.log('X:' + pos_x + ' Y:' + pos_y);
}

async function bottleonmouseOutLeft(event){
    svg.setAttribute('transform', 'rotate(-0) translate(1103 -3244)');
}

async function bottleonmouseOutRight(event){
    svg.setAttribute('transform', 'rotate(0) translate(1103 -3244)');
}

