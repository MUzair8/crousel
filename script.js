
let myImg = ["imgs/arn.jpg", "imgs/arnn.jpg", "imgs/arnold.jpg", "imgs/b0f05acad8403908627b3657a6e3004f.jpg"
]


let currentIndex = 0;
let totalImg = myImg.length;
let img = document.querySelector("#img")
let nextBtn = document.querySelector("#nextBtn")
let prevBtn = document.querySelector("#prevBtn")

function showImage() {
    img.src = myImg[currentIndex];

}
nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalImg
    showImage()
});

prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalImg) % totalImg
    showImage()
});

showImage()