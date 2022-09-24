let Detectkey = document.getElementById("keySelect")
let Detectwasd = document.getElementById("wasdSelect")

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
    document.getElementById("wasdSelect").innerHTML = "Selected"
    document.getElementById("keySelect").innerHTML = "Select"
    document.getElementById("TittleWASD").style.backgroundColor = "blue"
    document.getElementById("TittleKeyArrow").style.backgroundColor = "black"
    document.getElementById("WASDButton").style.border = "10px groove blue"
    document.getElementById("KEYButton").style.border = "10px groove silver"
}
function KeyArrow(){
    document.getElementById("keySelect").innerHTML = "Selected"
    document.getElementById("wasdSelect").innerHTML = "Select"
    document.getElementById("TittleKeyArrow").style.backgroundColor = "blue"
    document.getElementById("TittleWASD").style.backgroundColor = "black"
    document.getElementById("KEYButton").style.border = "10px groove blue"
    document.getElementById("WASDButton").style.border = "10px groove silver"
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
}

function PlayThemeMusic(){
    soundGame = new sound("hula.ogg")
    soundGame.loop()
}
function StopThemeMusic(){
    soundGame.stop()
}