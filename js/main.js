document.querySelector('button').addEventListener('click', getGhibli)

function getGhibli(){
    let info = document.querySelector('input').value
    console.log(info)
   
    fetch('https://ghibliapi.herokuapp.com/films/')
    .then (res => res.json())
    .then (data => {
        console.log(data)
        for (let i = 0; i < data.length; i++){
            // console.log(data[i].title)
            if (data[i].title === info){
                console.log(data[i].url)
                fetch(data[i].url)
                .then (res => res.json())
                .then (newData => {
                    console.log(newData)

                    let banner = newData.movie_banner
                    
                    document.querySelector('.titles').style.backgroundImage = `url(${banner})`
                    document.querySelector('.titles').style.backgroundSize = `contain`
                    document.querySelector('.titles').style.backgroundRepeat = `no-repeat`
                    document.querySelector('.titles').style.backgroundPositionX = `center`

                    document.querySelector('h2').innerText = newData.title

                    document.querySelector('h3').innerText = `${newData.original_title} - ${newData.original_title_romanised}`

                    document.querySelector('.date').innerText = newData.release_date

                    document.querySelector('.time').innerText = `${newData.running_time} min`

                    document.querySelector('.dir').innerText = `Director: ${newData.director}`

                    document.querySelector('.score').innerText = `Rotten Tomatoes: ${newData.rt_score}/100`

                    document.querySelector('.prod').innerText = `Producer: ${newData.producer}`

                    document.querySelector('img').src = newData.image

                    document.querySelector('p').innerText = newData.description
                })
            }
        }
    })
    document.querySelector('input').value = ''
}



// document.querySelector('button').addEventListener('click', getWeather) //selecting the button element from the html and making it run the function getWeather (which will be created in the following lines) when clicked

// function getWeather(){
//     let location = document.querySelector('input').value
//     console.log(location)
//     let url = `https://api.weatherapi.com/v1/current.json?key=fcaf8e958e904ef1bf1191928220305&q=${location}&aqi=yes`
//     console.log(url)
//     fetch(url)
//     .then (res => res.json())
//     .then (data => {
//         console.log(data)
//         // console.log(data.current.condition.text)
//         // console.log(data.current.condition.icon)
//         // console.log(data.current.temp_f)
//         // console.log(data.current.feelslike_f)
//         // console.log(data.current.wind_dir)
//         // console.log(data.current.wind_mph)
//         // console.log(data.current.humidity)
//         // console.log(data.current.last_updated)
//         // console.log(data.current.precip_in)
//         // console.log(data.location.country)
//         // console.log(data.location.name)
//         // console.log(data.location.region)

//         document.querySelector('h2').innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`

//         document.querySelector('img').src = data.current.condition.icon

//         document.querySelector('h3').innerText = data.current.temp_f + '°'

//         document.querySelector('p').innerText = data.current.condition.text

//         document.querySelector('.feel') .innerText = `Last updated: ${data.current.last_updated}` 

//         document.querySelector('.precip').innerText = `Precipitation: ${data.current.precip_in}"`

//         document.querySelector('.humid').innerText = `Humidity: ${data.current.humidity}%`

//         document.querySelector('.wind').innerText = `Wind ${data.current.wind_dir} @ ${data.current.wind_mph}mph`

//         document.querySelector('.updated').innerText = `Last Updated: ${data.current.last_updated}`
//     })
// }

