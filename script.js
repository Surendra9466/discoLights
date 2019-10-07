function change(){
    var color;
    color = Math.random()*1000; 
    color = "#"+color.toFixed(0);
    document.body.style.background= color;
}


function disco(){
    var color;
    var stop = setInterval(function(){

    color = Math.random()*1000000; 
    color = "#"+color.toFixed(0);
    document.body.style.background= color;
    
    },300);
   
}
