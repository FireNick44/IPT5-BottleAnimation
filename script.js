


function moveBottle(bootle1, pixelsDown, pixelsRight){
    let svg = document.getElementById(bootle1);

    let x = svg.getAttribute("cx") + pixelsDown;
    svg.setAttribute("cx", cx);

    let y = svg.getAttribute("y") + pixelsRight;
    svg.setAttribute("cy", cy);
}