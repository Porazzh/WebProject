
//login
window.addEventListener("DOMContentLoaded", () =>{
    form = document.forms[0];
    form.addEventListener("submit",(event) =>{
        usrLog = document.querySelector("#userLogin").value;
        usrPassword = document.querySelector("#userPassword").value;
        event.preventDefault();
        if(u1.login = usrLog)
        {
            if(u1.password = usrPassword){
                alert("zalogowano")
            }else{
                alert("zle haslo")
            }
        }else{
            alert("zly login")
        }
    })
})