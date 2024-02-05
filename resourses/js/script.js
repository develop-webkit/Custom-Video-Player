"use strict;"

const videoEl = document.querySelector(".player__video");
const progressBar = document.querySelector(".progress .progress__filled");
const progressBarParent = document.querySelector(".progress");
const playBtn = document.querySelector(".player__button.toggle");
const volSlider = document.querySelector(".player__slider[name='volume']");
const videoSpeed = document.querySelector(".player__slider[name='playbackRate']");
const playBackSkips = document.querySelectorAll(".player__button[data-skip]");

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
}

function progressBarChnage(){
    progressBar.style.flexBasis = `${( this.currentTime / this.duration  ) * 100}%`;
}

function updatePrgressBar(e){
    const offsets = progressBarParent.getBoundingClientRect();
    const progressPer = ((e.clientX - offsets.left) / offsets.width) * 100;
    progressBar.style.flexBasis = `${progressPer}%`;
    videoEl.currentTime = ((progressPer / 100) * videoEl.duration);
}




playBtn.addEventListener('click', videoPlay);
videoEl.addEventListener('click', videoPlay);
volSlider.addEventListener('input', videoVolumeChange);
videoSpeed.addEventListener('input', videoSpeedChange);
videoEl.addEventListener('timeupdate',progressBarChnage);
progressBarParent.addEventListener('click',updatePrgressBar)


for(const skip of playBackSkips){
    skip.addEventListener('click', (e) => { 
        console.log(Number(videoEl.currentTime) + Number(e.target.getAttribute('data-skip')));
        videoEl.currentTime = Number(videoEl.currentTime) + Number(e.target.getAttribute('data-skip'));
    })   
}
