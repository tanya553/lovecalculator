function love(){
    var name1 = document.getElementById("name1").Value;
    var name2 = document.getElementById("name2").Value;
    var love = Math.random()*100;
    document.getAnimationById("result").innerHTML= name1+"and"+name2+"have a"+love.toFixed(2)+"%chance";
    var par= document.getElementById("result");
     if(love>=80){
        par.innerHTML="your love is stronng!";
     }else if(result>=60){
        par.innerHTML="good match!!";
     }else if(result>=40){
        par.innerHTML="average match.";
     }else if(result>=20){
        par.innerHTML="not a good match.";
     }else{
        par.innerHTML="better luck next time!";
     }
    }     