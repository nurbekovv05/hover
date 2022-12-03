const boxes = document.querySelector('#board')
const addClick = document.querySelector('.btn-click')
const removeClick = document.querySelector('.remove-click')
const square_number =500
for (let i=0; i<square_number; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    boxes.append(square)
    addClick.addEventListener('click', ()=>{
        square.style.background=randomColor()
    })
    square.addEventListener('mouseover', ()=>{
        square.style.background= randomColor()
    })
    removeClick.addEventListener('click',()=>{
        square.style.background=''
    })

    square.addEventListener('mouseleave', ()=>{
        square.style.background = 'randomColor()'
        setTimeout (() =>{
            square.style.background =''
        }, 10000)
    })


}
function randomColor(){
    let square = '#'
    for (let i=0; i<6; i++){
        square += Math.floor(Math.random()*10)
    }
   return square
}
