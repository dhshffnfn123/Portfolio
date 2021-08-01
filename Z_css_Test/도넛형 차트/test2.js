$(window).ready(function(){
    draw(80, '.pie-chart1', '#ccc');
   draw(50, '.pie-chart2', '#8b22ff');
   draw(30, '.pie-chart3','#ff0');
 });
 
 function draw(max, classname, colorname){
    var i=1;
     var func1 = setInterval(function(){
       if(i<max){
           color1(i,classname,colorname);
           i++;
       } else{
         clearInterval(func1);
       }
     },10);
 }
 function color1(i, classname,colorname){
    $(classname).css({
         "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
    });
 }
 
 
 function replay(){
   draw(80, '.pie-chart1', '#ccc');
   draw(50, '.pie-chart2', '#8b22ff');
   draw(30, '.pie-chart3','#ff0');
 }