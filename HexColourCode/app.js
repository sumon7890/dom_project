window.onload = () =>{
    generetorRGB ()
}

function generetorRGB (){
    const root = document.getElementById('root')
    const Btn = document.getElementById('Btn')
    const output = document.getElementById('outputValue')

    Btn.addEventListener('click', () =>{

        const bgColour = chageRgbColour()
        root.style.backgroundColor = bgColour;
        output.value = bgColour
    })
}



function chageRgbColour(){
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const yellow = Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${yellow.toString(16)}`
}