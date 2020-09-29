const BLADESBLUE = "#444466";
const BLADESGREEN = "#446644";
const BLADESRED = "#884444";

var clocksActive = 0;

// This function governs clock creation
document.getElementById("clock-submit").addEventListener("click", function(event) {
    event.preventDefault();

    // Show clockpanel if hidden
    if ( clocksActive < 1 ) {
        document.querySelector(".clock-port").style.display = "block"
    }

    // #########################
    //      HTML STRUCTURE
    // #########################


    // Create create panel for clock content
    var newPanel = document.createElement("div");
    newPanel.setAttribute("class", "clock-panel");

    // Create canvas with unique id (this becomes the clock)
    var newCanvas = document.createElement("canvas");
    var canvID = "clock" + clocksActive++;
    newCanvas.setAttribute("id", canvID);

    // We use this data attribute to track the clock's completion progress
    newCanvas.setAttribute("data-complete", 0);

    // create h2 to label the clock
    var newH2 = document.createElement("h2");
    newH2.innerText = document.getElementById("clock-input").value;;

    // Append up the chain
    newPanel.appendChild(newCanvas);
    newPanel.appendChild(newH2);

    document.querySelector(".clock-port").appendChild(newPanel);

    // #############################
    //        DRAW THE CLOCK
    // #############################
    
    // Get color
    var clockColor = BLADESBLUE;
    var colorInput = document.getElementById("color-input").value;
    if ( colorInput === "red" ) {
        clockColor = BLADESRED;
    } else if ( colorInput === "green") {
        clockColor = BLADESGREEN;
    }
    
    // Determine segment count
    var segCount = document.getElementById("segment-input").value;

    // Draw the clock
    drawClock(`clock${clocksActive-1}`, 2, segCount, clockColor);

    // Add increment behavior to clock
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