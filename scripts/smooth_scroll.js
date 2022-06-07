let button = document.getElementById("hits_btn");
let hits_title = document.getElementById("hits");

function smooth_scroll(e)
{
    e.preventDefault();
    hits_title.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

button.addEventListener('click', smooth_scroll);
