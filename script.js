const gridContainer = document.querySelector("#grid_container");


for (let i = 0; i < 8*8; i++){
    let temp = document.createElement("div");
    temp.className = "pixel";
    gridContainer.appendChild(temp);
    temp.addEventListener("mouseover", function(){
        temp.style.backgroundColor = "blue";
    });
}


const pixels = document.getElementsByClassName("pixel");
for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.width = "56px";
    pixels[i].style.height = "56px";
}

