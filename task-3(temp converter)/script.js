

let a = document.querySelector(".takeval");
let given = document.querySelector("#def_unit");
let opt = document.querySelector("#to_unit");
let display = document.querySelector(".showval");


let temperature = () =>{
    if (given.value=="Fahrenheit" && opt .value == "Celsius" ){
        console.log(a, "F to C", opt.value)
                let C = (parseFloat(a.value)-32)*(5/9)

        display.innerHTML = C.toFixed(2) + " °C"
    }

    else if (given.value=="Fahrenheit" && opt .value == "Kelvin" ){
        console.log(a, "F to K", opt.value)
                let K = (parseFloat(a.value) - 32) * 5/9 + 273.15

        display.innerHTML = K.toFixed(2) + " K"
    }

    else if(given.value=="Celsius" && opt .value == "Fahrenheit" ){
        console.log(a, "C to F", opt.value)
                let F = parseFloat(a.value)* (9/5)+32

        display.innerHTML = F.toFixed(2) + " °F"
       
    }
    else if(given.value=="Celsius" && opt .value == "Kelvin" ){
        console.log(a, "C to K", opt.value)
                let K = (parseFloat(a.value) + 273.15)

        display.innerHTML = K.toFixed(2) + " K"
       
    }

    else if(given.value=="Kelvin" && opt .value == "Celsius" ){
        console.log(a, "K to C", opt.value)
                let C = (parseFloat(a.value) - 273.15)

        display.innerHTML = C.toFixed(2) + " °C"
       
    }

    else if(given.value=="Kelvin" && opt .value == "Fahrenheit" ){
        console.log(a, "K to F", opt.value)
                let F = (parseFloat(a.value) - 273.15) * 9/5 + 32

        display.innerHTML = F.toFixed(2) + " °F"
       
    }

    else{
        alert("Give the inputs properly....")
    }
}