const BLADESBLUE = "#444466";
const BLADESGREEN = "#446644";
const BLADESRED = "#884444";

drawClock("test", 2, 6, BLADESRED);


function drawClock(canvasID, complete, segment, colorStr) {
// Draws a clock with the specified number of segments and fills in some of them.

    var canvas = document.getElementById(canvasID);
    if (canvas.getContext) {

        // set up canvas context
        var ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;

        // Draw clock background
        ctx.fillStyle = colorStr;
        ctx.beginPath();
        ctx.arc(100,100,100,0,Math.PI * 2);
        ctx.fill();

        // Create the appropriate number of segments
        for (i = 0; i < segment; i++) {

            ctx.strokeStyle = "#FFFFFF";

            // Define segment size
            var segSize = Math.PI * (2/segment);
        
            // We start at the top of the circle; each subsequent segment starts an appropriate distance along the circumference
            var arcStart = 0 - (Math.PI * (1/2)) + (i * segSize);
            var arcEnd = arcStart + segSize;
        
            // Start drawing
            ctx.beginPath();
            // Move pen to the middle of the canvas
            ctx.moveTo(100,100);
            // Draw arc centered on the canvas with endpoints as defined above
            ctx.arc(100,100,98,arcStart,arcEnd)
            // Draw a line back to the middle
            ctx.lineTo(100,100);
        
            // Close the shape; if it's not completed yet, we fill it in grey and add an outline
            if ( i >= complete ) {
                ctx.fillStyle = "#aaaaaa"
                ctx.fill();
        
                // If we fill, we draw an unfilled copy on top with white outline
                ctx.strokeStyle = "#FFFFFF";
                ctx.beginPath();
                ctx.moveTo(100,100);
                ctx.arc(100,100,98,arcStart,arcEnd)
                ctx.lineTo(100,100);
                ctx.stroke();
        
            } else {
                ctx.stroke();
            }


        }
    }
}