let btn = document.querySelector('.btn');
let city = document.getElementById('city');
    



btn.addEventListener('click', () => {
    let inp = city.value;
    console.log(city.value)
    let proxy = "https://cors-anywhere.herokuapp.com/";
    let api = `${proxy}api.openweathermap.org/data/2.5/weather?q=${inp}&units=metric&APPID=30955fcd97f29207918131713de09b85`;
    // fetch(api).then((response => {
    //     console.log('ran');
    //     console.log(response.json());
    // }))
    fetch(api).then((response) => {
        console.log(response.json());
    })
})
