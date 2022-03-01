

window.onload = () =>{
    generetorRGB ()
}

function generetorRGB (){

    const root = document.getElementById('root')
    const handleChange = document.getElementById('handleChange')

    handleChange.addEventListener('click', () =>{

        const bgColour = chageRgbColour()
        root.style.backgroundColor = bgColour;
    })
}



function chageRgbColour(){

    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const yellow = Math.floor(Math.random() * 255)

    return `rgb(${red}, ${green}, ${yellow})`
}

