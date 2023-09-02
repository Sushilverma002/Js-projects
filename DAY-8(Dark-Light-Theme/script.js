var icon = document.getElementById("icondark");

icon.onclick = function(){
    document.body.classList.toggle("darkMode");
    if(document.body.classList.contains("darkMode")){
        icon.src ="dark theme icon/sun.png";
    }else{
        icon.src="dark theme icon/moon.png"
    }
}