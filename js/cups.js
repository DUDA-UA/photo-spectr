"use strict";

var select = document.querySelector('select');
var allLang = ['ru', 'ua'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    var lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    var hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    select.value = hash;
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
    // read-moreCup
    document.querySelector('.read-moreCup1').innerText = langArr['read-moreCup1'][hash];
    document.querySelector('.read-moreCup2').innerText = langArr['read-moreCup2'][hash];
    // document.querySelector('.read-moreCup1').innerHTML = langArr['read-moreCup1-1'][hash];
    // cups-page
    document.querySelector('.cups-page1').innerHTML = langArr['cups-page1'][hash];
    document.querySelector('.cups-page2').innerHTML = langArr['cups-page2'][hash];
    document.querySelector('.cups-page3').innerHTML = langArr['cups-page3'][hash];
    document.querySelector('.cups-page4').innerHTML = langArr['cups-page4'][hash];
    document.querySelector('.cups-page5').innerHTML = langArr['cups-page5'][hash];
    document.querySelector('.cups-page6').innerHTML = langArr['cups-page6'][hash];
    document.querySelector('.cups-page7').innerHTML = langArr['cups-page7'][hash];
    document.querySelector('.cups-page8').innerText = langArr['cups-page8'][hash];
    // cups-img
    document.querySelector('.cups-img').innerHTML = langArr['cups-img'][hash];
    document.querySelector('.cups-img1').innerHTML = langArr['cups-img1'][hash];
    document.querySelector('.cups-img2').innerHTML = langArr['cups-img2'][hash];
    document.querySelector('.cups-img3').innerHTML = langArr['cups-img3'][hash];
    document.querySelector('.cups-img4').innerHTML = langArr['cups-img4'][hash];
    document.querySelector('.cups-img5').innerHTML = langArr['cups-img5'][hash];
    document.querySelector('.cups-img6').innerHTML = langArr['cups-img6'][hash];
    document.querySelector('.cups-img7').innerHTML = langArr['cups-img7'][hash];
    document.querySelector('.cups-img8').innerText = langArr['cups-img8'][hash];
    document.querySelector('.cups-img9').innerText = langArr['cups-img9'][hash];
    document.querySelector('.cups-img10').innerText = langArr['cups-img10'][hash];
    document.querySelector('.cups-img11').innerHTML = langArr['cups-img11'][hash];
    document.querySelector('.cups-img11-1').innerHTML = langArr['cups-img11-1'][hash];
    document.querySelector('.cups-img12').innerText = langArr['cups-img12'][hash];
    document.querySelector('.cups-img13').innerText = langArr['cups-img13'][hash];
    document.querySelector('.cups-img14').innerHTML = langArr['cups-img14'][hash];
    // cups-buy
    document.querySelector('.cups-buy').innerHTML = langArr['cups-buy'][hash];
    document.querySelector('.cups-buy1').innerHTML = langArr['cups-buy1'][hash];
    document.querySelector('.cups-buy2').innerHTML = langArr['cups-buy2'][hash];
    document.querySelector('.cups-buy3').innerHTML = langArr['cups-buy3'][hash];
    document.querySelector('.cups-buy4').innerHTML = langArr['cups-buy4'][hash];
    document.querySelector('.cups-buy5').innerHTML = langArr['cups-buy5'][hash];
    document.querySelector('.cups-buy6').innerHTML = langArr['cups-buy6'][hash];
    document.querySelector('.cups-buy7').innerHTML = langArr['cups-buy7'][hash];
    document.querySelector('.cups-buy8').innerText = langArr['cups-buy8'][hash];
    document.querySelector('.cups-buy9').innerText = langArr['cups-buy9'][hash];
    document.querySelector('.cups-buy10').innerText = langArr['cups-buy10'][hash];
    document.querySelector('.cups-buy11').innerHTML = langArr['cups-buy11'][hash];
    document.querySelector('.cups-buy12').innerText = langArr['cups-buy12'][hash];
    document.querySelector('.cups-buy13').innerText = langArr['cups-buy13'][hash];
    document.querySelector('.cups-buy14').innerHTML = langArr['cups-buy14'][hash];
    document.querySelector('.cups-buy15').innerText = langArr['cups-buy15'][hash];

    // cup-clr
    document.querySelector('.cup-clr').innerHTML = langArr['cup-clr'][hash];

    // cup-box
    document.querySelector('.cup-box1').innerHTML = langArr['cup-box1'][hash];
    document.querySelector('.cup-box2').innerHTML = langArr['cup-box2'][hash];
    document.querySelector('.cup-box3').innerHTML = langArr['cup-box3'][hash];
    document.querySelector('.cup-box4').innerHTML = langArr['cup-box4'][hash];

    // cup-gallery
    document.querySelector('.cup-gallery').innerHTML = langArr['cup-gallery'][hash];

    // cup-order
    document.querySelector('.cup-order1').innerHTML = langArr['cup-order1'][hash];
    document.querySelector('.cup-order2').innerHTML = langArr['cup-order2'][hash];
    document.querySelector('.cup-order3').innerHTML = langArr['cup-order3'][hash];
    document.querySelector('.cup-order4').innerHTML = langArr['cup-order4'][hash];
    document.querySelector('.cup-order5').innerHTML = langArr['cup-order5'][hash];
    document.querySelector('.cup-order6').innerHTML = langArr['cup-order6'][hash];

    // cup-footer
    document.querySelector('.cup-footer').innerHTML = langArr['cup-footer'][hash];

    for (var key in langArr) {
        var elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}
changeLanguage();

// --------------------------------------------

var showItem1 = document.querySelectorAll('.show-item1');
var readMore1 = document.querySelector('.read-moreCup1');
// --------------------------------------------------------
var showItem2 = document.querySelectorAll('.show-item2');
var readMore2 = document.querySelector('.read-moreCup2');

readMore1.addEventListener('click', showItems);

function showItems() {
    readMore1.classList.add('text-hide');
    showItem1.forEach(function (el) {
        return el.classList.add('card-show');
    });
}
// ------------------------------------------------------
readMore2.addEventListener('click', showItems1);

function showItems1() {
    readMore2.classList.add('text-hide');
    showItem2.forEach(function (el) {
        return el.classList.add('card-show');
    });
}
// ------------------------------------------------

var mask = document.querySelector('.mask');

window.addEventListener('load', function () {
    mask.classList.add('hide');
    setTimeout(function () {
        mask.remove();
    }, 600);
});