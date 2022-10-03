let SelectedCharOne = document.getElementById("ImgCharOne")
let SelectedCharTwo = document.getElementById("ImgCharTwo")

let CharOne = document.getElementById("CharacterOne")
let CharTwo = document.getElementById("CharacterTwo")

let BtnCharOne = document.getElementById("BtnCharOne")
let BtnCharTwo = document.getElementById("BtnCharTwo")

if(BtnCharOne.innerHTML == "Selected"){
}
if(BtnCharTwo.innerHTML == "Selected"){
}
function SelectCharacterOne(){
    CharOne.style.visibility = "hidden"
    SelectedCharOne.style.visibility = "visible"
    CharTwo.style.visibility = "visible"
    SelectedCharTwo.style.visibility = "hidden"
    BtnCharOne.innerHTML = "Selected"
    BtnCharTwo.innerHTML = "Select"
    BtnCharOne.style.backgroundColor = "blue"
    BtnCharTwo.style.backgroundColor = "skyblue"
}
function SelectCharacterTwo(){
    CharOne.style.visibility = "visible"
    SelectedCharOne.style.visibility = "hidden"
    CharTwo.style.visibility = "hidden"
    SelectedCharTwo.style.visibility = "visible"
    BtnCharTwo.innerHTML = "Selected"
    BtnCharOne.innerHTML = "Select"
    BtnCharTwo.style.backgroundColor = "blue"
    BtnCharOne.style.backgroundColor = "skyblue"
}