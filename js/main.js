"use strict";function changeURLLanguage(){var e=select.value;localStorage.setItem("lang",e),location.href=window.location.pathname+"#"+localStorage.getItem("lang"),location.reload()}function changeLanguage(){var e=localStorage.getItem("lang");"ua"==e?(localStorage.setItem("local","ua"),e=localStorage.getItem("local"),location.href=window.location.pathname+"#ua"):(localStorage.setItem("local","ru"),e=localStorage.getItem("local"),location.href=window.location.pathname+"#ru"),select.value=e,document.querySelector(".head-text").innerText=langArr["head-text"][e],document.querySelector(".lng-header-about").innerHTML=langArr.about[e],document.querySelector(".lng-header-order").innerHTML=langArr.chip[e],document.querySelector(".lng-header-contacts").innerHTML=langArr.contacts[e],document.querySelector(".lng-header-about1").innerHTML=langArr["about1-1"][e],document.querySelector(".lng-header-order1").innerHTML=langArr.chip1[e],document.querySelector(".lng-header-contacts1").innerHTML=langArr["contacts--1"][e],document.querySelector(".lng-calendar").innerHTML=langArr.calendar[e],document.querySelector(".lng-puzzle").innerHTML=langArr.puzzle[e],document.querySelector(".lng-binding").innerHTML=langArr.binding[e],document.querySelector(".lng-photoFr").innerHTML=langArr.photoFr[e],document.querySelector(".lng-cutt").innerHTML=langArr.cutt[e],document.querySelector(".lng-mat").innerHTML=langArr.mat[e],document.querySelector(".header-title").innerHTML=langArr["header-title"][e],document.querySelector(".header-subtitle").innerHTML=langArr["header-subtitle"][e],document.querySelector(".bottom-link__text").innerHTML=langArr["bottom-link__text"][e],document.querySelector(".lng-stationery-header").innerHTML=langArr["stationery-header"][e],document.querySelector(".lng-about").innerHTML=langArr["lng-about"][e],document.querySelector(".about1").innerHTML=langArr.about1[e],document.querySelector(".about2").innerHTML=langArr.about2[e],document.querySelector(".about3").innerHTML=langArr.about3[e],document.querySelector(".about4").innerHTML=langArr.about4[e],document.querySelector(".about5").innerHTML=langArr.about5[e],document.querySelector(".about-small1").innerText=langArr["about-small1"][e],document.querySelector(".about-small2").innerText=langArr["about-small2"][e],document.querySelector(".about-small3").innerText=langArr["about-small3"][e],document.querySelector(".about-small3-1").innerText=langArr["about-small3-1"][e],document.querySelector(".about-small4").innerText=langArr["about-small4"][e],document.querySelector(".about-small5").innerText=langArr["about-small5"][e],document.querySelector(".about-small6").innerText=langArr["about-small6"][e],document.querySelector(".about-small6-1").innerText=langArr["about-small6-1"][e],document.querySelector(".about-small7").innerText=langArr["about-small7"][e],document.querySelector(".about-small8").innerText=langArr["about-small8"][e],document.querySelector(".read-more8").innerHTML=langArr["read-more8"][e],document.querySelector(".read-more1").innerHTML=langArr["read-more1"][e],document.querySelector(".read-more2").innerHTML=langArr["read-more2"][e],document.querySelector(".read-more3").innerHTML=langArr["read-more3"][e],document.querySelector(".read-more4").innerHTML=langArr["read-more4"][e],document.querySelector(".read-more5").innerHTML=langArr["read-more5"][e],document.querySelector(".read-more6").innerHTML=langArr["read-more6"][e],document.querySelector(".read-more7").innerHTML=langArr["read-more7"][e],document.querySelector(".cup1").innerHTML=langArr.cup1[e],document.querySelector(".cup2").innerHTML=langArr.cup2[e],document.querySelector(".t-shirt1").innerHTML=langArr["t-shirt1"][e],document.querySelector(".t-shirt2").innerHTML=langArr["t-shirt2"][e],document.querySelector(".t-shirt3").innerHTML=langArr["t-shirt3"][e],document.querySelector(".t-shirt4").innerHTML=langArr["t-shirt4"][e],document.querySelector(".pillow1").innerHTML=langArr.pillow1[e],document.querySelector(".pillow2").innerHTML=langArr.pillow2[e],document.querySelector(".pillow3").innerHTML=langArr.pillow3[e],document.querySelector(".pillow4").innerHTML=langArr.pillow4[e],document.querySelector(".calendar1").innerHTML=langArr.calendar1[e],document.querySelector(".calendar2").innerHTML=langArr.calendar2[e],document.querySelector(".calendar3").innerHTML=langArr.calendar3[e],document.querySelector(".calendar4").innerHTML=langArr.calendar4[e],document.querySelector(".puzzle1").innerHTML=langArr.puzzle1[e],document.querySelector(".puzzle2").innerHTML=langArr.puzzle2[e],document.querySelector(".puzzle3").innerHTML=langArr.puzzle3[e],document.querySelector(".puzzle4").innerHTML=langArr.puzzle4[e],document.querySelector(".puzzle5").innerHTML=langArr.puzzle5[e],document.querySelector(".puzzle6").innerHTML=langArr.puzzle6[e],document.querySelector(".puzzle7").innerHTML=langArr.puzzle7[e],document.querySelector(".puzzle8").innerHTML=langArr.puzzle8[e],document.querySelector(".puzzle9").innerHTML=langArr.puzzle9[e],document.querySelector(".binding1").innerText=langArr.binding1[e],document.querySelector(".binding2").innerText=langArr.binding2[e],document.querySelector(".binding2-1").innerText=langArr["binding2-1"][e],document.querySelector(".binding2-2").innerText=langArr["binding2-2"][e],document.querySelector(".binding3").innerText=langArr.binding3[e],document.querySelector(".binding4").innerText=langArr.binding4[e],document.querySelector(".binding4-1").innerText=langArr["binding4-1"][e],document.querySelector(".binding4-2").innerText=langArr["binding4-2"][e],document.querySelector(".binding4-3").innerText=langArr["binding4-3"][e],document.querySelector(".binding5").innerText=langArr.binding5[e],document.querySelector(".binding6").innerText=langArr.binding6[e],document.querySelector(".binding7").innerText=langArr.binding7[e],document.querySelector(".binding8").innerText=langArr.binding8[e],document.querySelector(".binding9").innerText=langArr.binding9[e],document.querySelector(".binding10").innerText=langArr.binding10[e],document.querySelector(".binding10-1").innerText=langArr["binding10-1"][e],document.querySelector(".binding11").innerText=langArr.binding11[e],document.querySelector(".binding11-1").innerText=langArr["binding11-1"][e],document.querySelector(".binding11-2").innerText=langArr["binding11-2"][e],document.querySelector(".binding11-3").innerText=langArr["binding11-3"][e],document.querySelector(".binding11-4").innerText=langArr["binding11-4"][e],document.querySelector(".binding12").innerText=langArr.binding12[e],document.querySelector(".binding13").innerText=langArr.binding13[e],document.querySelector(".binding14").innerText=langArr.binding14[e],document.querySelector(".binding15").innerText=langArr.binding15[e],document.querySelector(".binding16").innerText=langArr.binding16[e],document.querySelector(".binding18").innerText=langArr.binding18[e],document.querySelector(".binding18-1").innerText=langArr["binding18-1"][e],document.querySelector(".binding18-2").innerText=langArr["binding18-2"][e],document.querySelector(".binding18-3").innerText=langArr["binding18-3"][e],document.querySelector(".binding18-4").innerText=langArr["binding18-4"][e],document.querySelector(".binding18-5").innerText=langArr["binding18-5"][e],document.querySelector(".binding19").innerText=langArr.binding19[e],document.querySelector(".photoFr1").innerHTML=langArr.photoFr1[e],document.querySelector(".photoFr2").innerHTML=langArr.photoFr2[e],document.querySelector(".photoFr3").innerHTML=langArr.photoFr3[e],document.querySelector(".photoFr4").innerHTML=langArr.photoFr4[e],document.querySelector(".photoFr5").innerHTML=langArr.photoFr5[e],document.querySelector(".photoFr6").innerHTML=langArr.photoFr6[e],document.querySelector(".photoFr7").innerHTML=langArr.photoFr7[e],document.querySelector(".photoFr8").innerHTML=langArr.photoFr8[e],document.querySelector(".photoFr9").innerHTML=langArr.photoFr9[e],document.querySelector(".cutting1").innerHTML=langArr.cutting1[e],document.querySelector(".cutting2").innerHTML=langArr.cutting2[e],document.querySelector(".cutting3").innerHTML=langArr.cutting3[e],document.querySelector(".cutting1-1").innerHTML=langArr["cutting1-1"][e],document.querySelector(".cutting1-2").innerHTML=langArr["cutting1-2"][e],document.querySelector(".cutting1-3").innerHTML=langArr["cutting1-3"][e],document.querySelector(".mouse-mat1").innerText=langArr["mouse-mat1"][e],document.querySelector(".mouse-mat2").innerText=langArr["mouse-mat2"][e],document.querySelector(".mouse-mat3").innerText=langArr["mouse-mat3"][e],document.querySelector(".mouse-mat4").innerText=langArr["mouse-mat4"][e],document.querySelector(".mouse-mat5").innerText=langArr["mouse-mat5"][e],document.querySelector(".mouse-mat6").innerHTML=langArr["mouse-mat6"][e],document.querySelector(".mouse-mat7").innerHTML=langArr["mouse-mat7"][e],document.querySelector(".mouse-mat8").innerHTML=langArr["mouse-mat8"][e],document.querySelector(".mouse-mat9").innerHTML=langArr["mouse-mat9"][e],document.querySelector(".mouse-mat10").innerText=langArr["mouse-mat10"][e],document.querySelector(".stationery1").innerText=langArr.stationery1[e],document.querySelector(".stationery2").innerText=langArr.stationery2[e],document.querySelector(".stationery3").innerText=langArr.stationery3[e],document.querySelector(".order1-1").innerHTML=langArr["order1-1"][e],document.querySelector(".order1-2").innerHTML=langArr["order1-2"][e],document.querySelector(".order1-3").innerHTML=langArr["order1-3"][e],document.querySelector(".order1-4").innerHTML=langArr["order1-4"][e],document.querySelector(".order1-5").innerHTML=langArr["order1-5"][e],document.querySelector(".order1-6").innerHTML=langArr["order1-6"][e],document.querySelector(".payment1").innerHTML=langArr.payment1[e],document.querySelector(".payment2").innerHTML=langArr.payment2[e],document.querySelector(".payment3").innerHTML=langArr.payment3[e],document.querySelector(".payment4").innerHTML=langArr.payment4[e],document.querySelector(".payment5").innerHTML=langArr.payment5[e],document.querySelector(".payment6").innerHTML=langArr.payment6[e],document.querySelector(".payment7").innerHTML=langArr.payment7[e],document.querySelector(".payment8").innerHTML=langArr.payment8[e],document.querySelector(".payment9").innerHTML=langArr.payment9[e],document.querySelector(".payment10").innerHTML=langArr.payment10[e],document.querySelector(".payment11").innerHTML=langArr.payment11[e],document.querySelector(".payment12").innerHTML=langArr.payment12[e],document.querySelector(".payment13").innerHTML=langArr.payment13[e],document.querySelector(".payment14").innerHTML=langArr.payment14[e],document.querySelector(".payment15").innerHTML=langArr.payment15[e],document.querySelector(".payment16").innerHTML=langArr.payment16[e],document.querySelector(".payment17").innerHTML=langArr.payment17[e],document.querySelector(".payment18").innerHTML=langArr.payment18[e],document.querySelector(".payment19").innerHTML=langArr.payment19[e],document.querySelector(".payment20").innerHTML=langArr.payment20[e],document.querySelector(".payment21").innerHTML=langArr.payment21[e],document.querySelector(".payment77").innerHTML=langArr.payment77[e],document.querySelector(".contacts1").innerHTML=langArr.contacts1[e],document.querySelector(".contacts2").innerHTML=langArr.contacts2[e],document.querySelector(".contacts3").innerHTML=langArr.contacts3[e],document.querySelector(".contacts4").innerHTML=langArr.contacts4[e],document.querySelector(".contacts5").innerHTML=langArr.contacts5[e],document.querySelector(".contacts6").innerHTML=langArr.contacts6[e],document.querySelector(".contacts-time").innerHTML=langArr["contacts-time"][e],document.querySelector(".contacts-time1").innerHTML=langArr["contacts-time1"][e],document.querySelector(".contacts-time2").innerHTML=langArr["contacts-time2"][e]}function navShow(){document.body.classList.toggle("not-active")}function showBlock(e){for(var n=0;n<read.length;n++)read[n]==e.target&&(read[n].classList.add("block-hide"),showBox[n].classList.remove("show-box"))}function magic(){350<window.pageYOffset?btn.style.opacity=".6":btn.style.opacity="0"}var select=document.querySelector("select");select.addEventListener("change",changeURLLanguage),changeLanguage(),document.querySelector(".mobile-menu__checkbox").addEventListener("click",navShow);var showBox=document.querySelectorAll(".show-box"),read=document.querySelectorAll(".read-more");read.forEach(function(e){return e.addEventListener("click",showBlock)});var mask=document.querySelector(".mask");window.addEventListener("load",function(){mask.classList.add("hide"),setTimeout(function(){mask.remove()},600)}),VANTA.RINGS({el:"#header",mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1});var animItems=document.querySelectorAll("._anim-items");if(0<animItems.length){var animScroll=function(){for(var e=0;e<animItems.length;e++){var n=animItems[e],r=n.offsetHeight,t=offset(n).top,o=window.innerHeight-r/4;r>window.innerHeight&&(o=window.innerHeight-window.innerHeight/4),pageYOffset>t-o&&pageYOffset<t+r?n.classList.add("_active"):n.classList.contains("_anim-no-hide")||n.classList.remove("_active")}},offset=function(e){var n=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,t=window.pageYOffset||document.documentElement.scrollTop;return{top:n.top+t,left:n.left+r}};window.addEventListener("scroll",animScroll),setTimeout(function(){animScroll()},1e3)}var btn=document.querySelector(".go-top");window.onscroll=magic;var swiper=new Swiper(".catalog-slider",{effect:"cube",grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},autoplay:{delay:3e3},slideToClickedSlide:!0,initialSlide:0});