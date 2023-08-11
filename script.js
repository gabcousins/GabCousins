var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "images/moon.png";
    }else{
        icon.src = "images/sun.png";
    }
}


const a = document.getElementById('myButton');
a.addEventListener('click', () => {
 alert('Click the bottom right discord button to chat with me and shatterdome');
});
