const gridContainer = document.querySelector("#grid_container");


for (let i = 0; i < 8*8; i++){
    let temp = document.createElement("div");
    temp.className = "pixel";
    gridContainer.appendChild(temp);
    temp.addEventListener("mouseover", function(){
        temp.style.border = "4px solid blue";
    });
}