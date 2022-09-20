function WebHomeHide(){
    HomeCanvasHide()
    TittleHide()
    PlayHide()
    InsertSecretCodeHide()
    SettingHide()
    AboutHide()
    MoreGameHide()
    FacebookHide()
    InstagramHide()
    }
    function WebHomeShow(){
    HomeCanvasShow()
    TittleShow()
    PlayShow()
    InsertSecretCodeShow()
    SettingShow()
    AboutShow()
    MoreGameShow()
    FacebookShow()
    InstagramShow()
    HideSettings()
    }
    function HideWhenSetting(){
        WebHomeHide()
        ShowSettings()
    }
    function HomeCanvasHide(){
        document.getElementById("HomeCanvas").style.visibility = "hidden";
    }
    function HomeCanvasShow(){
        document.getElementById("HomeCanvas").style.visibility = "visible";
    }
    function TittleHide(){
        document.getElementById("TittleGame").style.visibility = "hidden";
    }
    function TittleShow(){
        document.getElementById("TittleGame").style.visibility = "visible";
    }
    function PlayHide(){
        document.getElementById("PlayButton").style.visibility = "hidden";
    }
    function PlayShow(){
        document.getElementById("PlayButton").style.visibility = "visible";
    }
    function InsertSecretCodeHide(){
        document.getElementById("InsertCodeGame").style.visibility = "hidden";
    }
    function InsertSecretCodeShow(){
        document.getElementById("InsertCodeGame").style.visibility = "visible";
    }
    function SettingHide(){
        document.getElementById("SettingsButton").style.visibility = "hidden";
    }
    function SettingShow(){
        document.getElementById("SettingsButton").style.visibility = "visible";
    }
    function AboutHide(){
        document.getElementById("AboutButton").style.visibility = "hidden";
    }
    function AboutShow(){
        document.getElementById("AboutButton").style.visibility = "visible";
    }
    function MoreGameHide(){
        document.getElementById("MoreGameButton").style.visibility = "hidden";
    }
    function MoreGameShow(){
        document.getElementById("MoreGameButton").style.visibility = "visible";
    }
    function FacebookHide(){
        document.getElementById("FacebookButton").style.visibility = "hidden";
    }
    function FacebookShow(){
        document.getElementById("FacebookButton").style.visibility = "visible";
    }
    function InstagramHide(){
        document.getElementById("InstagramButton").style.visibility = "hidden";
    }
    function InstagramShow(){
        document.getElementById("InstagramButton").style.visibility = "visible";
    }