var playnow = document.getElementById("playnow")
var logo = document.getElementById("logo")

playnow.onclick = ()=>{
    storage()
    window.open("../html/story.html" , "_self")
}


logo.onclick = ()=>{
    window.open("../index.html" , "_self")
}

function storage(){


    let names = document.getElementById("name")
    let nicknames = document.getElementById("nickname")
    
    let obj = {
        Name: names.value,
        Nicknames: nicknames.value
    }
    
    console.log(obj)
    localStorage.setItem("Name: ",JSON.stringify(obj.Name))
    localStorage.setItem("Nickname: ",JSON.stringify(obj.Nicknames))

    // localStorage.getItem("Name")
    // localStorage.getItem("Nickname")

    let input1 = localStorage.getItem("Name: ")
    let input2 = localStorage.getItem("Nickname: ")

    console.log(input1);
    console.log(input2);
}


