var next = document.querySelector(".btn_right");
var previous = document.querySelector(".btn_left");

var li1 = document.querySelector(".sl_li1");
var li2 = document.querySelector(".sl_li2");
var li3 = document.querySelector(".sl_li3");


next.onclick = function slider()
{
    if (document.querySelector("#slides").classList.contains("slide1")) 
    {
        
        document.querySelector("#slides").classList.toggle("slide1");
        document.querySelector(".sl_li1").style.color = "#0DCDFB";
        document.querySelector(".sl_li2").style.color = "#FF0623";
        document.querySelector("#slides").innerHTML = `<h1>Любимчик&#160;игроков</h1>
        <p>
        Игра "Взрывные котята" основана на соперничестве и принципах «русской рулетки». 
        Это карточное развлечение с козликами, волшебной шаурмой и смертельно опасными котятами обеспечит интересное занятие гостям надолго. Чтобы разобраться в правилах, понадобится не больше 2 минут.
        </p>
        <button class="slides_btn"><a href="card2.html">Подробнее</a></button>`;
        document.querySelector("#slides").classList.toggle("slide2");
        
    }
    else if (document.querySelector("#slides").classList.contains("slide2")) 
    {
        document.querySelector("#slides").classList.toggle("slide2");
        document.querySelector(".sl_li2").style.color = "#0DCDFB";
        document.querySelector(".sl_li3").style.color = "#FF0623";
        document.querySelector("#slides").innerHTML = `<h1>ДОМИНАЦИЯ!</h1>
        <p>
        "Эпичные схватки боевых магов: Крутагидон" – новая самостоятельная игра про мегакрутые зрелищные разборки наглухо отбитых колдунов. Убирайте детей и особо впечатлительных граждан от игровых столов – предстоящее месиво и рубилово явно не для слабонервных!
        </p>
        <button class="slides_btn"><a href="card3.html">Подробнее</a></button>`;
        document.querySelector("#slides").classList.toggle("slide3");
    }
    else if (document.querySelector("#slides").classList.contains("slide3")) 
    {
        document.querySelector("#slides").classList.toggle("slide3");
        document.querySelector(".sl_li3").style.color = "#0DCDFB";
        document.querySelector(".sl_li1").style.color = "#FF0623";
        document.querySelector("#slides").innerHTML = ` <h1>Новинка!</h1>
        <p>
            "Неудержимые единорожки" – это весёлая карточная игра, 
            которая украсит собой любую вечеринку. 
            И ещё бы, ведь рецепт этой настолки невероятно прост и изыскан: 
            милые единороги и поразительные разрушения!
        </p>
        <button class="slides_btn"><a href="card1.html">Подробнее</a></button>`;
        document.querySelector("#slides").classList.toggle("slide1");
    }

}
previous.onclick = function()
{
    if (document.querySelector("#slides").classList.contains("slide1")) 
    {
        document.querySelector("#slides").classList.toggle("slide1");
        document.querySelector(".sl_li1").style.color = "#0DCDFB";
        document.querySelector(".sl_li3").style.color = "#FF0623";
        document.querySelector("#slides").innerHTML = `<h1>ДОМИНАЦИЯ!</h1>
        <p>
        "Эпичные схватки боевых магов: Крутагидон" – новая самостоятельная игра про мегакрутые зрелищные разборки наглухо отбитых колдунов. Убирайте детей и особо впечатлительных граждан от игровых столов – предстоящее месиво и рубилово явно не для слабонервных!
        </p>
        <button class="slides_btn"><a href="card3.html">Подробнее</a></button>`;
        document.querySelector("#slides").classList.toggle("slide3");
        
    }
    else if (document.querySelector("#slides").classList.contains("slide3")) 
    {
        document.querySelector("#slides").classList.toggle("slide3");
        document.querySelector(".sl_li3").style.color = "#0DCDFB";
        document.querySelector(".sl_li2").style.color = "#FF0623";
        document.querySelector("#slides").innerHTML = `<h1>Любимчик&#160;игроков</h1>
        <p>
        Игра "Взрывные котята" основана на соперничестве и принципах «русской рулетки». 
        Это карточное развлечение с козликами, волшебной шаурмой и смертельно опасными котятами обеспечит интересное занятие гостям надолго. Чтобы разобраться в правилах, понадобится не больше 2 минут.
        </p>
        <button class="slides_btn"><a href="card2.html">Подробнее</a></button>`;
        document.querySelector("#slides").classList.toggle("slide2");
    }
    else if (document.querySelector("#slides").classList.contains("slide2")) 
    {
        document.querySelector("#slides").classList.toggle("slide2");
        document.querySelector(".sl_li2").style.color = "#0DCDFB";
        document.querySelector(".sl_li1").style.color = "#FF0623";
        document.querySelector("#slides").innerHTML = ` <h1>Новинка!</h1>
        <p>
            "Неудержимые единорожки" – это весёлая карточная игра, 
            которая украсит собой любую вечеринку. 
            И ещё бы, ведь рецепт этой настолки невероятно прост и изыскан: 
            милые единороги и поразительные разрушения!
        </p>
        <button class="slides_btn"><a href="card1.html">Подробнее</a></button>`;
        document.querySelector("#slides").classList.toggle("slide1");
    }

}

