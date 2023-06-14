let topContainer = [
    // shoe
    "https://media.gucci.com/content/HeroBigStandard_3200x1520/1685625716/HeroBigStandard_Summer-Stories-June6-sandals_001_Default.jpg",
    // suave man
    "https://media.gucci.com/content/HeroBigStandard_3200x1520/1685638168/HeroBigStandard_MLB-June23-010_001_Default.jpg",
    // suave man by the pool
    ""

    ]

let handBags = [
    // wristlet
    "https://media.gucci.com/style/Transparent_Center_0_0_730x490/1675273568/696009_AABY7_2801_001_071_0025_Light.png",
    // belt bag
    "https://media.gucci.com/style/Transparent_Center_0_0_730x490/1681488941/752597_FACFW_8920_001_077_0000_Light.png"
]

let promotions = [
    <p>Collect in Store: Shop gifts online by Thursday 4pm ET for pick-up before Father's Day</p>
                <p>Explore our guide of iconic gifts for Father's Day</p>
                <p>Complimentary gift packaging & on line exclusive reusable totes on all orders</p>
]

const nav = document.querySelector('.mainNav')
const header = document.querySelector('.list');
// solid color scroll
window.addEventListener('scroll', () => {
    if(window.scrollY > 150) {
        nav.style.display = "none";
        header.classList.add('navBarScroll');
    } else if(window.scrollY <= 150) {
        header.classList.remove('navBarScroll')
        nav.style.display = "flex"
    }
});