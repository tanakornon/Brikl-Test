const drawThirdAnswer = (canvas) => {
    const ctx = canvas.getContext("2d");

    const drawBlackRect = () => {
        ctx.beginPath();

        ctx.fillStyle = "black";
    
        ctx.rect(25, 25, 50, 50);
        ctx.fill();
    };

    const drawDot = () => {
        ctx.beginPath();

        ctx.fillStyle = "black";
    
        ctx.arc(125, 125, 3, 0, 2 * Math.PI);
        ctx.fill();
    }

    const drawRect = () => {
        ctx.beginPath();

        ctx.lineWidth = 4;
        ctx.fillStyle = "#FFFF54";
        ctx.strokeStyle = "black";
    
        ctx.rect(182.5, 50, 125, 125);
        ctx.fill();
        ctx.stroke();
    };

    drawBlackRect();
    drawDot();
    drawRect();
}