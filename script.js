drawClock(8);


function drawClock(segment) {
// Draws a clock with the specified number of segments.

    var canvas = document.getElementById("test");
    if (canvas.getContext) {

        // set up canvas context
        var ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;

        // Define segment size
        var segSize = Math.PI * (2/segment);

        // Create the appropriate number of segments
        for (i = 0; i < segment; i++) {
            
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
            
            // Close the shape
            ctx.stroke();
        }
    
    }



}