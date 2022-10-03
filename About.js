let NextBtnOne = document.getElementById("NextBtnOne")
let NextBtnTwo = document.getElementById("NextBtnTwo")
let BackBtnOne = document.getElementById("BackBtnOne")
let BackBtnTwo = document.getElementById("BackBtnTwo")
NextBtnOne.addEventListener("click", function(){
    window.scrollTo({
        top: 2584,
        left: 1366,
    })
})
NextBtnTwo.addEventListener("click", function(){
    window.scrollTo({
        top: 2584,
        left: 2732,
    })
})
BackBtnOne.addEventListener("click", function(){
    window.scrollTo({
        top: 2584,
        left: 0,
    })
})
BackBtnTwo.addEventListener("click", function(){
    window.scrollTo({
        top: 2584,
        left: 1366,
    })
})