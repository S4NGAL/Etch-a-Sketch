let pixels;
let colors = document.getElementById("colorPicker");
let color;

const gridContainer = document.querySelector("#grid_container");
let canvasSize = gridContainer.clientWidth;
const inputer = document.getElementById("quantity");

const resetButton = document.getElementById("reset_button");
resetButton.addEventListener("click", function(){
    resetCanvas();
})


// to create canvas at 
createCanvas();

///////////////////////////////FUNCTIONS/////////////////////////////

function createCanvas() {
    //Takes resolution value from user
    let resolution = inputer.value;
    let pixelSize = canvasSize/ resolution;

    //Create divs that square of given resolution
    for (let i = 0; i < resolution**2; i++){
        let temp = document.createElement("div");
        temp.className = "pixel";
        gridContainer.appendChild(temp);
        temp.addEventListener("mouseover", function(){
            color = document.getElementById("colorPicker").value;
            temp.style.backgroundColor = color;
        });
    }

    //give divs their widths and hights 
    pixels = document.getElementsByClassName("pixel");
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.width = `${pixelSize}px`;
        pixels[i].style.height = `${pixelSize}px`;
    }
}


function resetCanvas() {
    //removes all divs and create new ones
    const pixelLength = pixels.length;
    for (let i = pixelLength-1; i >= 0; i--) {
        pixels[i].remove();
    }

    createCanvas();
}

