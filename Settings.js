function ShowSettings(){
    ShowCanvasSettings()
    ShowTittleSettings()
    ShowBackSetings()
    ShowLineTittleSettings()
    ShowTittleVolume()
    ShowTittleMusicVolume()
    ShowMusicVolume()
    ShowVolumeMusic()
    ShowTittleSoundVolume()
    ShowSoundVolume()
    ShowVolumeSound()
    ShowLineSET()
    ShowTittleController()
    ShowTittleKeyArrow()
    ShowKEYButton()
    ShowkeySelect()
    ShowTittleWASD()
    ShowWASDButton()
    ShowwasdSelect()
}
function HideSettings(){
    HideCanvasSettings()
    HideTittleSettings()
    HideBackSetings()
    HideLineTittleSettings()
    HideTittleVolume()
    HideTittleMusicVolume()
    HideMusicVolume()
    HideVolumeMusic()
    HideTittleSoundVolume()
    HideSoundVolume()
    HideVolumeSound()
    HideLineSET()
    HideTittleController()
    HideTittleKeyArrow()
    HideKEYButton()
    HidekeySelect()
    HideTittleWASD()
    HideWASDButton()
    HidewasdSelect()
    WebHomeShow()
}

function volumeMusic(){
    let volMusic = document.getElementById("MusicVolume").value
    document.getElementById("VolumeMusic").innerHTML = volMusic + "%"
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
    document.getElementById("WASDButton").style.border = "10px solid blue"
    document.getElementById("KEYButton").style.border = "10px solid black"
}
function KeyArrow(){
    document.getElementById("keySelect").innerHTML = "Selected"
    document.getElementById("wasdSelect").innerHTML = "Select"
    document.getElementById("TittleKeyArrow").style.backgroundColor = "blue"
    document.getElementById("TittleWASD").style.backgroundColor = "black"
    document.getElementById("KEYButton").style.border = "10px solid blue"
    document.getElementById("WASDButton").style.border = "10px solid black"
}

function ShowCanvasSettings(){
    document.getElementById("CanvasSettings").style.visibility = "visible"
}
function HideCanvasSettings(){
    document.getElementById("CanvasSettings").style.visibility = "hidden"
}
function ShowBackSetings(){
    document.getElementById("BackSettings").style.visibility = "visible"
}
function HideBackSetings(){
    document.getElementById("BackSettings").style.visibility = "hidden"
}
function ShowTittleSettings(){
    document.getElementById("TittleSettings").style.visibility = "visible"
}
function HideTittleSettings(){
    document.getElementById("TittleSettings").style.visibility = "hidden"
}
function ShowLineTittleSettings(){
    document.getElementById("LineTittleSettings").style.visibility = "visible"
}
function HideLineTittleSettings(){
    document.getElementById("LineTittleSettings").style.visibility = "hidden"
}
function ShowTittleVolume(){
    document.getElementById("TittleVolume").style.visibility = "visible"
}
function HideTittleVolume(){
    document.getElementById("TittleVolume").style.visibility = "hidden"
}
function ShowTittleMusicVolume(){
    document.getElementById("TittleMusicVolume").style.visibility = "visible"
}
function HideTittleMusicVolume(){
    document.getElementById("TittleMusicVolume").style.visibility = "hidden"
}
function ShowMusicVolume(){
    document.getElementById("MusicVolume").style.visibility = "visible"
}
function HideMusicVolume(){
    document.getElementById("MusicVolume").style.visibility = "hidden"
}
function ShowVolumeMusic(){
    document.getElementById("VolumeMusic").style.visibility = "visible"
}
function HideVolumeMusic(){
    document.getElementById("VolumeMusic").style.visibility = "hidden"
}
function ShowTittleSoundVolume(){
    document.getElementById("TittleSoundVolume").style.visibility = "visible"
}
function HideTittleSoundVolume(){
    document.getElementById("TittleSoundVolume").style.visibility = "hidden"
}
function ShowSoundVolume(){
    document.getElementById("SoundVolume").style.visibility = "visible"
}
function HideSoundVolume(){
    document.getElementById("SoundVolume").style.visibility = "hidden"
}
function ShowVolumeSound(){
    document.getElementById("VolumeSound").style.visibility = "visible"
}
function HideVolumeSound(){
    document.getElementById("VolumeSound").style.visibility = "hidden"
}
function ShowLineSET(){
    document.getElementById("LineSET").style.visibility = "visible"
}
function HideLineSET(){
    document.getElementById("LineSET").style.visibility = "hidden"
}
function ShowTittleController(){
    document.getElementById("TittleController").style.visibility = "visible"
}
function HideTittleController(){
    document.getElementById("TittleController").style.visibility = "hidden"
}
function ShowTittleKeyArrow(){
    document.getElementById("TittleKeyArrow").style.visibility = "visible"
}
function HideTittleKeyArrow(){
    document.getElementById("TittleKeyArrow").style.visibility = "hidden"
}
function ShowKEYButton(){
    document.getElementById("KEYButton").style.visibility = "visible"
}
function HideKEYButton(){
    document.getElementById("KEYButton").style.visibility = "hidden"
}
function ShowkeySelect(){
    document.getElementById("keySelect").style.visibility = "visible"
}
function HidekeySelect(){
    document.getElementById("keySelect").style.visibility = "hidden"
}
function ShowTittleWASD(){
    document.getElementById("TittleWASD").style.visibility = "visible"
}
function HideTittleWASD(){
    document.getElementById("TittleWASD").style.visibility = "hidden"
}
function ShowWASDButton(){
    document.getElementById("WASDButton").style.visibility = "visible"
}
function HideWASDButton(){
    document.getElementById("WASDButton").style.visibility = "hidden"
}
function ShowwasdSelect(){
    document.getElementById("wasdSelect").style.visibility = "visible"
}
function HidewasdSelect(){
    document.getElementById("wasdSelect").style.visibility = "hidden"
}