function calculateLove(){
    let name1=document.getElementById('name1').value;
    let name2=document.getElementById('name2').value;
    let love=Math.floor(Math.random()*101)
    console.log(love)
    document.getElementById('result').innerHTML=
    name1+"❤️"+name2 + '=' + love +'%'

}
