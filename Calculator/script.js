let city = document.querySelector("#city");
let temp = document.querySelector("#temp");
let type = document.querySelector("#type");
let img = document.querySelector("#img");
let input = document.querySelector("#inp");
let API_key = "9b1af551e6bd9b429fe7feab8cf27159";

const data = async function (search) {
  let getData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`
  );
  
  let jsonData = await getData.json();
  console.log(jsonData);
  console.log(getData);

  if(jsonData.cod == 400)
  {    
    img.src = "Images/error11.png";

    city.innerHTML = "";
    temp.innerHTML = "";
    type.innerHTML = "";
  }

  if(jsonData.cod == 404)
  {    
    img.src = "Images/error22.png";

    city.innerHTML = search;
    temp.innerHTML = "";
    type.innerHTML = "";
  }

  city.innerHTML = jsonData.name;
  temp.innerHTML = parseInt(jsonData.main.temp) + "°C";
  type.innerHTML = jsonData.weather[0].main;

  if (type.innerHTML == "Clouds") {
    img.src = "Images/Clouds.png";
  } else if (type.innerHTML == "Clear") {
    img.src = "Images/Clear.png";
  } else if (type.innerHTML == "Drizzle") {
    img.src = "Images/Drizzle.png";
  } else if (type.innerHTML == "Mist") {
    img.src = "Images/Mist.png";
  } else if (type.innerHTML == "Rain") {
    img.src = "Images/Rain.png";
  } else if (type.innerHTML == "Snow") {
    img.src = "Images/Snow.png";
  }
  input.value = "";
};

document.querySelector("#button").addEventListener("click", () => {
  let search = input.value;
  data(search);
});
