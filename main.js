const mainContainer = document.querySelector(".container");


let random_rgba= () => {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const addPaintedClass = e =>{
    if(e.target.classList.length < 2){
        e.target.classList = "square painted";
        e.target.style.backgroundColor = `${random_rgba()}`;
        // e.target.style.backgroundColor = `red`;
    }
}

const createGrid = (numberOfSquares) =>{
    const totalSquares = [];
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        const square = document.createElement("div");
        square.addEventListener("mouseover", addPaintedClass);
        square.style.width = `calc(100%*1/${numberOfSquares})`;
        square.style.height = `calc(100%*1/${numberOfSquares})`;
        totalSquares.push(square);
    }

    mainContainer.append(...totalSquares);

}


createGrid(5);