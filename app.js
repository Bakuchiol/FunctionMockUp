let topContainer = [
    // shoe
    "https://media.gucci.com/content/HeroBigStandard_3200x1520/1685625716/HeroBigStandard_Summer-Stories-June6-sandals_001_Default.jpg",
    // suave man
    "https://media.gucci.com/content/HeroBigStandard_3200x1520/1685638168/HeroBigStandard_MLB-June23-010_001_Default.jpg",
    // suave man by the pool
    "https://media.gucci.com/content/HeroBigStandard_3200x1520/1684764918/HeroBigStandard_Summer-stories-2023-13_001_Default.jpg"

    ]

const promos = document.querySelector('.promoContainer');
const nav = document.querySelector('.mainNav');
const header = document.querySelector('.list');
const prayer = document.querySelector('.gucciLogo');
const show = document.querySelector('.gagaBox')


// solid color scroll -- take out header & promo
// 1. FUNCTION
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
// 1. TOGGLE
const gaga = () => {
    show.classList.toggle('gagaGif')
}

// frame around editorial - spin
const frame = document.querySelector('.frame')

// show frame when poke bird
// 2. TOGGLE
const showFrame = () => {
    frame.classList.toggle('spinFrame')
}

const stop = document.querySelector('spin');
const spinner = document.querySelector('.spinSpin');
const bubble = document.querySelector('.bubble')

// 2. FUNCTION
// stop/pause spinning when face poked
const twirl = () => {
    spinner.classList.toggle('spinSpin')
}

// 3. FUNCTION
// make bubble to stop jiggling when clicked
const jiggle = document.querySelector('.bubbleJiggle')
const stopMoving = () => {
    jiggle.classList.toggle('bubbleJiggle')
}

// 4. FUNCTION
// change gifs
let memes = [
    //0 flowers
    "https://img.buzzfeed.com/buzzfeed-static/static/2021-07/30/16/asset/7014576775aa/anigif_sub-buzz-4186-1627661817-7.gif",
    //1 dancing
    "https://media1.giphy.com/media/6huOWH3TNWVheHWRSW/giphy.gif?cid=6c09b9524v4go3m7yq6adgxd5h0xjyxn8si9o8cpjrrd9k6o&ep=v1_stickers_related&rid=giphy.gif&ct=s",
    //2 gaga
    "https://images.milledcdn.com/2019-04-03/QZXh9_Y9FQBzsju9/SC5t6VSMmt8J.gif",
    // vibes
    "https://i.giphy.com/media/h3u4sCxPq0Hfga9uya/giphy.webp"
]
let count = 0;
const changing = () => {
    let other = document.querySelector('.vibe')
    other.setAttribute('src', memes[count])
    count++
    if (count == 4) {
        count = 0;
    }
}


// 5. FUNCTION
// click stories reverses alignment

