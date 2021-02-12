//button class="order-form" - 3 кнопки

//div id = "order-window" - всплывающее окно

//id = "back-button" - кнопка назад всплывающем окне

//id="submit-form" - финальный сабмиt

var prog = document.getElementsByClassName('orderForm');
var orderW = document.getElementById('orderWindow');

Array.prototype.forEach.call(prog, function(el){
    el.addEventListener('click', function (e) {
        orderW.style.display = "grid";
    })
});

var back = document.getElementById('back-button');
back.addEventListener('click', function () {
    orderW.style.display = "";
});