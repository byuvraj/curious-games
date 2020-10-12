document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("login").onclick = function(){
        if (document.querySelector("#mail").value === ""){
            alert("Email field is blank");
        }else if (document.querySelector("#password").value ===""){
            alert("Please Enter password");
        }else{
            alert("success");
        };
    };
    document.querySelector("#login").disabled = true;
    document.querySelector("#mail").onkeyup = function(){
        if (document.querySelector("#mail").value.length >0 ){
            document.querySelector("#login").disabled = false;
        }else{
            document.querySelector("#login").disabled = true;
        };
    };
});