

window.addEventListener('scroll', () => {
    let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
    let windowHeight = window.innerHeight; // 스크린 창
    let fullHeight = document.body.scrollHeight; // margin값은 미포함
    const navs = document.querySelectorAll('.nav'); // class명이 nav인 객체들 navs에 배열로 담음
    const nav_color = "rgb(223, 11, 135)"; // 사용자정의 색상을 선언 (String)으로 넣는다

   // console.log('Current Location : ' + scrollLocation); // 스크롤의 현재 위치 확인 ABout page : 1116
    if (scrollLocation >= 529 && scrollLocation <= 1500) {  /* ABOUT */
        //console.log('This is ABOUT');   // ABOUT 메서드 구동 확인
        document.querySelector('#me').style.backgroundColor="black"; // 스크롤의 위치가 if문안에 조건에 들면 검은색으로 바뀜
        navs[1].style.color=nav_color;

    } else if (scrollLocation >= 1700 && scrollLocation <= 3100) { /* PORTFOLIO */
        navs[2].style.color=nav_color;

    } else if (scrollLocation >= 3300 && scrollLocation <= 4400) { /* CONTACT */
        navs[3].style.color=nav_color;

    } else if (scrollLocation >= 0 && scrollLocation <= 200) { /* HOME */
        navs[0].style.color=nav_color;

    } else {
        navs[0].style.color="white";
        navs[1].style.color="white";
        navs[2].style.color="white";
        navs[3].style.color="white";
    }

    if (scrollLocation + windowHeight >= fullHeight) {
        console.log('END');
    }
})

/* 1116 */
    


   /*   function onScroll () {
        document.addEventListener('scroll', onScroll, {passive: true});

        const scrollposition = pageYOffset;
        const navs = document.querySelectorAll('.nav');
        const contents = document.querySelectorAll('.contents');
        const aboutTop = contents[0].offsetTop;

        if(aboutTop + 50 == scrollposition) { 
            navs[1].style.color="red";
            
        } else {
            navs[1].style.color="blue";
            navs[1].classList.remove('.color');
        }
    } */
 