const canvas = document.querySelector('#jsCanvas');

function onMouseEnter(event){
    const x = event.offsetX
    const y = event.offsetY
}

function onMouseDown(event){
    console.log(event)
}

if(canvas){
    canvas.addEventListener('mousemove', onMouseEnter)
    canvas.addEventListener('mousedown', onMouseDown)
}



