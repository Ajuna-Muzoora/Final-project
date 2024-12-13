// go the if statement idea from classmate
const findElement = document.getElementById("find");

if (findElement) {
    findElement.addEventListener("click",
        function(){
            window.location.href = "start.html";
        }
    );    
}


//document.getElementById("find2").addEventListener("click", function () {
  //  window.location.href = "index.html"
//})
const findIt = document.getElementById("find2");

if (findIt) {
    findIt.addEventListener("click",
        function(){
            window.location.href = "index.html";
        }
    );    
}

//document.getElementById("findend").addEventListener("click", function () {
   // window.location.href = "index.html"
//})
// got help from geeksk for geeks with this script
let count = 0;
        let btn = document.getElementById("cookie");
        let disp = document.getElementById("display");
         
        btn.onclick = function () {
                    count++;
        disp.innerHTML = count;
        }
document.getElementById("grinch").addEventListener("click", function () {
    count = 0;
    disp.innerHTML = count;
})
const findHome = document.getElementById("findend");

if (findHome) {
    findHome.addEventListener("click",
        function(){
            window.location.href = "index.html";
        }
    );    
}










