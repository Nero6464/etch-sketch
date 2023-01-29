
document.body.setAttribute('style', 'display: flex; flex-direction: column; align-content: center;')



//Initiate Button
const container1 = document.createElement('div');
container1.classList.add('container1');
container1.setAttribute('style', 'width: 50%; margin: 10px auto; text-align: center')
document.body.appendChild(container1);

const btn = document.createElement('button');
btn.classList.add('button');
btn.textContent = 'Set grid dimensions';
btn.setAttribute('style', `background: blue; color: white; width: 400px; height: 1; padding: 20px; font-size: 24px; margin-bottom: 20px; `);
container1.appendChild(btn);

//Create grid 

const grid = document.createElement('div');
grid.classList.add('grid');
grid.setAttribute('style', 'display: flex; flex-direction: column; justify-content: center; align-content: center; flex-wrap:wrap;');
document.body.appendChild(grid);


function createGrid(size){
    for(let j = 0; j < size; j++){
        const container = document.createElement('div');
        container.classList.add('container');
        container.setAttribute('style', 'display: flex; width: 960px;');
        grid.appendChild(container);
        for(let i = 0; i < size; i++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.setAttribute('style', `border-color: black; border-style: solid; border-width: 1px; background: white; color: white; width: 100px; height: ${960 / size}px; display: flex;`);
            container.appendChild(box);
        }
    }
}

createGrid(10)

const divs = document.querySelectorAll('.box')
divs.forEach((box) => {
    box.addEventListener('mouseover', () =>{
        box.style.background = 'red';
    })

    box.addEventListener('mouseout', () => {
        box.style.background = 'white' 
    })

})

// btn.addEventListener('click', () => {

//     while(size < 100){
//         size = prompt('Enter positive integer less than 100')
//     }
//     createGrid(size)

// })