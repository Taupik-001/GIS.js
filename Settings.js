let Detectkey = document.getElementById("keySelect")
let Detectwasd = document.getElementById("wasdSelect")
let TittleKey = document.getElementById("TittleKeyArrow")
let TittleWasd = document.getElementById("TittleWASD")
let BtnKey = document.getElementById("KEYButton")
let BtnWasd = document.getElementById("WASDButton")

if(Detectkey.innerHTML == "Selected"){
}
if(Detectwasd.innerHTML == "Selected"){
}
volMusic
volSound
function volumeMusic(){
    let volMusic = document.getElementById("MusicVolume").value
    document.getElementById("VolumeMusic").innerHTML = volMusic + "%"
    // soundGame.volume(volMusic)
}
function volumeSound(){
    let volSound = document.getElementById("SoundVolume").value
    document.getElementById("VolumeSound").innerHTML = volSound + "%"
}

function KeyWasd(){
    Detectwasd.innerHTML = "Selected"
    Detectkey.innerHTML = "Select"
    TittleWasd.style.backgroundColor = "blue"
    TittleKey.style.backgroundColor = "black"
    BtnWasd.style.border = "10px groove blue"
    BtnKey.style.border = "10px groove silver"
}
function KeyArrow(){
    Detectkey.innerHTML = "Selected"
    Detectwasd.innerHTML = "Select"
    TittleKey.style.backgroundColor = "blue"
    TittleWasd.style.backgroundColor = "black"
    BtnKey.style.border = "10px groove blue"
    BtnWasd.style.border = "10px groove silver"
}

function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
    this.loop = function(){
        this.sound.setAttribute("loop", "loop");
        this.sound.play();
    }
    this.volume = function(vol){
      this.sound.volume = vol;
    }
    this.remove = function(){
        document.body.removeChild(this.sound)
    }
}

function Musicadd(){
    soundGame = new sound("hula.ogg")
}
function PlayThemeMusic(){
    soundGame.loop()
}
function StopThemeMusic(){
    soundGame.stop()
}
function RemoveAudio(){
    soundGame.remove()
}
function load(){
    soundGame = new sound("hula.ogg")
}