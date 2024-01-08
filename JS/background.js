const pics = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img7.jpeg",
    "img8.jpeg",
    "img9.jpeg",
    "img10.jpeg"
]

const background = document.createElement("img")
background.src = `img/${pics[Math.floor(Math.random() * pics.length)]}`
background.classList.add("background")
document.body.appendChild(background)