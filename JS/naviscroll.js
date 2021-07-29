// navi의 목록 선택시 해당하는 곳으로 스크롤 이동시키기
const navs = document.querySelectorAll('.nav');
const about_btn = document.querySelector('#viewBtn');
const home = document.querySelector('#first');
const contents = document.querySelectorAll('.contents');
const homeTop = home.offsetTop;
const aboutTop = contents[0].offsetTop;
const projectTop = contents[1].offsetTop;
const contactTop = contents[2].offsetTop;


about_btn.onclick = function() {
    window.scroll({top:aboutTop + 50, behavior: 'smooth'})
}
navs[0].onclick = function() {
    window.scroll({top:homeTop, behavior: 'smooth'})
}
navs[1].onclick = function() {
    window.scroll({top:aboutTop + 50, behavior: 'smooth'})
}
navs[2].onclick = function() {
    window.scroll({top:projectTop + 50, behavior: 'smooth'})
}
navs[3].onclick = function() {
    window.scroll({top:contactTop + 80, behavior: 'smooth'})
}
