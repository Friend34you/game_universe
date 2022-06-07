let burger_btn = document.querySelector(".burger_btn");
let burger_menu_nav = document.querySelector(".nav_menu");
function burger_menu()
{
    console.log("hui");
    burger_menu_nav .classList.toggle("nav_menu_burger");
}

burger_btn.addEventListener("click", burger_menu);