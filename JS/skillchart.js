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
    draw(80, '.pie-chart1', 'orange');
    document.querySelector('.center').innerHTML="80%";
    document.querySelector('#text_list').classList.replace('select','html');
    document.querySelector('#text_list').classList.replace('css','html');
    document.querySelector('#text_list').classList.replace('js','html');
    document.querySelector('#text_list').classList.replace('jsp','html');
    document.querySelector('#text_list').classList.replace('spring','html');
    document.querySelector('#text_list').classList.replace('sql','html');
    document.querySelector('#text_list').classList.replace('git','html');
  }
  lists[1].onclick = function() {
    draw(90, '.pie-chart1', 'cornflowerblue');
    document.querySelector('.center').innerHTML="90%";
    document.querySelector('#text_list').classList.replace('select','css');
   document.querySelector('#text_list').classList.replace('html','css');
   document.querySelector('#text_list').classList.replace('js','css');
   document.querySelector('#text_list').classList.replace('jsp','css');
   document.querySelector('#text_list').classList.replace('spring','css');
   document.querySelector('#text_list').classList.replace('sql','css');
   document.querySelector('#text_list').classList.replace('git','css');
 }
 lists[2].onclick = function() {
   draw(80, '.pie-chart1', 'rgb(237, 255, 79)');
   document.querySelector('#text_list').classList.replace('select','js');
   document.querySelector('#text_list').classList.replace('html','js');
   document.querySelector('#text_list').classList.replace('css','js');
   document.querySelector('#text_list').classList.replace('jsp','js');
   document.querySelector('#text_list').classList.replace('spring','js');
   document.querySelector('#text_list').classList.replace('sql','js');
   document.querySelector('#text_list').classList.replace('git','js');
 }
 lists[3].onclick = function() {
   draw(70, '.pie-chart1', 'rgb(52, 100, 255)');
   document.querySelector('#text_list').classList.replace('select','jsp');
   document.querySelector('#text_list').classList.replace('html','jsp');
   document.querySelector('#text_list').classList.replace('css','jsp');
   document.querySelector('#text_list').classList.replace('js','jsp');
   document.querySelector('#text_list').classList.replace('spring','jsp');
   document.querySelector('#text_list').classList.replace('sql','jsp');
   document.querySelector('#text_list').classList.replace('git','jsp');
 }
 lists[4].onclick = function() {
   draw(70, '.pie-chart1', 'rgb(52, 255, 103)');
   document.querySelector('#text_list').classList.replace('select','spring');
   document.querySelector('#text_list').classList.replace('html','spring');
   document.querySelector('#text_list').classList.replace('css','spring');
   document.querySelector('#text_list').classList.replace('js','spring');
   document.querySelector('#text_list').classList.replace('jsp','spring');
   document.querySelector('#text_list').classList.replace('sql','spring');
   document.querySelector('#text_list').classList.replace('git','spring');
 }
 lists[5].onclick = function() {
   draw(70, '.pie-chart1', 'rgb(52, 157, 255)');
   document.querySelector('#text_list').classList.replace('select','sql');
   document.querySelector('#text_list').classList.replace('html','sql');
   document.querySelector('#text_list').classList.replace('css','sql');
   document.querySelector('#text_list').classList.replace('js','sql');
   document.querySelector('#text_list').classList.replace('jsp','sql');
   document.querySelector('#text_list').classList.replace('spring','sql');
   document.querySelector('#text_list').classList.replace('git','sql');
 }
 lists[6].onclick = function() {
   draw(60, '.pie-chart1', 'black');
   document.querySelector('#text_list').classList.replace('select','git');
   document.querySelector('#text_list').classList.replace('html','git');
   document.querySelector('#text_list').classList.replace('css','git');
   document.querySelector('#text_list').classList.replace('js','git');
   document.querySelector('#text_list').classList.replace('jsp','git');
   document.querySelector('#text_list').classList.replace('spring','git');
   document.querySelector('#text_list').classList.replace('sql','git');
 }












 /*
 select : 2450px
 html : 1650px
 css : 1000px
 js : 230px
 jsp : -530px
 spring : -1185px
 sql : -1855px
 github : -2530px
 */
