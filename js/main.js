'use strict';

// 開閉メニュー
const menuBar = document.getElementById('menu-bar');
const headerNav = document.getElementById('header-nav');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

menuBar.addEventListener('click', () => {
  headerNav.classList.toggle('nav-fadein');

  bar1.classList.toggle('bar1-time');
  bar2.classList.toggle('bar2-time');
  bar3.classList.toggle('bar3-time');
});


// 開閉メニュー（開いた時の処理）
const navBtn = document.querySelectorAll('a[href^="#"]');

for(let i = 0; i < navBtn.length; i++){
  navBtn[i].addEventListener('click', () => {

    if (headerNav.classList.contains('nav-fadein') == true) {
      headerNav.classList.remove('nav-fadein');

      bar1.classList.remove('bar1-time');
      bar2.classList.remove('bar2-time');
      bar3.classList.remove('bar3-time');
    }
  });
};


// ポートフォリオタイトルフェードイン
const portfolioTitle = document.getElementById('portfolio-title');

const fadeInTitle = function(){
  portfolioTitle.classList.add('fade-in-title');
}

setTimeout(fadeInTitle, 300);


// スクロールアニメーション（フェードイン）
const fadeInTarget = document.querySelectorAll('.fade-in-target');

window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++) {
    const rect = fadeInTarget[i].getBoundingClientRect().top;

    const scroll = window.pageYOffset || document.documentElement.scrollTop;

    const offset = rect + scroll;

    const windowHeight = window.innerHeight;

    if (scroll > offset - windowHeight) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }

  const windowOffset = window.pageYOffset;
  const toTop = document.getElementById('to-top');

  if (windowOffset > 300) {
    toTop.classList.remove('hideBtn');
    toTop.classList.add('showBtn');
  } else {
    toTop.classList.remove('showBtn');
    toTop.classList.add('hideBtn');
  }
});


// トップへ戻るアニメーション
scrollTop('to-top', 300);

function scrollTop(element, duration){
  const targetTop = document.getElementById(element);

  targetTop.addEventListener('click', function() {
    let currentY = window.pageYOffset;
    let step = duration / currentY > 1 ? 10 : 100;
    let timeStep = duration / currentY * step;
    let intervalId = setInterval(scrollUp, timeStep);

    function scrollUp() {
      currentY = window.pageYOffset;

      if (currentY === 0) {
        clearInterval(intervalId);
      } else {
        scrollBy(0, -step);
      }
    }
  });
}

// スムーススクロール（jQuery）
$(function(){

  $('a[href^="#"]').click(function() {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let headerHeight = $('#header').innerHeight();
    let position = target.offset().top - headerHeight;

    $('body, html').animate({
      scrollTop: position
    }, 500, 'swing');
    return false;
  });

});
