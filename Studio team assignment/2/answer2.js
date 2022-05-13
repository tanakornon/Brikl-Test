const drawSecondAnswer = (canvas) => {
    const ctx = canvas.getContext("2d");

    const drawCircle = () => {
        ctx.beginPath();
        
        ctx.lineWidth = 5;
        ctx.fillStyle = "#377E21";
        ctx.strokeStyle = "#FFFF54";
    
        ctx.arc(50, 50, 25, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    };
    
    const drawRect = () => {
        ctx.beginPath();

        ctx.lineWidth = 4;
        ctx.fillStyle = "#FFFF54";
        ctx.strokeStyle = "black";
    
        ctx.rect(150, 25, 125, 125);
        ctx.fill();
        ctx.stroke();
    };

    drawCircle();
    drawRect();
}