"use strict";function changeURLLanguage(){var r=select.value;location.href=window.location.pathname+"#"+r,location.reload()}function changeLanguage(){var r=window.location.hash;for(var e in"ru"==(r=r.substr(1))?(localStorage.setItem("local","ru"),r=localStorage.getItem("local"),location.href=window.location.pathname+"#ru"):(localStorage.setItem("local","ua"),r=localStorage.getItem("local"),location.href=window.location.pathname+"#ua"),select.value=r,document.querySelector(".shirt1").innerHTML=langArr.shirt1[r],document.querySelector(".shirt2").innerHTML=langArr.shirt2[r],document.querySelector(".shirt3").innerHTML=langArr.shirt3[r],document.querySelector(".shirt4").innerHTML=langArr.shirt4[r],document.querySelector(".shirt4-1").innerHTML=langArr["shirt4-1"][r],document.querySelector(".shirt5").innerHTML=langArr.shirt5[r],document.querySelector(".shirt6").innerHTML=langArr.shirt6[r],document.querySelector(".shirt7").innerHTML=langArr.shirt7[r],document.querySelector(".shirt8").innerText=langArr.shirt8[r],document.querySelector(".shirt9").innerText=langArr.shirt9[r],document.querySelector(".shirt10").innerText=langArr.shirt10[r],document.querySelector(".shirt11").innerHTML=langArr.shirt11[r],document.querySelector(".shirt12").innerText=langArr.shirt12[r],document.querySelector(".shirt13").innerText=langArr.shirt13[r],document.querySelector(".shirt14").innerHTML=langArr.shirt14[r],document.querySelector(".shirt17").innerText=langArr.shirt17[r],document.querySelector(".shirt18").innerText=langArr.shirt18[r],document.querySelector(".shirt19").innerText=langArr.shirt19[r],document.querySelector(".shirt20").innerText=langArr.shirt20[r],document.querySelector(".shirt21").innerHTML=langArr.shirt21[r],document.querySelector(".shirt22").innerHTML=langArr.shirt22[r],document.querySelector(".shirt23").innerText=langArr.shirt23[r],document.querySelector(".shirt24").innerHTML=langArr.shirt24[r],document.querySelector(".shirt27").innerText=langArr.shirt27[r],document.querySelector(".shirt28").innerText=langArr.shirt28[r],document.querySelector(".shirt29").innerText=langArr.shirt29[r],document.querySelector(".shirt30").innerText=langArr.shirt30[r],document.querySelector(".shirt31").innerHTML=langArr.shirt31[r],document.querySelector(".shirt32").innerText=langArr.shirt32[r],document.querySelector(".shirt33").innerText=langArr.shirt33[r],document.querySelector(".shirt34").innerHTML=langArr.shirt34[r],document.querySelector(".color-shirt1").innerText=langArr["color-shirt1"][r],document.querySelector(".color-shirt2").innerText=langArr["color-shirt2"][r],document.querySelector(".color-shirt3").innerHTML=langArr["color-shirt3"][r],document.querySelector(".color-shirt4").innerHTML=langArr["color-shirt4"][r],document.querySelector(".color-shirt5").innerHTML=langArr["color-shirt5"][r],document.querySelector(".shirt-ukr1").innerHTML=langArr["shirt-ukr1"][r],document.querySelector(".shirt-size1").innerText=langArr["shirt-size1"][r],document.querySelector(".shirt-size2").innerText=langArr["shirt-size2"][r],document.querySelector(".shirt-size3").innerHTML=langArr["shirt-size3"][r],document.querySelector(".shirt-size4").innerHTML=langArr["shirt-size4"][r],document.querySelector(".shirt-size5").innerHTML=langArr["shirt-size5"][r],document.querySelector(".shirt-size6").innerHTML=langArr["shirt-size6"][r],document.querySelector(".shirt-size7").innerHTML=langArr["shirt-size7"][r],document.querySelector(".shirt-size8").innerHTML=langArr["shirt-size8"][r],document.querySelector(".shirt-size9").innerHTML=langArr["shirt-size9"][r],document.querySelector(".shirt-ukr2").innerHTML=langArr["shirt-ukr2"][r],document.querySelector(".for-men1").innerText=langArr["for-men1"][r],document.querySelector(".for-men2").innerHTML=langArr["for-men2"][r],document.querySelector(".for-men3").innerHTML=langArr["for-men3"][r],document.querySelector(".for-men4").innerHTML=langArr["for-men4"][r],document.querySelector(".for-men5").innerHTML=langArr["for-men5"][r],document.querySelector(".for-men6").innerHTML=langArr["for-men6"][r],document.querySelector(".for-men7").innerHTML=langArr["for-men7"][r],document.querySelector(".for-men8").innerHTML=langArr["for-men8"][r],document.querySelector(".shirt-ukr3").innerHTML=langArr["shirt-ukr3"][r],document.querySelector(".for-women1").innerText=langArr["for-women1"][r],document.querySelector(".for-women2").innerHTML=langArr["for-women2"][r],document.querySelector(".for-women3").innerHTML=langArr["for-women3"][r],document.querySelector(".for-women4").innerHTML=langArr["for-women4"][r],document.querySelector(".for-women5").innerHTML=langArr["for-women5"][r],document.querySelector(".for-women6").innerHTML=langArr["for-women6"][r],document.querySelector(".for-women7").innerHTML=langArr["for-women7"][r],document.querySelector(".for-women8").innerHTML=langArr["for-women8"][r],document.querySelector(".shirt-size__footer").innerText=langArr["shirt-size__footer"][r],document.querySelector(".shirt-order1").innerHTML=langArr["shirt-order1"][r],document.querySelector(".shirt-order2").innerHTML=langArr["shirt-order2"][r],document.querySelector(".shirt-order3").innerHTML=langArr["shirt-order3"][r],document.querySelector(".shirt-order4").innerHTML=langArr["shirt-order4"][r],document.querySelector(".shirt-order5").innerHTML=langArr["shirt-order5"][r],document.querySelector(".shirt-order6").innerHTML=langArr["shirt-order6"][r],document.querySelector(".shirt-footer").innerHTML=langArr["shirt-footer"][r],langArr){var n=document.querySelector(".lng-"+e);n&&(n.innerHTML=langArr[e][r])}}function readShirt1(){readShirt.style.display="none",itemShirt.forEach(function(r){return r.classList.add("card-show")})}var select=document.querySelector("select"),allLang=["ru","ua"];select.addEventListener("change",changeURLLanguage),changeLanguage();var mask=document.querySelector(".mask");window.addEventListener("load",function(){mask.classList.add("hide"),setTimeout(function(){mask.remove()},600)}),window.onload=function(){document.querySelector(".color-list").addEventListener("click",function(r){if("color-list__item"==r.target.className)for(var e=r.target.getAttribute("data-tab"),n=document.getElementsByClassName("color-img__item"),t=0;t<n.length;t++)n[t].style.display=e==t?"block":"none"})};var readShirt=document.querySelector(".read-moreShirt1"),itemShirt=document.querySelectorAll(".show-shirt");readShirt.addEventListener("click",readShirt1);