li1.onclick = function()
{
    document.querySelector("#slides").classList.remove("slide2");
    document.querySelector("#slides").classList.remove("slide3");
    if (!document.querySelector("#slides").classList.contains("slide1")) 
    {
        document.querySelector(".sl_li2").style.color = "#0DCDFB";
        document.querySelector(".sl_li3").style.color = "#0DCDFB";
        document.querySelector(".sl_li1").style.color = "#FF0623";
        document.querySelector("#slides").innerHTML = ` <h1>Новинка!</h1>
        <p>
            "Неудержимые единорожки" – это весёлая карточная игра, 
            которая украсит собой любую вечеринку. 
            И ещё бы, ведь рецепт этой настолки невероятно прост и изыскан: 
            милые единороги и поразительные разрушения!
        </p>
        <button class="slides_btn"><a href="card1.html">Подробнее</a></button>`;
        document.querySelector("#slides").classList.toggle("slide1");
    }
}

li2.onclick = function()
{
    document.querySelector("#slides").classList.remove("slide1");
    document.querySelector("#slides").classList.remove("slide3");
    if (!document.querySelector("#slides").classList.contains("slide2")) 
    {
        document.querySelector(".sl_li1").style.color = "#0DCDFB";
        document.querySelector(".sl_li3").style.color = "#0DCDFB";
        document.querySelector(".sl_li2").style.color = "#FF0623";
        document.querySelector("#slides").innerHTML = `<h1>Любимчик&#160;игроков</h1>
        <p>
        Игра "Взрывные котята" основана на соперничестве и принципах «русской рулетки». 
        Это карточное развлечение с козликами, волшебной шаурмой и смертельно опасными котятами обеспечит интересное занятие гостям надолго. Чтобы разобраться в правилах, понадобится не больше 2 минут.
        </p>
        <<button class="slides_btn"><a href="card2.html">Подробнее</a></button>`;
        document.querySelector("#slides").classList.toggle("slide2");
        
    }
}

li3.onclick = function()
{
    document.querySelector("#slides").classList.remove("slide1");
    document.querySelector("#slides").classList.remove("slide2");
    if (!document.querySelector("#slides").classList.contains("slide3")) 
    {
        document.querySelector(".sl_li1").style.color = "#0DCDFB";
        document.querySelector(".sl_li2").style.color = "#0DCDFB";
        document.querySelector(".sl_li3").style.color = "#FF0623";
        document.querySelector("#slides").innerHTML = `<h1>ДОМИНАЦИЯ!</h1>
        <p>
        "Эпичные схватки боевых магов: Крутагидон" – новая самостоятельная игра про мегакрутые зрелищные разборки наглухо отбитых колдунов. Убирайте детей и особо впечатлительных граждан от игровых столов – предстоящее месиво и рубилово явно не для слабонервных!
        </p>
        <button class="slides_btn"><a href="card3.html">Подробнее</a></button>`;
        document.querySelector("#slides").classList.toggle("slide3");
    }
}