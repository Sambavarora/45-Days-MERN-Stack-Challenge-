var body=document.getElementById("me");
let isDarkMode=false;

function toggle(){
    if(isDarkMode = !isDarkMode){
               body.style.backgroundImage="linear-gradient(to right top, #0709dc, #0038e5, #0051ea, #0067eb, #007ae9, #0885ea, #2090e9, #369ae8, #41a1ed, #4ba9f2, #55b0f6, #5fb8fb)"
            // body.style.backgroundColor="white"
    }
    else{
     body.style.backgroundImage = "linear-gradient(to right bottom, #262626, #414142, #5e5e60, #7b7d81, #9a9ea2, #adb1b5, #c0c4c9, #d4d8dd, #dfe1e5, #eaebee, #f5f5f6, #ffffff)"
    }
    return false;
}