$(document).ready(function(){

    /*Refuse to support IE*/
    var isIE = /(MSIE|Trident)/.test(window.navigator.userAgent);
    if(isIE){
        alert("Please update to a modern browser like Firefox, Chrome or Edge.");
    } 
    else
    {
        /*init parallax.js*/
        if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            var parallaxInstance = new Parallax($("#scene").get(0));
        }
            
        //init additional counter
        //$(".additional")[0].fadeOut("fast");

        $(document).on('keypress',function(e) {
            if(e.which == 13 ) {
                //ENTER
                add1Year();
                var audio = new Audio('yoshi-tongue.mp3');
                audio.play();
            }
            if(e.which == 8 ) {
                //BACK
                remove1Year();
                var audio = new Audio('bruh.mp3');
                audio.play();
            }
        });

        /*calculate doomsday*/
        var then = moment('2025-01-01 00:00:00');
        var now;
        var timeLeft;
        setInterval(function recalculate(){
            now = moment();
            timeLeft = moment.duration(then.diff(now))
            $(".years")[0].innerHTML= `${timeLeft.years()}`;
            $(".months")[0].innerHTML= `${timeLeft.months()}`;
            $(".days")[0].innerHTML= `${timeLeft.days()}`;
            $(".hours")[0].innerHTML= `${timeLeft.hours()}`;
            $(".minutes")[0].innerHTML= `${timeLeft.minutes()}`;
            $(".seconds")[0].innerHTML= `${timeLeft.seconds()}`;                                   
        },150)

        var addedYears = 0;
        $(".add")[0].innerHTML= `+${addedYears}`;

        function add1Year(){
            then = then.add(1, 'years');
            $(".add")[0].innerHTML= `+${++addedYears}`;
            $(".years").addClass("green");
            setTimeout(() =>{$(".years").removeClass("green");}, 2000)
            $(".harold").addClass("visible");
            setTimeout(() =>{$(".harold").removeClass("visible");}, 2000)
        }
        function remove1Year(){
            then = then.add(-1, 'years');
            $(".add")[0].innerHTML= `${1}`;                  
        }
    }
}); 

