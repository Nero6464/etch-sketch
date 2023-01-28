
const grid = document.createElement('div');
grid.classList.add('grid');
grid.setAttribute('style', 'display: flex; flex-direction: column; justify-content: center; align-content: center;');
document.body.appendChild(grid);

// const box = document.createElement('div');
// box.setAttribute('style', 'borderColor: black; background: blue; color: white; width: 100px; height: 100px; display: flex;');
// box.textContent = 'Hello World!';
// container.appendChild(box);

// const box2 = document.createElement('div');
// box2.setAttribute('style', 'borderColor: black; background: blue; color: white; width: 100px; height: 100px; display: flex;');
// box2.textContent = 'Hello World!';
// container.appendChild(box2);


for(let j = 0; j < 16; j++){
    const container = document.createElement('div');
    container.classList.add('container');
    container.setAttribute('style', 'display: flex; justify-content: center; align-content: center;');
    grid.appendChild(container);
    for(let i = 0; i < 16; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute('style', 'border-color: black; border-style: solid; border-width: 5px; background: white; color: white; width: 100px; height: 100px; display: flex;');
        container.appendChild(box);
    }
}

const divs = document.querySelectorAll('.box')
divs.forEach((box) => {
    box.addEventListener('mouseover', () =>{
        box.style.background = 'red';
    })

    box.addEventListener('mouseout', () => {
        box.style.background = 'white' 
    })

})
