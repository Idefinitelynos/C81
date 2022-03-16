canvas=document.getElementById("can");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(150, 300, 63, 0, 2*Math.PI);
ctx.stroke()
canvas.addEventListener("mousedown", mousedown)
function mousedown(e){
    mousex=e.clientX-canvas.offsetLeft
    mousey=e.clientY-canvas.offsetTop
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=2;
    ctx.arc(mousex, mousey, 63, 0, 2*Math.PI);
    ctx.stroke()
}