window.onload = () => {
    let hamburger = document.getElementById("hamburger")
    let menu = document.getElementById("menu")
    let closer = document.getElementById("closer")

    hamburger.onclick = () => {
        hamburger.classList.add('open')
        menu.classList.add('open')
    }


    closer.onclick = () => {
        hamburger.classList.remove('open')
        menu.classList.remove('open')
    }
}
