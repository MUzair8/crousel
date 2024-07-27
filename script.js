
let myImg=[ "file:///C:/Users/AL%20HABIB%20TRADE/Downloads/Arnold_Schwarzenegger_1974.jpg","file:///C:/Users/AL%20HABIB%20TRADE/Downloads/b0f05acad8403908627b3657a6e3004f.jpg", "file:///C:/Users/AL%20HABIB%20TRADE/Downloads/arn.jpg","file:///C:/Users/AL%20HABIB%20TRADE/Downloads/arnn.jpg",
    "file:///C:/Users/AL%20HABIB%20TRADE/Downloads/sddefault.jpg"
]


let currentIndex=0;
let totalImg = myImg.length;
let img = document.querySelector("#img")
let nextBtn = document.querySelector("#nextBtn")
let prevBtn = document.querySelector("#prevBtn")

function showImage(){
img.src = myImg[currentIndex];

}
nextBtn.addEventListener("click", function(){
    currentIndex=(currentIndex + 1 ) %totalImg
    showImage()
});

prevBtn.addEventListener("click", function(){
    currentIndex=(currentIndex - 1 + totalImg ) %totalImg
    showImage()
});

showImage()