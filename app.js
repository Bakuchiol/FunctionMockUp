let topContainer = [
    // shoe
    "https://media.gucci.com/content/HeroBigStandard_3200x1520/1685625716/HeroBigStandard_Summer-Stories-June6-sandals_001_Default.jpg",
    // suave man
    "https://media.gucci.com/content/HeroBigStandard_3200x1520/1685638168/HeroBigStandard_MLB-June23-010_001_Default.jpg",
    // suave man by the pool
    "https://media.gucci.com/content/HeroBigStandard_3200x1520/1684764918/HeroBigStandard_Summer-stories-2023-13_001_Default.jpg"

    ]

let handBags = [
    // wristlet
    "https://media.gucci.com/style/Transparent_Center_0_0_730x490/1675273568/696009_AABY7_2801_001_071_0025_Light.png",
    // belt bag
    "https://media.gucci.com/style/Transparent_Center_0_0_730x490/1681488941/752597_FACFW_8920_001_077_0000_Light.png"
]

const promos = document.querySelector('.promoContainer');
const nav = document.querySelector('.mainNav');
const header = document.querySelector('.list');
const prayer = document.querySelector('.gucciLogo');
const show = document.querySelector('.gagaBox')


// solid color scroll -- take out header & promo
window.addEventListener('scroll', () => {
    if(window.scrollY > 120) {
        promos.style.display ="none"
        nav.style.display = "none";
        header.classList.add('navBarScroll');
    } else if(window.scrollY <= 120) {
        header.classList.remove('navBarScroll')
        nav.style.display = "flex"
        promos.style.display = "block"
    }
});

// click logo -- lady gaga gucci gif
const gaga = () => {
    show.classList.toggle('gagaGif')
}

// frame around editorial - spin
let frame = ""