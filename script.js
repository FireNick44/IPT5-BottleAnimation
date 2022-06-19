
function ShowBorder(){
    // Toggle Border //
}

var svg = document.getElementById('bottleComp');

function bottlemouseOverLeft(event){
    svg.setAttribute('transform', ' rotate(10) translate(1040 -3990)');

    var pos_x = event.clientX;
    var pos_y = event.clientY;
    console.log('X:' + pos_x + ' Y:' + pos_y);
}

function bottleonmouseOutLeft(event){
    svg.setAttribute('transform', 'rotate(0) translate(1103 -3244)');
}

function bottlemouseOverRight(event){
    svg.setAttribute('transform', ' rotate(10) translate(1040 -3990)');
}

function bottleonmouseOutRight(event){
    svg.setAttribute('transform', 'rotate(0) translate(1103 -3244)');
}