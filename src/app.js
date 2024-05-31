const token = localStorage.getItem('token');
const login = document.getElementById('login');
const logout = document.getElementById('logout');

window.addEventListener("load", () => {    
    if (token != ""){
        login.style.display= "none";
        logout.style.display= "inline-block";
    } 
    else{
        login.style.display="inline-block";
        logout.style.display="none";
    }
})

document.getElementById("logout").addEventListener("click", ()=>{
localStorage.setItem("token", "");
window.location.href = 'recepti.html';
})