// start password 
let pass_btn = document.querySelector(".pass_btn")
let show = document.getElementById("show")
let copy = document.querySelector(".copy")

pass_btn.addEventListener("click" , (e) =>{
    let upper = document.getElementById("upper").checked
    let lower = document.getElementById("lower").checked
    let number = document.getElementById("number").checked
    let symb = document.getElementById("symb").checked
    let lengthPass = document.querySelector(".length").value

    let chars = ''

    if(upper){
        chars += `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    }

    if(lower){
        chars += `abcdefghijklmnopqrstuwvxyz`
    }

    if(number){
        chars += `1234567890`
    }

    if(symb){
        chars += `@#$%^&*()_-!.\\`
    }
    
    if(chars == ""){
        alert("at leaste one type of input")
        return ;
    }
    
    let randPassword = ''

    for(let i = 0 ; i <lengthPass ; i++){
        let rnandomChar = Math.floor(Math.random() * chars.length)
        randPassword += chars[rnandomChar]

    }
    
    show.value = randPassword
})

copy.onclick = () =>{
    navigator.clipboard.writeText(show.value).
    then(() =>{
        alert("Password copied")
    }).catch(error =>{
        alert(error)
    })

}



