let theme = document.querySelector("#theme");
let hdr = document.querySelector(".header");
let page = document.querySelector(".main");
let flag = true;

theme.addEventListener("click", () => {
   if (flag) {
      theme.innerHTML = '<i class="ri-sun-line"></i>';
      document.querySelector("nav").style.backgroundColor = "rgb(0, 186, 219)";
      document.querySelector("footer").style.backgroundColor = "rgb(0, 186, 219)";
      page.style.backgroundImage = "url('HomeBlack.png')";
      flag = false;
   }
   else {
      theme.innerHTML = '<i class="ri-contrast-2-line"></i>';
      document.querySelector("nav").style.backgroundColor = "black";
      document.querySelector("footer").style.backgroundColor = "black";
      page.style.backgroundImage = "url('Home.png')";
      flag = true;
   }
})