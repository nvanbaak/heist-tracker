drawClock();

function drawClock() {

    var canvas = document.getElementById("test");
    if (canvas.getContext) {

        var ctx = canvas.getContext('2d');

        canvas.width = 200;
        canvas.height = 200;

        var arcStart = 0 - (Math.PI * (1/2));
        var arcEnd = arcStart + (Math.PI * (1/4));

        

        // Start drawing
        ctx.beginPath();

        // Move pen to the middle of the canvas
        ctx.moveTo(100,100);

        // Draw arc centered on the canvas
        ctx.arc(100,100,98,arcStart,arcEnd, false)

        // Draw a line back to the middle
        ctx.lineTo(100,100);

        // Close the shape
        ctx.stroke();
    
    }



}