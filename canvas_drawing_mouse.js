
// <canvas class="c-canvas__draw" width="1889" height="1063"></canvas>

(function() {
    const canvas = document.querySelector(".c-canvas__draw");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");

    context.strokeStyle = "#E40521";
    context.lineWidth = 4;
    context.lineCap = "round";

    let shouldPaint = false;

    canvas.addEventListener ("mousedown", function (event) {
        shouldPaint = true;
        context.lineTo(event.clientX, event.clientY);
        context.beginPath();
    });

    document.addEventListener ("mouseup", function (event) {
        shouldPaint = false;
    });

    canvas.addEventListener ("mousemove", function (event) {
        if (shouldPaint) {
            context.lineTo(event.clientX, event.clientY);
            context.stroke();
        }
    });

    document.querySelectorAll(".c-canvas__nav a").forEach(link => {
            link.addEventListener("click", function (event) {
                context.strokeStyle = this.style.backgroundColor;
            });
    });
    
    const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(e) {
    e.preventDefault();
    context.clearRect(0, 0, canvas.width, canvas.height);
});

})();

    
    
document.querySelector('#screen').addEventListener('click', function() {
    html2canvas(document.querySelector('.c-canvas'), {
        onrendered: function(canvas) {
            // document.body.appendChild(canvas);
          return Canvas2Image.saveAsPNG(canvas);
        }
    });
});
