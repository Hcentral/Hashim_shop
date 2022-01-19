var blackColor= document.getElementById("color-1");
var redColor= document.getElementById("color-2");
var purpleColor= document.getElementById("color-3");
var pinkColor= document.getElementById("color-4");
var watchImage=document.getElementById("watch");
var d= new Date();
var dateTime= document.getElementById("time");
var timeText= document.getElementById("time-text");
var heartRate= document.getElementById("heart-rate");
var rateHeart= document.getElementById("heartRate");
var HashimCard= document.getElementById("Hashim-card");
var float= document.getElementById("float-hashim");
var open= document.getElementById('open');

window.onload = function(){
  document.getElementById("Hashim-card").style.display='none';
};

float.onclick = function () {
  if (HashimCard.style.display ==='none') {
    HashimCard.style.display='Block';
    open.classList.add('fa-angle-double-left');
    open.classList.remove('fa-angle-double-right');
  }else{
    HashimCard.style.display='none';
    open.classList.remove('fa-angle-double-left');
    open.classList.add('fa-angle-double-right');
  }
   
}

   


   
    
blackColor.addEventListener('click',function(){
    watchImage.src='images/dark-grey.png';
    watchImage.alt="smart-watch-black";
    
});

redColor.addEventListener('click',function(){
    watchImage.src='images/light-oragne.png';
    watchImage.alt="smart-watch-red";
});

purpleColor.addEventListener('click',function(){
    watchImage.src='images/light-purple.png';
    watchImage.alt="smart-watch-purple";
});

pinkColor.addEventListener('click',function(){
    watchImage.src='images/light-oragne.png';
    watchImage.alt="smart-watch-pink";
});

dateTime.addEventListener('click',function(){
  rateHeart.style.display="none";
  timeText.style.dispay = "block";
  timeText.innerHTML=d;
});

heartRate.addEventListener('click',function(){ 
  timeText.style.dispay = "none";
  rateHeart.style.display = "block";
  //rateHeart.innerHTML=72;
  
});
