let elRegisterForm = document.querySelector(".register-form")

elRegisterForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const newData = {
        NewUsername:e.target.username.value,
        NewPassword:e.target.password.value,
    }
    elRegisterForm.lastElementChild.innerHTML = `
    <img class="mx-auto scale-[1.3]" src="./images/loading.png" alt="" width="40px" height="40px"> `
    
    localStorage.setItem("isRegisterd", JSON.stringify(newData))   
    setTimeout(() => location.pathname = "/", 1000) 
})