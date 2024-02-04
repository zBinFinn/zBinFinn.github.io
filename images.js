let images = document.querySelectorAll(".img-description")
images.forEach((image) => {
    image.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    })
})