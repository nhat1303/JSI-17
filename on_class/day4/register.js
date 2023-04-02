const regContainer = document.createElement("div")
const title = document.createElement("h3")
title.innerHTML = "Create your account"
regContainer.classList.add("box")

const email = document.createElement("input")
email.placeholder = "Enter your email"



const password = document.createElement("input")
password.placeholder = "Enter your password"
password.setAttribute("type", "password")

const name = document.createElement("input")
name.placeholder = "Enter your name"


const confirm_password = document.createElement("input")
confirm_password.placeholder = "Enter your confirm password"
confirm_password.setAttribute("type", "password")

const submit = document.createElement("input")
submit.type = "submit"
submit.value = "Submit"


const login_link = document.createElement("a")
login_link.innerHTML = "Already have an account ?   "

regContainer.appendChild(title)
regContainer.appendChild(email)
regContainer.appendChild(name)
regContainer.appendChild(password)
regContainer.appendChild(confirm_password)
regContainer.appendChild(login_link)
regContainer.appendChild(submit)



const form = document.createElement("form")
form.appendChild(regContainer)
const app = document.getElementById("boxx")
app.appendChild(form)

app.setAttribute("style", "display:flex; flex-direction : column")