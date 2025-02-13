let songName=document.querySelector("#song-name")
let songSinger=document.querySelector("#song-singer")
let songImage=document.querySelector(".song-image")
let playPauseImg=document.querySelector("#play-pause")
let volumeRange=document.querySelector("#volume-range")
let songRange=document.querySelector("#song-duration")
let volSvg=document.querySelector("#vol-svg")
let musicAnim=document.querySelector("#musicanim")
let playlistImg=document.querySelector("#playlist-img")
let playlist=document.querySelector(".playlist")
let playlistSong=document.querySelectorAll(".playlist-song")
let index=0;
let playingSong=false;
let track=document.createElement("audio")
let songs=[
    {
        name:"Humdard",
        path:"./music/Humdard.mp3",
        image:"./images/img10.jpeg.jpg",
        singer:"Arijit Singh"
    },
    {
        name:"Banjaara",
        path:"./music/banjara.mp3",
        image:"./images/img7.jpeg.jpg",
        singer:"MOHD. IRFAN"
    },
    {
        name:"Abhi To Party Shuru Hui Hai",
        path:"./music/Abhi_to_party_shuru_hui_hai.mp3",
        image:"./images/img9.jpeg.jpg",
        singer:"BADSHAH"
    },
    {
        name:"Galliyan Teri Galliyan",
        path:"./music/Galliyan.mp3",
        image:"./images/img5.jpeg.jpg",
        singer:"Ankit Tiwari"
    },
    {
        name:"Tera Chehra",
        path:"./music/Tera_Chehra.mp3",
        image:"./images/img4.jpeg.jpg",
        singer:"Arijit Singh"
    }
    // {
    //     name:"Ek Dil Hai",
    //     path:"./music/Ek_dil_hai.mp3",
    //     image:"./images/img6.jpeg",
    //     singer:"Alka Yagnik & Kumar Sanu"
    // },
    // {
    //     name:"Jo Beech Bajariya Tune",
    //     path:"./music/Beech_bajariya.mp3",
    //     image:"./images/img1.jpeg",
    //     singer:"Sapna Awasthi"
    // },
    // {
    //     name:"Tu Hi Tu",
    //     path:"./music/Tu_hi_tu.mp3",
    //     image:"./images/img2.jpeg",
    //     singer:"MOHD. IRFAN"
    // },
    // {
    //     name:"Aye Mere Humsafar",
    //     path:"./music/Aye_mere_humsafar.mp3",
    //     image:"./images/img8.jpeg",
    //     singer:"Amrita Nayak"
    // },
    // {
    //     name:"Aisi Lagi Lagan Meera Ho Gai Magan",
    //     path:"./music/Aisi_lagi_lagan.mp3",
    //     image:"./images/img3.jpeg",
    //     singer:"Nidhi Prasad "
    // }
]
function loadTrack(index){
track.src=songs[index].path;
songName.innerHTML=songs[index].name;
songSinger.innerHTML=songs[index].singer;
songImage.style=`background-image: url("${songs[index].image}");`
volume()
setInterval(()=>{
songRange.max=track.duration
songRange.value=track.currentTime
},1000)
track.loop=true
track.load()
}
loadTrack(index);

function playPause(){
    if(playingSong==false){
        playSong()
       
    }else{
        pauseSong()
       
    }
}
function playSong(){
    track.play();
    playingSong=true;
playPauseImg.src="./svg/pause.svg"
 musicAnim.style.display="block"

}
function pauseSong(){
    track.pause();
    playingSong=false;
playPauseImg.src="./svg/play.svg"
 musicAnim.style.display="none"
}
function nextSong(){
    if(index<songs.length-1){
        index++;
        loadTrack(index)
        playSong()
    }else{
        index=0;
        loadTrack(index)
        playSong()
    }
}
function previousSong(){
    if(index>0){
        index--;
        loadTrack(index)
        playSong()
    }else{
        index=songs.length-1;
        loadTrack(index)
        playSong()
    }
}
function volume(){
track.volume=volumeRange.value/100;
if(volumeRange.value==0){
    volSvg.src="./svg/mute.svg"
}else{
    volSvg.src="./svg/volume.svg"
}
}
function duration(){
    track.currentTime=songRange.value
}
playlistImg.addEventListener("click",()=>{
playlist.classList.toggle("playlist-active")
if(playlist.classList.contains("playlist-active")){
    playlistImg.src="./svg/cross.svg"
}else{
    playlistImg.src="./svg/playlist.svg"
}
})
playlistSong.forEach((song,index)=>{
    song.addEventListener('click',()=>{
        loadTrack(index);
        playSong()
        playlist.classList.remove("playlist-active")
        playlistImg.src="./svg/playlist.svg"

    })
})

document.getElementsByClassName('Playlist')
