class UserAdd{
    constructor(login,password,email,phoneNbr){
        this.login = login;
        this.password = password;
        this.email = email;
        this.phoneNbr = phoneNbr;
    }
}

let users = [];

window.addEventListener("DOMContentLoaded", () =>{
    form = document.forms[0];
    let i = 0;
    let canCreate = true;
    form.addEventListener("submit",(event) =>{
        event.preventDefault();
        login = form.querySelector("#userLoginRegister").value;
        password = form.querySelector("#userEmailRegister").value;
        email = form.querySelector("#userPasswordRegister").value;
        phoneNbr = form.querySelector("#userPhonenbrRegister").value;
        users.forEach(element => {
            if(element.login == login){
                alert("Login był już użyty")
                canCreate = false;
            }else if(element.email == email){
                alert("Email był już użyty")
                canCreate = false
            }else{
                canCreate = true
            }
        });
        if(canCreate){
            alert("Konto o nazwie: "+ login +" zostało utworzone")
            users.push(new UserAdd(login,password,email,phoneNbr));
        }  
    })
})
