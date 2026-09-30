
// let songIndex = 0;

// let audioElement = new Audio('song/1.mp3');

// let masterPlay = document.getElementById('masterPlay');

// let playIcon = masterPlay.querySelector('i');

// let myProgressBar = document.getElementById('myProgressBar');

// let gif = document.getElementById('gif');

// let songItems = Array.from(document.getElementsByClassName('songItem'));

// let songs = [

// {songName: "Falling" , filePath:"song/1.mp3",coverPath:"covers/1.jpeg"},

// {songName: "Tigini" , filePath:"song/2.mp3",coverPath:"covers/1.jpeg"},

// {songName: "Todh" , filePath:"song/3.mp3",coverPath:"covers/1.jpeg"},

// {songName: "Falling" , filePath:"song/4.mp3",coverPath:"covers/1.jpeg"},

// {songName: "Jab me had se jyada" , filePath:"song/5.mp3",coverPath:"covers/1.jpeg"},

// {songName: "Tu hai to" , filePath:"song/6.mp3",coverPath:"covers/1.jpeg"},

// {songName: "tum se hi " , filePath:"song/7.mp3",coverPath:"covers/1.jpeg"},

// ]


// songItems.forEach((element,i) => {
    
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;


//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;



// })




// // masterPlay.addEventListener('click', () => {

// //     if (audioElement.paused || audioElement.currentTime <= 0) {

// //         audioElement.play();

// //         playIcon.classList.remove('fa-play-circle');
// //         playIcon.classList.add('fa-pause-circle');
// //         gif.style.opacity = 1;
        
        

// //     } else {

// //         audioElement.pause();

// //         playIcon.classList.remove('fa-play-circle');
// //         playIcon.classList.add('fa-pause-circle');

// //          gif.style.opacity = 0;

// //     }

// // })

// masterPlay.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         playIcon.classList.remove('fa-play-circle');
//         playIcon.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     } else {
//         audioElement.pause();
//         playIcon.classList.remove('fa-pause-circle');
//         playIcon.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// });

// audioElement.addEventListener('timeupdate' , () =>{

    

//     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    

//     myProgressBar.value = progress;
// })

// myProgressBar.addEventListener('change',() =>{

//     audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
// })




// songItems.forEach((element, i) => {
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
//     // Assign index to play icon element
//     element.getElementsByClassName("songItemPlay")[0].id = i;
// });


// // Function to reset all individual song play icons to play-circle
// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     });
// };

// // Handle clicks on individual song play buttons
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         songIndex = parseInt(e.target.id);
        
//         // Reset all buttons
//         makeAllPlays();
        
//         // Change icon of clicked item to pause
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
        
//         // Load and play the selected song
//         audioElement.src = songs[songIndex].filePath;
//         audioElement.currentTime = 0;
//         audioElement.play();
        
//         // Update master play icon & gif visibility
//         playIcon.classList.remove('fa-play-circle');
//         playIcon.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
        
//         // Update song title display in bottom player bar
//         document.querySelector('.songInfo').childNodes[1].nodeValue = " " + songs[songIndex].songName;
//     });
// });







// Initialize variables
// Initialize variables
// Global State Variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');

// DOM Elements
let masterPlay = document.getElementById('masterPlay');
let playIcon = masterPlay.querySelector('i');
let previousBtn = document.getElementById('previous');
let nextBtn = document.getElementById('next');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// Song List Data
let songs = [
    { songName: "Falling", filePath: "song/1.mp3", coverPath: "covers/1.jpeg" },
    { songName: "Tigini", filePath: "song/2.mp3", coverPath: "covers/1.jpeg" },
    { songName: "Todh", filePath: "song/3.mp3", coverPath: "covers/1.jpeg" },
    { songName: "Falling", filePath: "song/4.mp3", coverPath: "covers/1.jpeg" },
    { songName: "Jab me had se jyada", filePath: "song/5.mp3", coverPath: "covers/1.jpeg" },
    { songName: "Tu hai to", filePath: "song/6.mp3", coverPath: "covers/1.jpeg" },
    { songName: "tum se hi", filePath: "song/7.mp3", coverPath: "covers/1.jpeg" },
];

// Initialize Song List DOM
songItems.forEach((element, i) => {
    if (songs[i]) {
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
        
        let playIconBtn = element.querySelector('.songItemPlay');
        if (playIconBtn) {
            playIconBtn.id = i;
        }
    }
});

// Reset all individual play buttons in list to play state
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

// Update playing track title in footer player bar
const updateUI = () => {
    masterSongName.innerText = songs[songIndex].songName;
};

// Play selected track function
const playTrack = () => {
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();

    makeAllPlays();
    let currentItemIcon = document.getElementById(songIndex);
    if (currentItemIcon) {
        currentItemIcon.classList.remove('fa-play-circle');
        currentItemIcon.classList.add('fa-pause-circle');
    }

    playIcon.classList.remove('fa-play-circle');
    playIcon.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    updateUI();
};

// Master Play / Pause Toggle Button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        playIcon.classList.remove('fa-play-circle');
        playIcon.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

        let currentItemIcon = document.getElementById(songIndex);
        if (currentItemIcon) {
            currentItemIcon.classList.remove('fa-play-circle');
            currentItemIcon.classList.add('fa-pause-circle');
        }
    } else {
        audioElement.pause();
        playIcon.classList.remove('fa-pause-circle');
        playIcon.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        makeAllPlays();
    }
});

// Progress Bar Tracking
audioElement.addEventListener('timeupdate', () => {
    if (!isNaN(audioElement.duration) && audioElement.duration > 0) {
        let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        myProgressBar.value = progress;
    }
});

// Progress Bar Seek Control
myProgressBar.addEventListener('change', () => {
    if (!isNaN(audioElement.duration)) {
        audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
    }
});

// Individual Song List Item Click Listener
document.querySelector('.songlist').addEventListener('click', (e) => {
    let targetIcon = e.target.closest('.songItemPlay');
    if (!targetIcon) return;

    let clickedIndex = parseInt(targetIcon.id);

    if (songIndex === clickedIndex && !audioElement.paused) {
        audioElement.pause();
        targetIcon.classList.remove('fa-pause-circle');
        targetIcon.classList.add('fa-play-circle');
        playIcon.classList.remove('fa-pause-circle');
        playIcon.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    } else {
        songIndex = clickedIndex;
        playTrack();
    }
});

// Forward / Next Button
nextBtn.addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    playTrack();
});

// Backward / Previous Button
previousBtn.addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    playTrack();
});