let btn = document.querySelector('.btn');
let city = document.getElementById('city');
let results = document.querySelector('.results');
    

btn.addEventListener('click', () => {
    let inp = city.value;
    if (inp !== '') {
        let proxy = "https://cors-anywhere.herokuapp.com/";
        let api = `${proxy}api.openweathermap.org/data/2.5/weather?q=${inp}&units=metric&APPID=30955fcd97f29207918131713de09b85`;
        fetch(api).then((response) => {
            return response.json();
        }).then((data) => {
            let city = document.createElement('H1');
            let temp = document.createElement('DIV');
            let wind = document.createElement('DIV');
            let press = document.createElement('DIV');
    
            city.innerHTML = data.name;
            temp.innerHTML = `Temperature: ${Math.round(data.main.temp)}°C`;
            wind.innerHTML = `Wind: ${data.wind.speed} km/h`;
            press.innerHTML = `Pressure: ${data.main.pressure} hPa`;
            results.innerHTML = '';
            results.appendChild(city);
            results.appendChild(temp);
            results.appendChild(wind);
            results.appendChild(press);
            console.log(data);
        })
    }
    
})
