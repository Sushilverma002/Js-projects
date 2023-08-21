const apiKey = "2269cdcea4eb921f3c33279dab396641";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?uints=metric&q=";


const searchbox=doucmeny.querySelector(".search input");
const searchbtn=doucmeny.querySelector(".search button");


async function checkwheather(city){
    const response = await fetch(apiUrl+city+'&appid=${apiKey}');
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
}
searchbtn.addEventListener("click",()=>{
    checkwheather(searchbox.value);
});

