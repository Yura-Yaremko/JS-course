getId = x => document.getElementById(x)

/* Small picture №1 */
getId("radio-picture1").addEventListener("mouseover", () => {
    getId("picture1-small").style.display = "block"
})

getId("radio-picture1").addEventListener("mouseout", () => {
    getId("picture1-small").style.display = "none"
})

/* Small picture №2 */
getId("radio-picture2").addEventListener("mouseover", () => {
    getId("picture2-small").style.display = "block"
})

getId("radio-picture2").addEventListener("mouseout", () => {
    getId("picture2-small").style.display = "none"
})

/* Small picture №3 */
getId("radio-picture3").addEventListener("mouseover", () => {
    getId("picture3-small").style.display = "block"
})

getId("radio-picture3").addEventListener("mouseout", () => {
    getId("picture3-small").style.display = "none"
})

/* Small picture №4 */
getId("radio-picture4").addEventListener("mouseover", () => {
    getId("picture4-small").style.display = "block"
})

getId("radio-picture4").addEventListener("mouseout", () => {
    getId("picture4-small").style.display = "none"
})

/* Carousel */
let position = 0
const slidesToShow = 1
const slidesToScroll = 1
const container = document.querySelector('.slider-container')
const track = document.querySelector('.slider-track')
const item = document.querySelector('.slider-item')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
const items = document.querySelectorAll('.slider-item')
const itemsCount = items.length
const itemWidth = container.clientWidth / slidesToShow
const movePosition = slidesToScroll * itemWidth

// console.log("container",container)
// console.log("tack",track)
// console.log("item",item)
// console.log("btnPrev",btnPrev)
// console.log("btnNext",btnNext)
// console.log("items",items)
// console.log("itemsCount",itemsCount)
console.log("itemWidth", itemWidth)
// console.log("movePosition",movePosition)

// items.forEach((item) => {
//     item.style.minWidth = `${itemWidth}px`
// })

// btnNext.addEventListener("click", () => {
//     const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth

//     position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

//     setPosition()
//     checkBtns()

// })

// btnPrev.addEventListener("click", () => {
//     const itemsLeft = Math.abs(position) / itemWidth

//     position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth

//     setPosition()
//     checkBtns()
// })

// const setPosition = () => {
//     track.style.transform = `translateX(${position}px)`
// }

// const checkBtns = () => {
//     btnPrev.disabled = position === 0;
//     btnNext.disabled = position <= - (itemsCount - slidesToShow) * itemWidth
// }

// checkBtns()




btnNext.addEventListener("click", () => {
    newItem = itemWidth + itemWidth

    // setPosition()
    // checkBtns()

})
















