'use strict';

var select = document.querySelector('select');
var allLang = ['ru', 'ua'];

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
    // if (!allLang.includes(hash)) {
    //     location.href = window.location.pathname + '#ru';
    //     location.reload();
    // }
    // select.value = hash;
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
    // shirt
    document.querySelector('.shirt1').innerHTML = langArr['shirt1'][hash];
    document.querySelector('.shirt2').innerHTML = langArr['shirt2'][hash];
    document.querySelector('.shirt3').innerHTML = langArr['shirt3'][hash];
    document.querySelector('.shirt4').innerHTML = langArr['shirt4'][hash];
    document.querySelector('.shirt4-1').innerHTML = langArr['shirt4-1'][hash];
    document.querySelector('.shirt5').innerHTML = langArr['shirt5'][hash];
    document.querySelector('.shirt6').innerHTML = langArr['shirt6'][hash];
    document.querySelector('.shirt7').innerHTML = langArr['shirt7'][hash];
    document.querySelector('.shirt8').innerText = langArr['shirt8'][hash];
    document.querySelector('.shirt9').innerText = langArr['shirt9'][hash];
    document.querySelector('.shirt10').innerText = langArr['shirt10'][hash];
    document.querySelector('.shirt11').innerHTML = langArr['shirt11'][hash];
    document.querySelector('.shirt12').innerText = langArr['shirt12'][hash];
    document.querySelector('.shirt13').innerText = langArr['shirt13'][hash];
    document.querySelector('.shirt14').innerHTML = langArr['shirt14'][hash];
    // document.querySelector('.shirt15').innerText = langArr['shirt15'][hash];
    // document.querySelector('.shirt16').innerHTML = langArr['shirt16'][hash];
    document.querySelector('.shirt17').innerText = langArr['shirt17'][hash];
    document.querySelector('.shirt18').innerText = langArr['shirt18'][hash];
    document.querySelector('.shirt19').innerText = langArr['shirt19'][hash];
    document.querySelector('.shirt20').innerText = langArr['shirt20'][hash];
    document.querySelector('.shirt21').innerHTML = langArr['shirt21'][hash];
    document.querySelector('.shirt22').innerHTML = langArr['shirt22'][hash];
    document.querySelector('.shirt23').innerText = langArr['shirt23'][hash];
    document.querySelector('.shirt24').innerHTML = langArr['shirt24'][hash];
    // document.querySelector('.shirt25').innerText = langArr['shirt25'][hash];
    // document.querySelector('.shirt26').innerText = langArr['shirt26'][hash];
    document.querySelector('.shirt27').innerText = langArr['shirt27'][hash];
    document.querySelector('.shirt28').innerText = langArr['shirt28'][hash];
    document.querySelector('.shirt29').innerText = langArr['shirt29'][hash];
    document.querySelector('.shirt30').innerText = langArr['shirt30'][hash];
    document.querySelector('.shirt31').innerHTML = langArr['shirt31'][hash];
    document.querySelector('.shirt32').innerText = langArr['shirt32'][hash];
    document.querySelector('.shirt33').innerText = langArr['shirt33'][hash];
    document.querySelector('.shirt34').innerHTML = langArr['shirt34'][hash];
    // document.querySelector('.shirt35').innerText = langArr['shirt35'][hash];
    // document.querySelector('.shirt36').innerText = langArr['shirt36'][hash];
    // color-shirt
    document.querySelector('.color-shirt1').innerText = langArr['color-shirt1'][hash];
    document.querySelector('.color-shirt2').innerText = langArr['color-shirt2'][hash];
    document.querySelector('.color-shirt3').innerHTML = langArr['color-shirt3'][hash];
    document.querySelector('.color-shirt4').innerHTML = langArr['color-shirt4'][hash];
    document.querySelector('.color-shirt5').innerHTML = langArr['color-shirt5'][hash];
    // shirt-size
    document.querySelector('.shirt-ukr1').innerHTML = langArr['shirt-ukr1'][hash];
    document.querySelector('.shirt-size1').innerText = langArr['shirt-size1'][hash];
    document.querySelector('.shirt-size2').innerText = langArr['shirt-size2'][hash];
    document.querySelector('.shirt-size3').innerHTML = langArr['shirt-size3'][hash];
    document.querySelector('.shirt-size4').innerHTML = langArr['shirt-size4'][hash];
    document.querySelector('.shirt-size5').innerHTML = langArr['shirt-size5'][hash];
    document.querySelector('.shirt-size6').innerHTML = langArr['shirt-size6'][hash];
    document.querySelector('.shirt-size7').innerHTML = langArr['shirt-size7'][hash];
    document.querySelector('.shirt-size8').innerHTML = langArr['shirt-size8'][hash];
    document.querySelector('.shirt-size9').innerHTML = langArr['shirt-size9'][hash];
    // for-men
    document.querySelector('.shirt-ukr2').innerHTML = langArr['shirt-ukr2'][hash];
    document.querySelector('.for-men1').innerText = langArr['for-men1'][hash];
    document.querySelector('.for-men2').innerHTML = langArr['for-men2'][hash];
    document.querySelector('.for-men3').innerHTML = langArr['for-men3'][hash];
    document.querySelector('.for-men4').innerHTML = langArr['for-men4'][hash];
    document.querySelector('.for-men5').innerHTML = langArr['for-men5'][hash];
    document.querySelector('.for-men6').innerHTML = langArr['for-men6'][hash];
    document.querySelector('.for-men7').innerHTML = langArr['for-men7'][hash];
    document.querySelector('.for-men8').innerHTML = langArr['for-men8'][hash];
    // for-women
    document.querySelector('.shirt-ukr3').innerHTML = langArr['shirt-ukr3'][hash];
    document.querySelector('.for-women1').innerText = langArr['for-women1'][hash];
    document.querySelector('.for-women2').innerHTML = langArr['for-women2'][hash];
    document.querySelector('.for-women3').innerHTML = langArr['for-women3'][hash];
    document.querySelector('.for-women4').innerHTML = langArr['for-women4'][hash];
    document.querySelector('.for-women5').innerHTML = langArr['for-women5'][hash];
    document.querySelector('.for-women6').innerHTML = langArr['for-women6'][hash];
    document.querySelector('.for-women7').innerHTML = langArr['for-women7'][hash];
    document.querySelector('.for-women8').innerHTML = langArr['for-women8'][hash];
    // shirt-size__footer
    document.querySelector('.shirt-size__footer').innerText = langArr['shirt-size__footer'][hash];
    // shirt-order
    document.querySelector('.shirt-order1').innerHTML = langArr['shirt-order1'][hash];
    document.querySelector('.shirt-order2').innerHTML = langArr['shirt-order2'][hash];
    document.querySelector('.shirt-order3').innerHTML = langArr['shirt-order3'][hash];
    document.querySelector('.shirt-order4').innerHTML = langArr['shirt-order4'][hash];
    document.querySelector('.shirt-order5').innerHTML = langArr['shirt-order5'][hash];
    document.querySelector('.shirt-order6').innerHTML = langArr['shirt-order6'][hash];
    // shirt-footer
    document.querySelector('.shirt-footer').innerHTML = langArr['shirt-footer'][hash];
    for (var key in langArr) {
        var elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();

var mask = document.querySelector('.mask');

window.addEventListener('load', function () {
    mask.classList.add('hide');
    setTimeout(function () {
        mask.remove();
    }, 600);
});

// let colorList = document.querySelectorAll('.color-list__item');
// console.log(colorList);

// colorList.map((e)=>{
//     console.log(e.target)
// })

// let colorList = [...document.querySelectorAll('.color-list__item')];
// console.log(colorList);
// let listen = e => console.log(colorList.indexOf(e.target))

// let colorShirt = [...document.querySelectorAll('.color-img__item')];
// console.log(colorShirt);

// colorList.forEach(list => list.addEventListener('click',(e)=>{
//     console.log(list.id)
//     let clrImg = document.getElementsByClassName('.color-img');
// }))

window.onload = function () {
    document.querySelector('.color-list').addEventListener('click', choseClr);

    function choseClr(e) {
        console.log(e);
        if (e.target.className == 'color-list__item') {
            var dataTab = e.target.getAttribute('data-tab');
            var colorShirt = document.getElementsByClassName('color-img__item');
            for (var i = 0; i < colorShirt.length; i++) {
                if (dataTab == i) {
                    colorShirt[i].style.display = 'block';
                } else {
                    colorShirt[i].style.display = 'none';
                }
            }
        }
    }
};