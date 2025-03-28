let activeBox = null;

function toggleBox(index) {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box, i) => {
        if (i === index) {
            box.classList.toggle('active');
            activeBox = box.classList.contains('active') ? box : null;
        } else {
            box.classList.remove('active');
        }
    });
}

 
function changeColor(event) {
    event.stopPropagation();  
    console.log("Color changed:", event.target.value);
}

function changeSize(event) {
    event.stopPropagation(); 
    console.log("Size changed:", event.target.value);
}