let card = document.querySelectorAll(".tagname");

function sorting(tagname)
{
    card.forEach(element => {
        if (!element.classList.contains(tagname)) {
            element.style.display = "none";
        }
    });
    console.log(card);
}

sorting("party");