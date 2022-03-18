// Var for default grid size
let gridSize = 16;
// Reference each div in page
const header = document.querySelector('.header');
const btnWrapper = document.querySelector('.btnWrapper');
const gridWrapper = document.querySelector('.gridWrapper');

// clearGrid function will clear and rebuild the grid depending on size prompt
const clearGrid = function(){
    const newGridSize = prompt('Please enter the desired grid size (Max. 64): ', '');
    if (newGridSize>64){
        alert('Please enter a size of 64 or less.');
    }
    else{
        gridWrapper.innerHTML='';
        createGrid(newGridSize);
    };
};

// Button to clear grid
const clearBtn = document.createElement('button');
clearBtn.classList.add('clearBtn');
clearBtn.textContent='Clear';
clearBtn.addEventListener('click',clearGrid);

//Button to switch to "rainbow" coloring
const rainbowBtn = document.createElement('button');
rainbowBtn.classList.add('rainbowBtn');
rainbowBtn.textContent='Rainbow';

// add buttons to page (inside btnWrapper)
btnWrapper.appendChild(clearBtn);
btnWrapper.appendChild(rainbowBtn);

// Function to create the grid to color
const createGrid = function(gridSize){
    for(let i=0; i<gridSize;i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        gridWrapper.appendChild(gridRow);
        for(let i=0; i<gridSize;i++){
            const gridCol = document.createElement('div');
            gridCol.classList.add('gridCol');
            gridRow.appendChild(gridCol); 
            gridCol.addEventListener('mouseover', function(gridCol){
                gridCol.target.style.backgroundColor="black";
            });
        };
    };
};

createGrid(gridSize);