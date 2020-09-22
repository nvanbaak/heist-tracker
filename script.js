const BLADESBLUE = "#444466";
const BLADESGREEN = "#446644";
const BLADESRED = "#884444";

document.getElementById("clock-submit").addEventListener("click", function(event) {
    event.preventDefault();

    // Create HTML elements and assign the relevant classes
    var newPanel = document.createElement("div");
    newPanel.setAttribute("class", "clock-panel");

    var newCanvas = document.createElement("canvas");
    newCanvas.setAttribute("id", "test2");

    var canvasLabel = document.getElementById("clock-input").value;

    var newH2 = document.createElement("h2");
    newH2.innerText = canvasLabel;

    // Append up the chain
    newPanel.appendChild(newCanvas);
    newPanel.appendChild(newH2);

    document.querySelector(".clock-port").appendChild(newPanel);

    // drawClock("test2", 1, 4, BLADESBLUE);


})









function drawClock(canvasID, complete, segment, colorStr) {
// Draws a clock with the specified number of segments and fills in some of them.

    var canvas = document.getElementById(canvasID);
    if (canvas.getContext) {

        // set up canvas context
        var canvSize = 250;
        var halfSize = canvSize / 2;
        var portion = halfSize * 0.8;
        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = canvSize;

        // Draw clock background
        ctx.fillStyle = colorStr;
        ctx.shadowColor = "black";
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(halfSize,halfSize,portion,0,Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;


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
            ctx.moveTo(halfSize,halfSize);
            // Draw arc centered on the canvas with endpoints as defined above
            ctx.arc(halfSize,halfSize,portion-2,arcStart,arcEnd)
            // Draw a line back to the middle
            ctx.lineTo(halfSize,halfSize);
        
            // Close the shape; if it's not completed yet, we fill it in grey and add an outline
            if ( i >= complete ) {
                ctx.fillStyle = "#aaaaaa"
                ctx.fill();
        
                // If we fill, we draw an unfilled copy on top with white outline
                ctx.strokeStyle = "#FFFFFF";
                ctx.beginPath();
                ctx.moveTo(halfSize,halfSize);
                ctx.arc(halfSize,halfSize,portion-2,arcStart,arcEnd)
                ctx.lineTo(halfSize,halfSize);
                ctx.stroke();
        
            } else {
                ctx.stroke();
            }


        }
    }
}