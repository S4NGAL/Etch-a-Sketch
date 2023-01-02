const gridContainer = document.querySelector("#grid_container");
let resolution = 16;
let pixelSize = (480 - (resolution * 4)) / resolution;
console.log(pixelSize);
for (let i = 0; i < resolution*resolution; i++){
    let temp = document.createElement("div");
    temp.className = "pixel";
    gridContainer.appendChild(temp);
    temp.addEventListener("mouseover", function(){
        temp.style.backgroundColor = "blue";
    });
}


const pixels = document.getElementsByClassName("pixel");
for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.width = `${pixelSize}px`;
    pixels[i].style.height = `${pixelSize}px`;
}

