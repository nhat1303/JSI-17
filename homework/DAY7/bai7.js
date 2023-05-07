let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let user = document.getElementById("userbox")
let mail = document.getElementById("emailbox")
let pass = document.getElementById("passbox")

let imgDiv = document.querySelector('.avatar-box')
let file = document.querySelector('#file')
let img = document.querySelector('#photo')
let uploadBtn = document.querySelector('#uploadAvatar')


    document.getElementById("btn").addEventListener("click", function(e){
        e.preventDefault()
    
        if( username.value != ""&& email.value != "" && password.value != ""  ){
            newUser={
                Username : username.value,
                email : email.value,
                password : password.value,
    
            }


            localStorage.setItem("account", JSON.stringify(newUser))
            user.innerHTML="Username : " +newUser.Username
            mail.innerHTML="Email : "+newUser.email
            pass.innerHTML="Password: "+ newUser.password
            
            username.value=""
            email.value=""
            password.value=""

        }
    }
    
    )






    file.addEventListener("change", function(){
        const choosedFile = this.files[0]
    
        if ( choosedFile){
            const reader = new FileReader();
    
            reader.addEventListener("load", function(){
                img.setAttribute('src', reader.result)
            })
    
            reader.readAsDataURL(choosedFile)
        }
    })
