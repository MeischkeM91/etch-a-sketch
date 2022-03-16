// Reference each div in page
const header = document.querySelector('.header');
const btnWrapper = document.querySelector('.btnWrapper');
const gridWrapper = document.querySelector('.gridWrapper');

// Button to clear grid
const clearBtn = document.createElement('button');
clearBtn.classList.add('clearBtn');
clearBtn.textContent="Clear";

//Button to switch to "rainbow" coloring
const rainbowBtn = document.createElement('button');
rainbowBtn.classList.add('rainbowBtn');
rainbowBtn.textContent="Rainbow"

// add buttons to page (inside btnWrapper)
btnWrapper.appendChild(clearBtn);
btnWrapper.appendChild(rainbowBtn);