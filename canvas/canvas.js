//Resizing
window.addEventListener("resize", () => {
});

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    
    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // drawing rect
    ctx.fillRect(100,100,300,300);
    
    // not filled rect
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.strokeRect(500, 500, 100, 100);

    ctx.lineWidth = 1;
    ctx.strokeStyle = "blue";
    ctx.strokeRect(550, 550, 100, 100);

    // draw line
    ctx.beginPath();
    // starting point
    ctx.moveTo(900, 100);
    // vertical
    ctx.lineTo(900, 500);
    // horizontal
    ctx.lineTo(800, 500);
    // connect the line
    ctx.closePath();
    ctx.stroke();


    //variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function finishPosition() {
        painting = false;
        //reset
        ctx.beginPath();
    }

    function draw(e) {
        if(!painting) {
            return;
        }
        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    //Event Listners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishPosition);
    canvas.addEventListener('mousemove', draw);
    
});
