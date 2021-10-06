var num;
var interval = null;
$(document).ready(function()  {
    'use strict';

    var bg_h = $('#escena').height();
    var bg_w = $('#escena').width();

    //Posición Inicial de Mario Bros
    $("#mario").css("top", (bg_h - 105) + "px");
    $("#mario").css("left", (bg_h / 4) + "px");

    $(document).keydown(function(e) {
    // Control del teclado    

        if (e.which == 40){
            var key = 1;
            mover(key);
        }

        if (e.which == 39){
            var key = 2;
            mover(key);
        }

        if (e.which == 37){
            var key = 3;
            mover(key);
        }
    });
    //Mover a Mario dependiendo de la tecla seleccionada
    function mover(key){
        clearInterval(interval);
        if (key ==1){
            var num = 1;
            interval = setInterval(function(){
                $("#mario").attr('src', 'img/loco-' + num + '.png'); // abajo

                var position = $("#mario").position();
                $("#mario").css("left", (position.left) + "px");

                num += 1;
                if (num === 4){
                    num = 1;
                }
            }, 150);
        } else if (key == 2){
            var num = 1;
            interval = setInterval(function(){
                $("#mario").attr('src', 'img/derecha-' + num + '.png'); //derecha

                var position = $("#mario").position();
                $("#mario").css("left", (position.left + 10) + "px");

                num +=1;
                if (num === 3){
                    num = 1;
                }
            }, 150);
        } else if (key == 3){
            var num = 1;
            interval = setInterval(function(){
                $("#mario").attr('src', 'img/izquierda-' + num + '.png'); // izquierda

                var position = $("#mario").position();
                $("#mario").css("left", (position.left - 10) + "px");

                num += 1;
                if (num === 4){
                    num = 1;
                }
            }, 150);
        };
    };
});