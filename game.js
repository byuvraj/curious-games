document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#dark').onclick = function () {
      if (document.querySelector("#dark").checked === false){
        alert("Page is already opened in dark theme")
        document.querySelector("#dark").checked = true
      };
      localStorage.setItem("theme", "dark");
      document.querySelector('#bright').checked = false;
      document.querySelector('body').style.backgroundColor = '#1a1a1a';
      document.querySelector('body').style.color = 'white';
      var allDivs = document.querySelectorAll('p');
      for(var i = 0; i < allDivs.length; i++){
        allDivs[i].style['color'] = 'white';
      };
    return true
    };
    document.querySelector('#bright').onclick = function (){
      if (document.querySelector("#bright").checked === false){
        alert("Page is already opened in Default theme")
        document.querySelector("#bright").checked = true
      };
      localStorage.setItem("theme", "bright");
      document.querySelector('#dark').checked = false;
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('body').style.color = 'black';
      var allDivs = document.querySelectorAll('p');
      for(var i = 0; i < allDivs.length; i++){
        allDivs[i].style['color'] = 'black';
      };
    return true
    };
    function dark(){
    document.querySelector('#bright').checked = false;
      document.querySelector('body').style.backgroundColor = '#1a1a1a';
      document.querySelector('body').style.color = 'white';
      var allDivs = document.querySelectorAll('p');
      for(var i = 0; i < allDivs.length; i++){
        allDivs[i].style['color'] = 'white';
      };
    return true
  };
  if (localStorage.getItem("theme")==="dark"){
    dark();
    document.querySelector("#dark").checked = true;
  };
})