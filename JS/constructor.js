var price = document.getElementById('priceInput');
var artists = document.getElementById('artists');

var program1 = document.getElementById('prog1');
var program2 = document.getElementById('prog2');
var program3 = document.getElementById('prog3');

var progPrice = 2000;
var artistPrice = 0;
var addsPrice = 0;

function unchecked() {
    var adds = document.getElementsByClassName('adition')
    for(var i=0; i<adds.length; i++) {
            if(adds[i].type=='checkbox') {
             adds[i].checked=false;
    }
}};

function led() {
    var onlyFire = document.getElementsByClassName('fireOnly')
    for (var i = 0; i<onlyFire.length; i++) {
            onlyFire[i].style.display = "none";
        }
};

function notLed() {
    var onlyFire = document.getElementsByClassName('fireOnly')
    for (var i = 0; i<onlyFire.length; i++) {
            onlyFire[i].style.display = "block";
        }
};


program1.addEventListener('click', function () {
    artists.value = 2;
    price.value = '2000';
    progPrice = 2000;
    unchecked();
    notLed()
});

program2.addEventListener('click', function () {
    artists.value = 2;
    price.value = '2200';
    progPrice = 2200;
    unchecked();
    notLed()
});

program3.addEventListener('click', function () {
    artists.value = 2;
    price.value = '1800';
    progPrice = 1800;
    unchecked();
    led();
});




var staticPiro = document.getElementById('staticPiro') 
var fireHearts = document.getElementById('fireHearts')
var flamethrower = document.getElementById('flamethrower')
var fireInscription = document.getElementById('fireInscription')
var piroFans = document.getElementById('piroFans')
var piroDabls = document.getElementById('piroDabls')
var fireCube = document.getElementById('fireCube')

staticPiro.addEventListener('click', function () {
    if (this.checked) {
        addsPrice = +addsPrice + 300;
    } else {
        addsPrice = addsPrice - 300;
    }
    calcTotal()
});

fireHearts.addEventListener('click', function () {
    if (this.checked) {
        addsPrice = +addsPrice + 400;
    } else {
        addsPrice = addsPrice - 400;
    }
    calcTotal()
});

flamethrower.addEventListener('click', function () {
    if (this.checked) {
        addsPrice = +addsPrice + 1200;
    } else {
        addsPrice = addsPrice - 1200;
    }
    calcTotal()
});

fireInscription.addEventListener('click', function () {
    if (this.checked) {
        addsPrice = +addsPrice + 1100;
    } else {
        addsPrice = addsPrice - 1100;
    }
    calcTotal()
});

piroFans.addEventListener('click', function () {
    if (this.checked) {
        addsPrice = +addsPrice + 1000;
    } else {
        addsPrice = addsPrice - 1000;
    }
    calcTotal()
});

piroDabls.addEventListener('click', function () {
    if (this.checked) {
        addsPrice = +addsPrice + 900;
    } else {
        addsPrice = addsPrice - 900;
    }
    calcTotal()
});

fireCube.addEventListener('click', function () {
    if (this.checked) {
        addsPrice = +addsPrice + 1200;
    } else {
        addsPrice = addsPrice - 1200;
    }
    calcTotal()
});


var canvas = document.getElementById('canvaPic');
var ctx = canvas.getContext('2d');


var img1 = new Image();
img1.onload = function () {
    ctx.drawImage(img1, -30, -25, 220, 300);
}  
img1.src = '../icons/photo_1.png';

var img2 = new Image();
img2.onload = function () {
    ctx.drawImage(img2, 500, 235, 200, 300);
}
img2.src = '../icons/photo_4.png';


var img3 = new Image();
img3.src = '../icons/photo_3.png';

var img4 = new Image();
img4.src = '../icons/photo_2.png';

var img5 = new Image();   
img5.src = '../icons/photo_5.png';



artists.addEventListener('change', function () {
    if (this.value == 1) {
        ctx.clearRect(0, 0, 800, 500)
        ctx.drawImage(img1, -30, -25, 220, 300);
        artistPrice = -700;
    } else if (this.value == 2) {
        ctx.clearRect(0, 0, 800, 500)
        ctx.drawImage(img1, -30, -25, 220, 300);
        ctx.drawImage(img2, 500, 235, 200, 300);
        artistPrice = 0;
    } else if (this.value == 3) {
        ctx.clearRect(0, 0, 800, 500)
        ctx.drawImage(img1, -30, -25, 220, 300);
        ctx.drawImage(img2, 500, 235, 200, 300);
        ctx.drawImage(img3, 320, 50, 150, 400);
        artistPrice = 700;
    } else if (this.value == 4) {
      ctx.clearRect(0, 0, 800, 500)
        ctx.drawImage(img1, -30, -25, 220, 300);
        ctx.drawImage(img2, 500, 235, 200, 300);
        ctx.drawImage(img3, 320, 50, 150, 400);
        ctx.drawImage(img4, 85, 200, 240, 325);
        artistPrice = 1400;
    } else {
        ctx.clearRect(0, 0, 800, 500)
        ctx.drawImage(img1, -30, -25, 220, 300);
        ctx.drawImage(img2, 500, 235, 200, 300);
        ctx.drawImage(img3, 320, 50, 150, 400);
        ctx.drawImage(img4, 85, 200, 240, 325);
        ctx.drawImage(img5, 600, -30, 200, 300);
        artistPrice = 2100;
        
    }
    calcTotal()
});

function calcTotal() {
    price.value = +progPrice + +artistPrice + +addsPrice;
}

var prog = document.getElementsByClassName('order-form');
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