
// first 페이지 넘어가면 navi가 자동으로 상단에 고정되게 함
window.onload = function navi_fix() {

    const first_page = document.querySelector('#first');
    const first_height = first_page.clientHeight;

    document.addEventListener('scroll', onScroll, {passive: true});

    function onScroll () {

        const scrollposition = pageYOffset;
        const nav = document.querySelector('nav');

        if(1100 <= scrollposition) { 
            nav.classList.add('fix'); // nav태그에 미리 정의해둔 fix 클래스를 넣는다
        } else {
            nav.classList.remove('fix');
        }
    }
}


