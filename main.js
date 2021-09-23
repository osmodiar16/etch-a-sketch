document.addEventListener("DOMContentLoaded", e => {    
    let random_rgba = () => {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
    }

    function getDarkerRGB(str) {
        var vals = str.substring(str.indexOf('(') +1, str.length -1).split(', ');
        return(`rgb(${parseInt(vals[0])-25}, ${parseInt(vals[1])-25}, ${parseInt(vals[2])-25})`);
      }

    const addPaintedClass = e => {
        if (e.target.classList.length < 1) {
            e.target.classList = "painted";
            e.target.style.backgroundColor = `${random_rgba()}`;
            // e.target.style.backgroundColor = `red`;
        }else if(e.target.classList.contains("painted")){
            e.target.style.backgroundColor = getDarkerRGB(e.target.style.backgroundColor);
        }
    }

    const createGrid = (numberOfSquares) => {
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
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

    const clearGrid = () => {
        const squares = document.querySelectorAll(".container div");
        squares.forEach(square => {
            square.style.backgroundColor = "white";
            square.classList.remove("painted");
        });
        newGridNumber = prompt("Whats the nxn size of the grid(less than 100)");
        while(newGridNumber > 100){
            newGridNumber = prompt("Whats the nxn size of the grid(less than 100)");   
        }
        createGrid(newGridNumber);
    }

    const mainContainer = document.querySelector(".container");
    const clearButton = document.querySelector(".clear");
    clearButton.addEventListener("click", clearGrid);
    let newGridNumber;

    createGrid(16);
})

