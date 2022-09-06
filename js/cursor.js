let innerCursor = document.querySelector('.inner-cursor');
let outercursor = document.querySelector('.outer-cursor');


document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;
    
innerCursor.style.left = `${x}px`;
innerCursor.style.top = `${y}px`;
outercursor.style.left = `${x}px`;
outercursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });

});