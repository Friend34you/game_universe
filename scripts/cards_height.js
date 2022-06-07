let card_heights = Array.from(document.querySelectorAll(".block"));
let max = 0;
function new_height()
{
    for (let i = 0; i < card_heights.length; i++) 
{
    if (card_heights[i].clientHeight > max) 
    {
        max = card_heights[i].clientHeight;
    }
}

document.querySelectorAll(".block").forEach(element => {
     element.style.height = max + "px";
 }); 
}

new_height();