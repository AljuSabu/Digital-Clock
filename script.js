const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const section = document.querySelector("#section")

let displayTime =()=>{
    let date = new Date()
    let hrs = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let hrsForsection = hrs

    if(hrs==0){
        hrs = 12
    }else if(hrs>12){
        hrs = hrs - 12
    }

    if(hrsForsection>=12){
        section.innerHTML = "PM" 
    }else{
        section.innerHTML = "AM"
    }

    if(min<10){
        min = "0"+ min
    }

    if(sec<10){
        sec = "0"+ sec
    }

    hours.innerHTML = hrs
    minutes.innerHTML = min
    seconds.innerHTML = sec

}
setInterval(displayTime,10)
