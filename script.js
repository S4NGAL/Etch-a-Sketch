let pixels;
let canvasSize;
const gridContainer = document.querySelector("#grid_container");
canvasSize = gridContainer.clientWidth;
const inputer = document.getElementById("quantity");

const resetButton = document.getElementById("reset_button");
resetButton.addEventListener("click", function(){
    resetCanvas();
})
createCanvas();


function createCanvas() {
    //Takes resolution value from user
    let resolution = inputer.value;
    let pixelSize = (canvasSize - (resolution * 4)) / resolution;

    //Create divs that square of given resolution
    for (let i = 0; i < resolution**2; i++){
        let temp = document.createElement("div");
        temp.className = "pixel";
        gridContainer.appendChild(temp);
        temp.addEventListener("mouseover", function(){
            temp.style.backgroundColor = "blue";
        });
    }


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
   
console.log(pixels.length);