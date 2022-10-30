//variables

// color mode
{
    var colorTheme = localStorage.getItem("colorTheme")
    var color = document.querySelector(':root')
    function changeColor(color) {
        localStorage.setItem("colorTheme", color)
    }
    if (colorTheme = "dark") {
        
    } else if (colorTheme = "light") {
        color.getElementsByClassName.setProperty('--main_color', 'rgb(36, 36, 36)')
        color.getElementsByClassName.setProperty('--background_color', 'white')
    }
}