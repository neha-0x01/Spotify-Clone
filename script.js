console.log("welcome to  Spotify");

//Initialize the Variables

let songIndex = 0;
let audioElement = new Audio ('123.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressbar')
let songs = [
    {songName: "Salam-e-Ishq", filePath: "123.mp3" , coverPath: "1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "123.mp3" , coverPath: "1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "123.mp3" , coverPath: "1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "123.mp3" , coverPath: "1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "123.mp3" , coverPath: "1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "123.mp3" , coverPath: "1.jpg"},
]


// audioElement.play();

//Listen to Events
myProgressbar.addEventListener('timeupdate' , ()=>{
    
})