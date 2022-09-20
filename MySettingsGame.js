function playmusicao(){
  backsoundTheme = new sound("hula.ogg")
  backsoundTheme.loop()
  hidePlayMusic()
  showMuteMusic()
}
function stopmu(){
  backsoundTheme.stop()
}
function WebSettingShow(){
  document.getElementById("volumemusic").style.visibility = "visible"
  backsoundTheme.loop()
  document.getElementById("showbb").style.visibility = "hidden"
  document.getElementById("hidebb").style.visibility = "visible"
}
function WebSetttingHide(){
  document.getElementById("volumemusic").style.visibility = "hidden"
  document.getElementById("hidebb").style.visibility = "hidden"
  document.getElementById("showbb").style.visibility = "visible"
}
function valueVolume(){
  let apa = document.getElementById("volumemusic").value
  backsoundTheme.volume(apa)
  document.getElementById("testa").innerHTML = apa
  // backsoundTheme.volume(value)
}
//max volume sound is 1
function playtheSoundMusic(){
  showMuteMusic()
  hidePlayMusic()
  if (document.getElementById("PlayMusic").style.visibility == "hidden"){
    document.getElementById("MusicAlert").innerHTML = "Your Sound Is ON"
    backsoundTheme.volume(1)
  }
}
function stoptheSoundMusic(){
  showPlayMusic()
  hideMuteMusic()
  if (document.getElementById("PlayMusic").style.visibility == "visible"){
    document.getElementById("MusicAlert").innerHTML = "Your Sound Is OFF"
    backsoundTheme.volume(0.1)
    }
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
function showPlayMusic(){
  document.getElementById("PlayMusic").style.visibility = "visible";
}
function hidePlayMusic(){
  document.getElementById("PlayMusic").style.visibility = "hidden";
}
function showMuteMusic(){
  document.getElementById("MuteMusic").style.visibility = "visible";
}
function hideMuteMusic(){
  document.getElementById("MuteMusic").style.visibility = "hidden";
}

function GoToSettings(){

}
function HideSettings(){

}