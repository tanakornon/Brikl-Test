const drawFirstAnswer = (canvas) => {
    const ctx = canvas.getContext("2d");

    const drawCircle = () => {
        ctx.beginPath();

        ctx.lineWidth = 5;
        ctx.fillStyle = "#C3D8BC";
        ctx.strokeStyle = "#FFFF54";
    
        ctx.arc(50, 50, 25, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    };
    
    const drawRect = () => {
        const [shapeCenterX, shapeCenterY] = [200, 200];
        const radianAngle = (45 * Math.PI) / 180;
        
        ctx.beginPath();
    
        ctx.translate(shapeCenterX, shapeCenterY);
        ctx.rotate(radianAngle);
        ctx.translate(-shapeCenterX, -shapeCenterY);
    
        ctx.lineWidth = 3;
        ctx.fillStyle = "#FFFFEE";
        ctx.strokeStyle = "black";
    
        ctx.rect(150, 150, 100, 100);
        ctx.fill();
        ctx.stroke();
    
        ctx.translate(shapeCenterX, shapeCenterY);
        ctx.rotate(-radianAngle);
        ctx.translate(-shapeCenterX, -shapeCenterY);
    };

    drawCircle();
    drawRect();
}