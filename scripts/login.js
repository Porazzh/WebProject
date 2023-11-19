class UserAdd{
    constructor(login,password,email,phoneNbr){
        login: this.login;
        password: this.password;
        email: this.email;
        phoneNbr: this.phoneNbr
    }
}
u1 = new UserAdd("Janek","jasiek1234","jasiu@gmail.com",123456789)
window.addEventListener("DOMContentLoaded", () =>{
    form = document.forms[0];
    usrLog = document.querySelector("#userLogin").value;
    usrPassword = document.querySelector("#userPassword").value;
    form.addEventListener("submit",(event) =>{
        alert(usrLog)
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