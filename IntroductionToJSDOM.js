const yazi1=document.getElementsByTagName("p") // ETİKETLERİ ALIR
console.log(yazi1)
yazi1[0].innerHTML="Merhaba"
yazi1[1].innerText="Ben Yasin"
const yazi2=document.getElementById("pTag") //SADECE ID OLANLARI ALIR
console.log(yazi2)
yazi2.innerText="HEEY"
const yazi3=document.getElementsByClassName("spanClass") //SINIFARI ALIR
yazi3[1].innerHTML="<br> Bu bir span <br>"
var yazi4=document.querySelector(".spanClass") //İLK KARŞILAŞTIĞINI ALIR
yazi4.innerHTML="Bu ilk span <br>"
let yazi5=document.querySelector("p")
yazi5.innerText="Bu ilk p etiketi"
const yazi6=document.querySelectorAll(".spanClass") //HEPSİNİ ALIR
yazi6[0].innerHTML="<br> This is spanClasses"