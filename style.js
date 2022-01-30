const music = document.querySelector("audio");
// Grab Image from an  image Container
const img = document.querySelector("img");
// Grab Our Main Play and Pause Button
let playBtn = document.getElementById("play");
// Grab music Title
let title = document.getElementById("title");
// Grab  Music Artist
let artist = document.getElementById("artist");
// Grab Next Button
let next = document.getElementById("next");
// Grab Prev Button
let prev = document.getElementById("prev");
const songs = [{
    name: "Aa To Sahii",
    title: "Ap Dhillon"
},
{
    name: "Bulleya",
    title: "Songs 2"
},
{
    name: "Dhadak",
    title: "songs 3"
}
]
let isPlaying = false;
const playMusic = () => {
    isPlaying = true;
    music.play();
    playBtn.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
}

// for pause functionality
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    playBtn.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};
playBtn.addEventListener("click", () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
})
// Changing the music data
const loadSongs = (songs) =>{
    title.textContent = songs.name;
    artist.textContent = songs.title;
    music.src = "music/"+songs.name + ".mp4";
    // img.src = "images/" +songs.name + ".jpg";
}
songIndex = 1;
const nextSongs = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();

}
next.addEventListener("click", nextSongs);
const prevSong = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}
prev.addEventListener("click", prevSong);