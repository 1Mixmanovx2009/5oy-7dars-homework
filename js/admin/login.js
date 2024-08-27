let elLoginForm = document.querySelector(".login-form")
const elRegisterForm = JSON.parse(localStorage.getItem("isRegisterd"))

elLoginForm.addEventListener("submit", function(e){
    e.preventDefault()
    const data = {
        username:e.target.username.value,
        password:e.target.password.value
    }
    
    if(elRegisterForm) {
        if (data.username == elRegisterForm.NewUsername && data.password == elRegisterForm.NewPassword) {
            elLoginForm.lastElementChild.innerHTML = `
                <img class="mx-auto scale-[1.3]" src="./images/loading.png" alt="" width="40px" height="40px">        
                `
                localStorage.setItem("loginData", JSON.stringify(data))
                setTimeout(() => location.pathname = "../../admin.html",1000)
        }
        
        else {
            alert("Xato ma'lumot kiritingiz")
        }
    }
    
    else {
        if (data.username == "Xojiakbar" && data.password == "2009") {
            elLoginForm.lastElementChild.innerHTML = `
                <img class="mx-auto scale-[1.3]" src="./images/loading.png" alt="" width="40px" height="40px">        
                `
                localStorage.setItem("loginData", JSON.stringify(data))
                setTimeout(() => location.pathname = "../../admin.html",1000)

        }
        
        else {
            alert("Xato ma'lumot kiritingiz")
        }
    }
})