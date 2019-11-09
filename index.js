$(document).ready(function(){
    var then = moment('2025-01-01 00:00:00');
    var now;
    var timeLeft;
    var addedYears;
    
    initParallax();
    initKeydownListener();
    calculateDoomsday();
    
    function initParallax(){
        /*init parallax.js*/
        if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            var parallaxInstance = new Parallax($("#scene").get(0));
        }
    }
    
    function initKeydownListener(){
        $(document).on('keydown',function(e) {
            if(e.key === "Enter" ) {
                add1Year();
                showSuccessImage();
                playAudio();
                var audio = new Audio('yoshi-tongue.mp3');
                audio.play();
            }
            if(e.key === "Escape" ) {
                remove1Year();
                var audio = new Audio('bruh.mp3');
                audio.play();
            }
            console.log(e.which)
        });
    }
    
    function calculateDoomsday(){
        /*calculate doomsday*/
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
    
        addedYears = 0;
        $(".add")[0].innerHTML= `+${addedYears}`;
    }

    function add1Year(){
        then = then.add(1, 'years');
        $(".add")[0].innerHTML= `+${++addedYears}`;
        $(".years").addClass("green");
        setTimeout(() =>{$(".years").removeClass("green");}, 2000)
    
    }

    function remove1Year(){
        then = then.add(-1, 'years');
        $(".add")[0].innerHTML= `+${--addedYears}`;                  
    }

    function showSuccessImage(){
        let rand = Math.random()
        console.log(rand)
        if(rand < 0.1){
            $(".harold1").addClass("visible");
            setTimeout(() =>{$(".harold1").removeClass("visible");}, 2000)
        }
        if(0.1 < rand && rand < 0.2){
            $(".harold2").addClass("visible");
            setTimeout(() =>{$(".harold2").removeClass("visible");}, 2000)
        }
        if(0.2 < rand && rand < 0.3){
            $(".harold3").addClass("visible");
            setTimeout(() =>{$(".harold3").removeClass("visible");}, 2000)
        }
        if(0.3 < rand && rand < 0.4){
            $(".harold4").addClass("visible");
            setTimeout(() =>{$(".harold4").removeClass("visible");}, 2000)
        }
        if(0.4 < rand && rand < 0.5){
            $(".harold5").addClass("visible");
            setTimeout(() =>{$(".harold5").removeClass("visible");}, 2000)
        }
        if(0.5 < rand && rand < 0.6){
            $(".harold6").addClass("visible");
            setTimeout(() =>{$(".harold6").removeClass("visible");}, 2000)
        }
        if(0.6 < rand && rand < 0.7){
            $(".harold7").addClass("visible");
            setTimeout(() =>{$(".harold7").removeClass("visible");}, 2000)
        }
        if(0.7 < rand && rand < 0.8){
            $(".harold7").addClass("visible");
            setTimeout(() =>{$(".harold7").removeClass("visible");}, 2000)
        }
    }

    function playAudio(){

    }
}); 

