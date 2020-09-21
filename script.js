drawClock(2,6);


function drawClock(complete, segment) {
// Draws a clock with the specified number of segments and fills in some of them.

    var canvas = document.getElementById("test");
    if (canvas.getContext) {

        // set up canvas context
        var ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;

        // Draw clock background
        ctx.fillStyle = "#444466";
        ctx.beginPath();
        ctx.arc(100,100,100,0,Math.PI * 2);
        ctx.fill();

        // Create the appropriate number of segments
        for (i = 0; i < segment; i++) {

            drawClockSegment(ctx,i,segment,(i < complete))

        }
    }
}

function drawClockSegment(ctx, segNum, segTotal, complete, colorStr) {
    // This function draws a segment of a clock
    // ctx        Canvas context
    // segNum     This segment's position in the clock 
    // segTotal   The total number of segments in this clock
    // outline    A boolean that tells us whether the segment is complete
    // color      A string representing a color

    // Reset stroke style based on whether the segment is filled
    ctx.strokeStyle = "#FFFFFF";

    // Define segment size
    var segSize = Math.PI * (2/segTotal);

    // We start at the top of the circle; each subsequent segment starts an appropriate distance along the circumference
    var arcStart = 0 - (Math.PI * (1/2)) + (segNum * segSize);
    var arcEnd = arcStart + segSize;

    // Start drawing
    ctx.beginPath();
    // Move pen to the middle of the canvas
    ctx.moveTo(100,100);
    // Draw arc centered on the canvas with endpoints as defined above
    ctx.arc(100,100,98,arcStart,arcEnd)
    // Draw a line back to the middle
    ctx.lineTo(100,100);

    // Close the shape; we only fill if it's been completed
    if (!complete) {
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