console.log("welcome to  Spotify");

//Initialize the Variables

let songIndex = 0;
let audioElement = new Audio ('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    {songName: "Teri kasam - Salam-e-Ishq", filePath: "1.mp3" , coverPath: "1.jpg"},
    {songName: " Mohhbat - Salam-e-Ishq", filePath: "2.mp3" , coverPath: "2.jpg"},
    {songName: " Bol na - Salam-e-Ishq", filePath: "3.mp3" , coverPath: "3.jpg"},
    {songName: "Raho me - Salam-e-Ishq", filePath: "4.mp3" , coverPath: "4.jpg"},
    {songName: "Saaiyara -Salam-e-Ishq", filePath: "5.mp3" , coverPath: "5.jpg"},
    {songName: "Bhula dena - Salam-e-Ishq", filePath: "6.mp3" , coverPath: "6.jpg"},
     {songName: " Tu mera hai sanam - Salam-e-Ishq", filePath: "7.mp3" , coverPath: "7.jpg"},
      {songName: " lilipop - Salam-e-Ishq", filePath: "8.mp3" , coverPath: "8.jpg"},
       {songName: " Barish - Salam-e-Ishq", filePath: "9.mp3" , coverPath: "9.jpg"},
]

songItem.forEach((element , i)=>{
    // console.log(element, i);
   element.getElementsByTagName("img")[0].src =  songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =  songs[i].songName;
})





// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();

        masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
         gif.style.opacity = 1;
    }
    else{
        audioElement.pause();

        masterPlay.classList.remove('fa-circle-pause');
         masterPlay.classList.add('fa-circle-play');
          gif.style.opacity = 0;
    }
})




//Listen to Events
audioElement.addEventListener('timeupdate' , ()=>{
  
    // update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);

    myProgressBar.value = progress;
})


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeALLPlays =  ()=>{
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
   
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    //   console.log(e.target);
      makeALLPlays();
      songIndex =  parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
    //   audioElement.src = '${index}.mp3';
    audioElement.src = `${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
       masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
     audioElement.src = `${songIndex + 1}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
})



document.getElementById('pervious').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
     audioElement.src = `${songIndex + 1}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
})