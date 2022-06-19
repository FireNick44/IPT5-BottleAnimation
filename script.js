


function bottlemouseoverLeft(event){
    var svg = document.getElementById('bottle');


    //svg.classList.add('hoverleft');

    //transition: ease-out 200ms;
    //
    

    //svg.setAttribute('transition', 'all 2s' )
    svg.setAttribute('transform', 'rotate(5) translate(240 -20)')
    var pos_x = event.clientX;
    var pos_y = event.clientY;

    console.log('X:' + pos_x + ' Y:' + pos_y);

   // svg.style.left =  pos_x+"px";
    //svg.style.right =  pos_y+"px";

}

function bottleonmouseleaveLeft(event){
    var svg = document.getElementById('bottle');


    svg.setAttribute('transform', 'rotate(0) translate(-30 298)')
}