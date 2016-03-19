const SG90_NEUTRAL=1450;
const SG90_90=950;

// konashiと接続できたら動く
k.ready(function(){

    k.pwmPeriod(k.PIO1,10000);
    k.pwmDuty(k.PIO1,SG90_NEUTRAL);
    k.pwmMode(k.PIO1,k.KONASHI_PWM_ENABLE);

    // I/Oの設定
    k.pinMode(k.LED2, k.OUTPUT);
    // LEDをON
    k.digitalWrite(k.LED2, k.HIGH);
    document.getElementById("konashistate").innerHTML = "connected";

});

// konashiを探せ命令というを送る
function findKonashi(){
        document.getElementById("konashistate").innerHTML = "connecting"; 
        k.find();
}

$(function(){
    $(".pwmslider").on('input',function(event){
        var theta = document.getElementById("range01").value;
        var pwmduty = Math.round( theta*SG90_90/90+SG90_NEUTRAL );
       document.getElementById("show"+"range01").innerHTML = theta;
       k.pwmDuty(k.PIO1,pwmduty);
  });

});
