'use strict';

// @prepros-append ../blocks/loader/loader.js
// @prepros-append ../blocks/_header/_header.js
// @prepros-append ../blocks/_about/about.js
// @prepros-append ../blocks/catalog/catalog.js
// @prepros-append ../blocks/t-shirt/t-shirt.js
// @prepros-append ../blocks/pillow/pillow.js
// @prepros-append ../blocks/calender/calender.js
// @prepros-append ../blocks/puzzles/puzzles.js
// @prepros-append ../blocks/binding/binding.js
// @prepros-append ../blocks/photoFrames/photoFrames.js
// @prepros-append ../blocks/cutting/cutting.js
// @prepros-append ../blocks/mouse-mat/mouse-mat.js
// @prepros-append ../blocks/order/order.js
// @prepros-append ../blocks/payment/payment.js
// @prepros-append ../blocks/contacts/contacts.js

var select = document.querySelector('select');
var allLang = ['ru', 'ua'];
console.log(select);

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    var lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    var hash = window.location.hash;
    hash = hash.substr(1);
    if (hash == 'ru') {
        localStorage.setItem('local', 'ru');
        hash = localStorage.getItem('local');
        location.href = window.location.pathname + '#ru';
        select.value = hash;
    } else {
        localStorage.setItem('local', 'ua');
        hash = localStorage.getItem('local');
        location.href = window.location.pathname + '#ua';
        select.value = hash;
    }
    document.querySelector('.head-text').innerHTML = langArr['head-text'][hash];
    document.querySelector('.lng-header-about').innerHTML = langArr['about'][hash];
    document.querySelector('.lng-header-order').innerHTML = langArr['chip'][hash];
    document.querySelector('.lng-header-contacts').innerHTML = langArr['contacts'][hash];
    document.querySelector('.lng-header-about1').innerHTML = langArr['about1-1'][hash];
    document.querySelector('.lng-header-order1').innerHTML = langArr['chip1'][hash];
    document.querySelector('.lng-header-contacts1').innerHTML = langArr['contacts--1'][hash];
    document.querySelector('.lng-calendar').innerHTML = langArr['calendar'][hash];
    document.querySelector('.lng-puzzle').innerHTML = langArr['puzzle'][hash];
    document.querySelector('.lng-binding').innerHTML = langArr['binding'][hash];
    document.querySelector('.lng-photoFr').innerHTML = langArr['photoFr'][hash];
    document.querySelector('.lng-cutt').innerHTML = langArr['cutt'][hash];
    document.querySelector('.lng-mat').innerHTML = langArr['mat'][hash];
    document.querySelector('.header-title').innerHTML = langArr['header-title'][hash];
    document.querySelector('.header-subtitle').innerHTML = langArr['header-subtitle'][hash];
    document.querySelector('.bottom-link__text').innerHTML = langArr['bottom-link__text'][hash];
    // about
    document.querySelector('.lng-about').innerHTML = langArr['lng-about'][hash];
    document.querySelector('.about1').innerHTML = langArr['about1'][hash];
    document.querySelector('.about2').innerHTML = langArr['about2'][hash];
    document.querySelector('.about3').innerHTML = langArr['about3'][hash];
    document.querySelector('.about4').innerHTML = langArr['about4'][hash];
    document.querySelector('.about5').innerHTML = langArr['about5'][hash];
    document.querySelector('.about-small1').innerText = langArr['about-small1'][hash];
    document.querySelector('.about-small2').innerText = langArr['about-small2'][hash];
    document.querySelector('.about-small3').innerText = langArr['about-small3'][hash];
    document.querySelector('.about-small3-1').innerText = langArr['about-small3-1'][hash];
    document.querySelector('.about-small4').innerText = langArr['about-small4'][hash];
    document.querySelector('.about-small5').innerText = langArr['about-small5'][hash];
    document.querySelector('.about-small6').innerText = langArr['about-small6'][hash];
    document.querySelector('.about-small6-1').innerText = langArr['about-small6-1'][hash];
    document.querySelector('.about-small7').innerText = langArr['about-small7'][hash];
    document.querySelector('.about-small8').innerText = langArr['about-small8'][hash];
    // catalog
    // read-more
    document.querySelector('.read-more8').innerHTML = langArr['read-more8'][hash];
    document.querySelector('.read-more1').innerHTML = langArr['read-more1'][hash];
    document.querySelector('.read-more2').innerHTML = langArr['read-more2'][hash];
    document.querySelector('.read-more3').innerHTML = langArr['read-more3'][hash];
    document.querySelector('.read-more4').innerHTML = langArr['read-more4'][hash];
    document.querySelector('.read-more5').innerHTML = langArr['read-more5'][hash];
    document.querySelector('.read-more6').innerHTML = langArr['read-more6'][hash];
    document.querySelector('.read-more7').innerHTML = langArr['read-more7'][hash];
    // cup
    document.querySelector('.cup1').innerHTML = langArr['cup1'][hash];
    document.querySelector('.cup2').innerHTML = langArr['cup2'][hash];
    // t-shirt
    document.querySelector('.t-shirt1').innerHTML = langArr['t-shirt1'][hash];
    document.querySelector('.t-shirt2').innerHTML = langArr['t-shirt2'][hash];
    document.querySelector('.t-shirt3').innerHTML = langArr['t-shirt3'][hash];
    document.querySelector('.t-shirt4').innerHTML = langArr['t-shirt4'][hash];
    // pillow
    document.querySelector('.pillow1').innerHTML = langArr['pillow1'][hash];
    document.querySelector('.pillow2').innerHTML = langArr['pillow2'][hash];
    document.querySelector('.pillow3').innerHTML = langArr['pillow3'][hash];
    document.querySelector('.pillow4').innerHTML = langArr['pillow4'][hash];
    // calendar
    document.querySelector('.calendar1').innerHTML = langArr['calendar1'][hash];
    document.querySelector('.calendar2').innerHTML = langArr['calendar2'][hash];
    document.querySelector('.calendar3').innerHTML = langArr['calendar3'][hash];
    document.querySelector('.calendar4').innerHTML = langArr['calendar4'][hash];
    // puzzle
    document.querySelector('.puzzle1').innerHTML = langArr['puzzle1'][hash];
    document.querySelector('.puzzle2').innerHTML = langArr['puzzle2'][hash];
    document.querySelector('.puzzle3').innerHTML = langArr['puzzle3'][hash];
    document.querySelector('.puzzle4').innerHTML = langArr['puzzle4'][hash];
    document.querySelector('.puzzle5').innerHTML = langArr['puzzle5'][hash];
    document.querySelector('.puzzle6').innerHTML = langArr['puzzle6'][hash];
    document.querySelector('.puzzle7').innerHTML = langArr['puzzle7'][hash];
    document.querySelector('.puzzle8').innerHTML = langArr['puzzle8'][hash];
    document.querySelector('.puzzle9').innerHTML = langArr['puzzle9'][hash];
    // binding
    document.querySelector('.binding1').innerText = langArr['binding1'][hash];
    document.querySelector('.binding2').innerText = langArr['binding2'][hash];
    document.querySelector('.binding2-1').innerText = langArr['binding2-1'][hash];
    document.querySelector('.binding2-2').innerText = langArr['binding2-2'][hash];
    document.querySelector('.binding3').innerText = langArr['binding3'][hash];
    document.querySelector('.binding4').innerText = langArr['binding4'][hash];
    document.querySelector('.binding4-1').innerText = langArr['binding4-1'][hash];
    document.querySelector('.binding4-2').innerText = langArr['binding4-2'][hash];
    document.querySelector('.binding4-3').innerText = langArr['binding4-3'][hash];
    document.querySelector('.binding5').innerText = langArr['binding5'][hash];
    document.querySelector('.binding6').innerText = langArr['binding6'][hash];
    document.querySelector('.binding7').innerText = langArr['binding7'][hash];
    document.querySelector('.binding8').innerText = langArr['binding8'][hash];
    document.querySelector('.binding9').innerText = langArr['binding9'][hash];
    document.querySelector('.binding10').innerText = langArr['binding10'][hash];
    document.querySelector('.binding10-1').innerText = langArr['binding10-1'][hash];
    document.querySelector('.binding11').innerText = langArr['binding11'][hash];
    document.querySelector('.binding11-1').innerText = langArr['binding11-1'][hash];
    document.querySelector('.binding11-2').innerText = langArr['binding11-2'][hash];
    document.querySelector('.binding11-3').innerText = langArr['binding11-3'][hash];
    document.querySelector('.binding11-4').innerText = langArr['binding11-4'][hash];
    document.querySelector('.binding12').innerText = langArr['binding12'][hash];
    document.querySelector('.binding13').innerText = langArr['binding13'][hash];
    document.querySelector('.binding14').innerText = langArr['binding14'][hash];
    document.querySelector('.binding15').innerText = langArr['binding15'][hash];
    document.querySelector('.binding16').innerText = langArr['binding16'][hash];
    document.querySelector('.binding18').innerText = langArr['binding18'][hash];
    document.querySelector('.binding18-1').innerText = langArr['binding18-1'][hash];
    document.querySelector('.binding18-2').innerText = langArr['binding18-2'][hash];
    document.querySelector('.binding18-3').innerText = langArr['binding18-3'][hash];
    document.querySelector('.binding18-4').innerText = langArr['binding18-4'][hash];
    document.querySelector('.binding18-5').innerText = langArr['binding18-5'][hash];
    document.querySelector('.binding19').innerText = langArr['binding19'][hash];
    // photoFr
    document.querySelector('.photoFr1').innerHTML = langArr['photoFr1'][hash];
    document.querySelector('.photoFr2').innerHTML = langArr['photoFr2'][hash];
    document.querySelector('.photoFr3').innerHTML = langArr['photoFr3'][hash];
    document.querySelector('.photoFr4').innerHTML = langArr['photoFr4'][hash];
    document.querySelector('.photoFr5').innerHTML = langArr['photoFr5'][hash];
    document.querySelector('.photoFr6').innerHTML = langArr['photoFr6'][hash];
    document.querySelector('.photoFr7').innerHTML = langArr['photoFr7'][hash];
    document.querySelector('.photoFr8').innerHTML = langArr['photoFr8'][hash];
    document.querySelector('.photoFr9').innerHTML = langArr['photoFr9'][hash];
    // cutting
    document.querySelector('.cutting1').innerHTML = langArr['cutting1'][hash];
    document.querySelector('.cutting2').innerHTML = langArr['cutting2'][hash];
    document.querySelector('.cutting3').innerHTML = langArr['cutting3'][hash];
    document.querySelector('.cutting1-1').innerHTML = langArr['cutting1-1'][hash];
    document.querySelector('.cutting1-2').innerHTML = langArr['cutting1-2'][hash];
    document.querySelector('.cutting1-3').innerHTML = langArr['cutting1-3'][hash];
    // mouse-mat
    document.querySelector('.mouse-mat1').innerText = langArr['mouse-mat1'][hash];
    document.querySelector('.mouse-mat2').innerText = langArr['mouse-mat2'][hash];
    document.querySelector('.mouse-mat3').innerText = langArr['mouse-mat3'][hash];
    document.querySelector('.mouse-mat4').innerText = langArr['mouse-mat4'][hash];
    document.querySelector('.mouse-mat5').innerText = langArr['mouse-mat5'][hash];
    document.querySelector('.mouse-mat6').innerHTML = langArr['mouse-mat6'][hash];
    document.querySelector('.mouse-mat7').innerHTML = langArr['mouse-mat7'][hash];
    document.querySelector('.mouse-mat8').innerHTML = langArr['mouse-mat8'][hash];
    document.querySelector('.mouse-mat9').innerHTML = langArr['mouse-mat9'][hash];
    document.querySelector('.mouse-mat10').innerText = langArr['mouse-mat10'][hash];
    // order
    document.querySelector('.order1-1').innerHTML = langArr['order1-1'][hash];
    document.querySelector('.order1-2').innerHTML = langArr['order1-2'][hash];
    document.querySelector('.order1-3').innerHTML = langArr['order1-3'][hash];
    document.querySelector('.order1-4').innerHTML = langArr['order1-4'][hash];
    document.querySelector('.order1-5').innerHTML = langArr['order1-5'][hash];
    document.querySelector('.order1-6').innerHTML = langArr['order1-6'][hash];
    // payment
    document.querySelector('.payment1').innerHTML = langArr['payment1'][hash];
    document.querySelector('.payment2').innerHTML = langArr['payment2'][hash];
    document.querySelector('.payment3').innerHTML = langArr['payment3'][hash];
    document.querySelector('.payment4').innerHTML = langArr['payment4'][hash];
    document.querySelector('.payment5').innerHTML = langArr['payment5'][hash];
    document.querySelector('.payment6').innerHTML = langArr['payment6'][hash];
    document.querySelector('.payment7').innerHTML = langArr['payment7'][hash];
    document.querySelector('.payment8').innerHTML = langArr['payment8'][hash];
    document.querySelector('.payment9').innerHTML = langArr['payment9'][hash];
    document.querySelector('.payment10').innerHTML = langArr['payment10'][hash];
    document.querySelector('.payment11').innerHTML = langArr['payment11'][hash];
    document.querySelector('.payment12').innerHTML = langArr['payment12'][hash];
    document.querySelector('.payment13').innerHTML = langArr['payment13'][hash];
    document.querySelector('.payment14').innerHTML = langArr['payment14'][hash];
    document.querySelector('.payment15').innerHTML = langArr['payment15'][hash];
    document.querySelector('.payment16').innerHTML = langArr['payment16'][hash];
    document.querySelector('.payment17').innerHTML = langArr['payment17'][hash];
    document.querySelector('.payment18').innerHTML = langArr['payment18'][hash];
    document.querySelector('.payment19').innerHTML = langArr['payment19'][hash];
    document.querySelector('.payment20').innerHTML = langArr['payment20'][hash];
    document.querySelector('.payment21').innerHTML = langArr['payment21'][hash];
    document.querySelector('.payment77').innerHTML = langArr['payment77'][hash];
    // contacts
    document.querySelector('.contacts1').innerHTML = langArr['contacts1'][hash];
    document.querySelector('.contacts2').innerHTML = langArr['contacts2'][hash];
    document.querySelector('.contacts3').innerHTML = langArr['contacts3'][hash];
    document.querySelector('.contacts4').innerHTML = langArr['contacts4'][hash];
    document.querySelector('.contacts5').innerHTML = langArr['contacts5'][hash];
    document.querySelector('.contacts6').innerHTML = langArr['contacts6'][hash];
    document.querySelector('.contacts-time').innerHTML = langArr['contacts-time'][hash];
    document.querySelector('.contacts-time1').innerHTML = langArr['contacts-time1'][hash];
    document.querySelector('.contacts-time2').innerHTML = langArr['contacts-time2'][hash];
    // -------------------------------------------------------------------------
    for (var key in langArr) {
        var elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();
// ------------------------------------------------------
document.querySelector('.mobile-menu__checkbox').addEventListener('click', navShow);

function navShow() {
    document.body.classList.toggle('not-active');
}
// ------------------------------------------------------
var showBox = document.querySelectorAll('.show-box');
var read = document.querySelectorAll('.read-more');

read.forEach(function (item) {
    return item.addEventListener('click', showBlock);
});

function showBlock(e) {
    for (var i = 0; i < read.length; i++) {
        if (read[i] == e.target) {
            read[i].classList.add('block-hide');
            showBox[i].classList.remove('card-hide');
        }
    }
}
var mask = document.querySelector('.mask');

window.addEventListener('load', function () {
    mask.classList.add('hide');
    setTimeout(function () {
        mask.remove();
    }, 600);
});
// VANTA.RINGS({
//   el: "#header",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.00,
//   scaleMobile: 1.00,
//   backgroundColor: 0x770c,
//   color: 0xbd5701
// })

// VANTA.BIRDS({
//   el: "#header",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.00,
//   scaleMobile: 1.00,
//   backgroundColor: 0xb4500,
//   color1: 0x7c7c7c,
//   color2: 0x0
// })

VANTA.RINGS({
    el: "#header",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
});

var animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    var animScroll = function animScroll() {
        for (var index = 0; index < animItems.length; index++) {
            var animItem = animItems[index];
            var animItemHeight = animItem.offsetHeight;
            var animItemOffset = offset(animItem).top;
            var animStart = 4;

            var animatePoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animatePoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (pageYOffset > animItemOffset - animatePoint && pageYOffset < animItemOffset + animItemHeight) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    };

    var offset = function offset(el) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    };

    window.addEventListener('scroll', animScroll);


    setTimeout(function () {
        animScroll();
    }, 1000);
}

var btn = document.querySelector('.go-top');
function magic() {
    if (window.pageYOffset > 350) {
        btn.style.opacity = '.6';
    } else {
        btn.style.opacity = '0';
    }
}
//
// When scrolling, we run the function
window.onscroll = magic;

// let catalog = document.querySelector('#header-catalog');
// let listItem = document.querySelector('.catalog-nav__list');

// catalog.addEventListener('click',showCatalog);

// function showCatalog(){
//   listItem.classList.toggle('show-item')
// }


var swiper = new Swiper('.catalog-slider', {
    effect: 'cube',
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    autoplay: {
        delay: 3000
    },
    slideToClickedSlide: true,
    initialSlide: 0
});