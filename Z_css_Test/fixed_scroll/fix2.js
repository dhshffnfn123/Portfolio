


// window.onload를 사용하여 header부분에서 사용할 수 있게끔 하였음

window.onload = function navigo (){
    
    const header = document.querySelector('header'); // 헤더 부분을 가져온다
    const headerheight = header.clientHeight; // 헤더 높이를 가져온다
  document.addEventListener('scroll', onScroll, { passive: true });  //스크롤 이벤트

   function onScroll () {

     const scrollposition = pageYOffset; // 스크롤 위치를 구함
     const nav = document.querySelector('nav'); // 네비게이션을 가져옴

     if (scrollposition >= 300) { // 헤더높이 <= 스크롤 위치라면
       nav.classList.add('fix') // fix클래스를 네비에 추가
     } else {
       nav.classList.remove('fix'); // 아니라면 fix클래스를 네비에서 제거
     }
   } 
    
  }
  navigo()