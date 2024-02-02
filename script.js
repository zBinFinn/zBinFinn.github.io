let start = document.getElementById('start');
window.addEventListener('scroll', () => {
    let height = window.innerHeight;
    let scrollDist = window.scrollY;
    start.style.right = scrollDist * height * 0.003 + 'px'
    start.style.top = scrollDist * 1 + 'px'
});

let bw_category_image = document.getElementById("photo-1")
bw_category_image.addEventListener("click", () => {
    location.replace("./example_photos_blackwhite.html");
})

let c_category_image = document.getElementById("photo-2")
c_category_image.addEventListener("click", () => {
    location.replace("./example_photos_color.html");
})