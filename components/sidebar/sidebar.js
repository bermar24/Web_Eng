// Get the button
let scrollToTop = document.getElementById("scrollToTop");

// Show button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
};

// Scroll back to the top when clicking the button
scrollToTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
