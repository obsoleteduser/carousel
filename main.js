const carousel = document.querySelector('.carousel')
const URL = 'https://random.imagecdn.app/v1/image?width=500&height=150&category=buildings&format=json'
const imageContent = document.querySelector('.image-content')
let imageSet = []


const setImage = async (URL) => {

    let i = 0
   const interval = setInterval(async () => {
        const response = await fetch(URL)
        const data = await response.json()
        imageContent.innerHTML = `<img src="" alt="" class="image">`
        imageSet[i] = data.url
        i++
        if (i === 5) i = 0
        console.log(imageSet)
        carousel.querySelector('img').src = imageSet[0]


    }, 3000)



}

carousel.querySelector('.next').addEventListener('click', ()=>{
    carousel.querySelector('img').src = imageSet[imageSet.indexOf(carousel.querySelector('img').src)+1]
})

carousel.querySelector('.previous').addEventListener('click', ()=>{
    carousel.querySelector('img').src = imageSet[imageSet.indexOf(carousel.querySelector('img').src)-1]
})

setImage(URL)

