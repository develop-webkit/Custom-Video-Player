const videoEl = document.querySelector(".player__video");
const playBtn = document.querySelector(".player__button.toggle");
const volSlider = document.querySelector(".player__slider[name='volume']");
const videoSpeed = document.querySelector(".player__slider[name='playbackRate']");
const playBackSkips = document.querySelectorAll(".player__button[data-skip]");

//console.log(playBackSkip[0].getAttribute('data-skip'))

function videoPlay(){
    if(videoEl.paused){
        videoEl.play();
        playBtn.innerHTML = "‖‖";
    }else{
        playBtn.innerHTML = "▶";
        videoEl.pause();
    }
}

function videoVolumeChange(){
    videoEl.volume = this.value;
}

function videoSpeedChange(){
    videoEl.playbackRate = this.value;
    console.log(this.value)
}


playBtn.addEventListener('click', videoPlay);
videoEl.addEventListener('click', videoPlay);
volSlider.addEventListener('input', videoVolumeChange);
videoSpeed.addEventListener('input', videoSpeedChange);

// for(const skip of playBackSkips){
//     skip.addEventListener('click', () => { console.log(this)})   
// }
