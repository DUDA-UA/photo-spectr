"use strict";function changeURLLanguage(){var e=select.value;location.href=window.location.pathname+"#"+e,location.reload()}function changeLanguage(){var e=window.location.hash;for(var r in e=e.substr(1),allLang.includes(e)||(location.href=window.location.pathname+"#ru",location.reload()),select.value=e,document.querySelector(".cups-page1").innerHTML=langArr["cups-page1"][e],document.querySelector(".cups-page2").innerHTML=langArr["cups-page2"][e],document.querySelector(".cups-page3").innerHTML=langArr["cups-page3"][e],document.querySelector(".cups-page4").innerHTML=langArr["cups-page4"][e],document.querySelector(".cups-page5").innerHTML=langArr["cups-page5"][e],document.querySelector(".cups-page6").innerHTML=langArr["cups-page6"][e],document.querySelector(".cups-page7").innerHTML=langArr["cups-page7"][e],document.querySelector(".cups-page8").innerHTML=langArr["cups-page8"][e],document.querySelector(".cups-img").innerHTML=langArr["cups-img"][e],document.querySelector(".cups-buy").innerHTML=langArr["cups-buy"][e],document.querySelector(".cups-img1").innerHTML=langArr["cups-img1"][e],document.querySelector(".cups-buy1").innerHTML=langArr["cups-buy1"][e],document.querySelector(".cups-img2").innerHTML=langArr["cups-img2"][e],document.querySelector(".cups-buy2").innerHTML=langArr["cups-buy2"][e],document.querySelector(".cups-img3").innerHTML=langArr["cups-img3"][e],document.querySelector(".cups-buy3").innerHTML=langArr["cups-buy3"][e],document.querySelector(".cups-img4").innerHTML=langArr["cups-img4"][e],document.querySelector(".cups-buy4").innerHTML=langArr["cups-buy4"][e],document.querySelector(".cups-img5").innerHTML=langArr["cups-img5"][e],document.querySelector(".cups-buy5").innerHTML=langArr["cups-buy5"][e],document.querySelector(".cups-img6").innerHTML=langArr["cups-img6"][e],document.querySelector(".cups-buy6").innerHTML=langArr["cups-buy6"][e],document.querySelector(".cups-img7").innerHTML=langArr["cups-img7"][e],document.querySelector(".cups-buy7").innerHTML=langArr["cups-buy7"][e],document.querySelector(".cups-img8").innerHTML=langArr["cups-img8"][e],document.querySelector(".cups-buy8").innerHTML=langArr["cups-buy8"][e],document.querySelector(".cups-img10").innerHTML=langArr["cups-img10"][e],document.querySelector(".cups-buy10").innerHTML=langArr["cups-buy10"][e],document.querySelector(".cups-img11").innerHTML=langArr["cups-img11"][e],document.querySelector(".cups-img11-1").innerHTML=langArr["cups-img11-1"][e],document.querySelector(".cups-buy11").innerHTML=langArr["cups-buy11"][e],document.querySelector(".cups-img12").innerHTML=langArr["cups-img12"][e],document.querySelector(".cups-buy12").innerHTML=langArr["cups-buy12"][e],document.querySelector(".cups-img13").innerHTML=langArr["cups-img13"][e],document.querySelector(".cups-buy13").innerHTML=langArr["cups-buy13"][e],document.querySelector(".cups-img14").innerHTML=langArr["cups-img14"][e],document.querySelector(".cups-buy14").innerHTML=langArr["cups-buy14"][e],document.querySelector(".cups-buy15").innerHTML=langArr["cups-buy15"][e],document.querySelector(".cup-clr").innerHTML=langArr["cup-clr"][e],document.querySelector(".cup-box1").innerText=langArr["cup-box1"][e],document.querySelector(".cup-box2").innerText=langArr["cup-box2"][e],document.querySelector(".cup-box3").innerText=langArr["cup-box3"][e],document.querySelector(".cup-box4").innerText=langArr["cup-box4"][e],document.querySelector(".cup-gallery").innerHTML=langArr["cup-gallery"][e],document.querySelector(".cup-order1").innerHTML=langArr["cup-order1"][e],document.querySelector(".cup-order2").innerHTML=langArr["cup-order2"][e],document.querySelector(".cup-order3").innerHTML=langArr["cup-order3"][e],document.querySelector(".cup-order4").innerHTML=langArr["cup-order4"][e],document.querySelector(".cup-order5").innerHTML=langArr["cup-order5"][e],document.querySelector(".cup-order6").innerHTML=langArr["cup-order6"][e],document.querySelector(".cup-footer").innerHTML=langArr["cup-footer"][e],langArr){var u=document.querySelector(".lng-"+r);u&&(u.innerHTML=langArr[r][e])}}var select=document.querySelector("select"),allLang=["ru","ua"];select.addEventListener("change",changeURLLanguage),localStorage.setItem("body",document.body),changeLanguage();var mask=document.querySelector(".mask");window.addEventListener("load",function(){mask.classList.add("hide"),setTimeout(function(){mask.remove()},600)});