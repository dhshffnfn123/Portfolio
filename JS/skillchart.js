$(window).ready(function(){
    draw(80, '.pie-chart1', 'black');
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
 }

 const lists = document.querySelectorAll ('.list_name');


 lists[0].onclick = function() {
    draw(80, '.pie-chart1', 'red');
    document.querySelector('.center').innerHTML="80%";
    document.querySelector('#text_list').style.marginLeft="1980px"
    document.querySelector('#skill_info').innerHTML="&nbsp;"
  }
  lists[1].onclick = function() {
    draw(90, '.pie-chart1', 'cornflowerblue');
    document.querySelector('.center').innerHTML="90%";
    document.querySelector('#text_list').style.marginLeft="1330px"
    document.querySelector('#skill_info').innerHTML=" TEST inner HTML"
 } 
 lists[2].onclick = function() {
   draw(80, '.pie-chart1', 'yellow');
   document.querySelector('.center').innerHTML="80%";
   document.querySelector('#text_list').style.marginLeft="560px"
 }
 lists[3].onclick = function() {
   draw(80, '.pie-chart1', 'orange');
   document.querySelector('.center').innerHTML="80%";
   document.querySelector('#text_list').style.marginLeft="-240px"
 }
 lists[4].onclick = function() {
   draw(70, '.pie-chart1', 'rgb(52, 100, 255)');
   document.querySelector('.center').innerHTML="70%";
   document.querySelector('#text_list').style.marginLeft="-860px"
 }
 lists[5].onclick = function() {
   draw(70, '.pie-chart1', 'rgb(52, 255, 103)');
   document.querySelector('.center').innerHTML="70%";
   document.querySelector('#text_list').style.marginLeft="-1515px"
 }
 lists[6].onclick = function() {
   draw(70, '.pie-chart1', 'rgb(0, 240, 168)');
   document.querySelector('.center').innerHTML="70%";
   document.querySelector('#text_list').style.marginLeft="-2180px"
 }
 lists[7].onclick = function() {
   draw(60, '.pie-chart1', 'black');
   document.querySelector('.center').innerHTML="60%";
   document.querySelector('#text_list').style.marginLeft="-2860px"
 }












 /*
 select : 2450px 2780px
 html : 1980px
 css : 1330px
 js : 560px
 java : -240px
 jsp : -860px
 spring : -1515px
 sql : -1855px
 github : -2530px
 */
