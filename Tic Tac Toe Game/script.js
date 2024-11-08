let boxes = document.querySelectorAll(".box");

let turn0 = true;

let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0)
        {
            box.innerText="O";
            turn0 = false;
        }
        else
        {
            box.innerText="X";
            turn0 = true;
        }
        box.disabled = true;
        check();
    });
});

const check = () => {
     for(let pt of win)
     {
        if(boxes[pt[0]].innerText!="" && boxes[pt[1]].innerText!="" && boxes[pt[2]].innerText!="")
        if(boxes[pt[0]].innerText === boxes[pt[1]].innerText && boxes[pt[1]].innerText === boxes[pt[2]].innerText)
        {
            document.querySelector(".greet").innerText=`Winner is ${boxes[pt[0]].innerText}`;
            document.querySelector(".greet").classList.remove("hide");
            for(let bx of boxes)
            {
                bx.disabled = true;
            }
        }
     }
}
