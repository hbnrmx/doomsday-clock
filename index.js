$(document).ready(function(){
    var then = moment('2025-01-01 00:00:00');
    var now;
    var timeLeft;
    var addedSoFar;
    
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
                playAudio('sfx/drumroll.mp3')
                showImage(Math.random() > 0.5 ? '.drumroll' : '.drumroll2')
                setTimeout(() => {
                    if(Math.random() > 0.25){
                        console.log();
                        playAudio(null, success = true);
                        showImage(null, success = true);
                        addYears(null, success = true);
                    }
                    else{
                        playAudio(null, success = false);
                        showImage(null, success= false);
                        addYears(null, success = false)
                    }
                }, 4400)
            }
            if(e.key === "Escape" ) {
                addYears(-1);
                playAudio('sfx/bad/bruh.mp3');
                showImage('.bruh');
            }  

            if(e.key === "ArrowUp" ) {
                addYears(1);
            }  

            if(e.key === "ArrowDown" ) {
                addYears(-1);
            }

            if(e.key === "P" ) {
                playAudio('sfx/priceIsRight.mp3')
            }
            

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
    
        addedSoFar = 0;
        $(".add")[0].innerHTML= ` ${addedSoFar} `;
    }

    function addYears(years, success){
        if(!years){
            years = Math.ceil(Math.random() * (success ? 10 : -10));
        }
        
        then = then.add(years, 'years');

        $(".add")[0].innerHTML= ` ${addedSoFar += years} `;
        $(".add").addClass(addedSoFar > 0 ? "green" : "red");
        $(".add").removeClass(addedSoFar > 0 ? "red" : "green");
        
        $(".years").addClass(years > 0 ? "green" : "red");
        setTimeout(() =>{$(".years").removeClass(years > 0 ? "green" : "red");}, 2000);

        
    }

    function showImage(imageClass, success){

        if(imageClass){
            $(imageClass).addClass("visible");
            setTimeout(() =>{$(imageClass).removeClass("visible");}, 4200);
            return;
        }
        
        var goodImages= [
            '.good1',           
            '.good2',
            '.good3',
            '.good4',
            '.good5',
            '.good6',
            '.good7',
            '.good8',
            '.good9',
            '.good10',
        ]

        var badImages= [
            '.bad1',
            '.bad2',
            '.bad3',
            '.bad4',
            '.bad5',
            '.bad6',
            '.bad7',
            '.bad8',
            '.bad9',
            '.bad10'
        ]

        if(success){
            var rand = Math.floor(Math.random() * goodImages.length)
            $(goodImages[rand]).addClass("visible");
            setTimeout(() =>{$(goodImages[rand]).removeClass("visible");}, 2000)
        }
        else{
            var rand = Math.floor(Math.random() * badImages.length)
            $(badImages[rand]).addClass("visible");
            setTimeout(() =>{$(badImages[rand]).removeClass("visible");}, 2000)
        }
    }

    function playAudio(audioPath, success){
        var audio
        if(audioPath){
            audio = new Audio(audioPath);
            audio.play();
            return
        }
        
        var goodSounds= [
            'sfx/good/correct.mp3',
            'sfx/good/correct2.mp3',
            'sfx/good/correct3.mp3',
            'sfx/good/crowd.mp3',
            'sfx/good/noice.mp3',
            'sfx/good/ooh.mp3',
            'sfx/good/yeahh.mp3',
        ]

        var badSounds= [
            'sfx/bad/bruh.mp3',
            'sfx/bad/buzzer.mp3',
            'sfx/bad/aww.mp3',
            'sfx/bad/boo.mp3',
            'sfx/bad/laugh.mp3',
            'sfx/bad/losing horn.mp3',
            'sfx/bad/yoshi.mp3',
        ]

        if(success){
            var rand = Math.floor(Math.random() * goodSounds.length)
            audio = new Audio(goodSounds[rand]);
        }
        else{
            var rand = Math.floor(Math.random() * badSounds.length)
            audio = new Audio(badSounds[rand]);
        }
        
        audio.play();
    }
}); 

