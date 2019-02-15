var timeover = 3600;

document.querySelector
var time = document.getElementById("time").getElementsByTagName("span");
var  showtime = function(){
    timeover--;
    var hour = Math.floor(timeover/3600);
    var mintues = Math.floor(timeover/60);
    var seconds = Math.floor(timeover%60);
    // var date = new Date();
    // var mintues = date.getMinutes();
    // var hour = date.getHours();
    // var seconds = date.getSeconds();
    
    time[0].innerHTML = getNumber(hour);
    time[2].innerHTML = getNumber(mintues);
    time[4].innerHTML = getNumber(seconds);
    console.log(hour);
}
var timer = setInterval(function(){
    showtime();
},1000);

var getNumber = function(m){
    if(m<10){
        return "0" + m;
    }else{
        return m;
    }
}
