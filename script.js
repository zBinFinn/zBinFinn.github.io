let start = document.getElementById('start');
window.addEventListener('scroll', () => {
    let height = window.innerHeight;
    let scrollDist = window.scrollY;
    start.style.right = scrollDist * height * 0.003 + 'px'
    start.style.top = scrollDist * 1 + 'px'
});