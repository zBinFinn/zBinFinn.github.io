let start = document.getElementById('start');
window.addEventListener('scroll', () => {
    let height = window.innerHeight;
    let scrollDist = window.scrollY;
    start.style.right = scrollDist * height * 0.003 + 'px'
    start.style.top = scrollDist * 1 + 'px'
});

let bw_category_image = document.getElementById("photo-1")
bw_category_image.addEventListener("click", () => {
    location.assign("example_photos_blackwhite.html");
})

let c_category_image = document.getElementById("photo-2")
c_category_image.addEventListener("click", () => {
    location.assign("example_photos_color.html");
})

let insta_link_image = document.getElementById("instagram_link")
insta_link_image.addEventListener("click", () => {
    location.assign("https://www.instagram.com")
})

let images = document.querySelectorAll(".photo")
images.forEach((image) => {
    image.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    })
})