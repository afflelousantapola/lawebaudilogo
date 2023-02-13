var audio = document.getElementById('audio');
var audio2 = document.getElementById('audio2');
var audio3 = document.getElementById('audio3');
var audio4 = document.getElementById('audio4');
var audio5 = document.getElementById('audio5');
var audio6 = document.getElementById('audio6');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
    }else{
        count = 0;
        audio.pause();

    }
}
function stop(){
    playPause()
    audio.pause();
    audio.currentTime=0;
}


function playPause2(){
    if(count == 0){
        count = 1;
        audio2.play();
    }else{
        count = 0;
        audio2.pause();

    }
}
function stop2(){
    playPause2()
    audio2.pause();
    audio2.currentTime=0;
}

function playPause3(){
    if(count == 0){
        count = 1;
        audio3.play();
    }else{
        count = 0;
        audio3.pause();

    }
}
function stop3(){
    playPause3()
    audio3.pause();
    audio3.currentTime=0;
}


function playPause4(){
    if(count == 0){
        count = 1;
        audio4.play();
    }else{
        count = 0;
        audio4.pause();

    }
}
function stop4(){
    playPause4()
    audio4.pause();
    audio4.currentTime=0;
}


function playPause5(){
    if(count == 0){
        count = 1;
        audio5.play();
    }else{
        count = 0;
        audio5.pause();

    }
}
function stop5(){
    playPause5()
    audio5.pause();
    audio5.currentTime=0;
}


function playPause6(){
    if(count == 0){
        count = 1;
        audio6.play();
    }else{
        count = 0;
        audio6.pause();

    }
}
function stop6(){
    playPause3()
    audio6.pause();
    audio6.currentTime=0;
}