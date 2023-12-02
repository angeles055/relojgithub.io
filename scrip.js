function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();  
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

 
    var clockElement = document.getElementById("clock");

  
    var timeText = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

 
    var secondsColor = `rgb(${255 - seconds * 4}, ${seconds * 4}, 0)`;
    
 
    var coloredTimeText = `<span style="color:${secondsColor}">${timeText}</span>:${seconds < 10 ? '0' : ''}${seconds}`;

    
    clockElement.innerHTML = coloredTimeText;
}

setInterval(updateClock, 1000);
updateClock();  


