const colors =[
    "Aqua","Black","Blue","BlueViolet","BlueViolet","DarkBlue","DarkGreen","DarkMagenta"]
// const cte = document.getElementById('btn')
const color = document.querySelector(".color")

document.getElementById("btn").addEventListener("click",function(){
    const randomnumber = getrandom(); 
    document.body.style.backgroundColor = colors[randomnumber]
    color.textContent = colors[randomnumber]
    console.log(getrandom())
}) 

function getrandom(){
    return Math.floor(Math.random()*colors.length)
    
}