let temp = document.querySelector("#temp");
let place = document.querySelector("#place");
let wind = document.querySelector("#wind");
let des = document.querySelector("#des");
let iconBox = document.querySelector("#icon");
let seoulBtn = document.querySelector("#seoul");
let busanBtn = document.querySelector("#busan");
let jejuBtn = document.querySelector("#jeju");

let cityname = "seoul";
let API_key = "5dd39c6d410c34140b799e366e20f14e";

const getWeather = async () => {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_key}&lang=kr&units=metric`
  );
  //   console.log(response);
  let data = await response.json();
  console.log(data);
  temp.textContent = data.main.temp;
  place.textContent = data.name;
  wind.textContent = data.wind.speed;
  des.textContent = data.weather[0].description;

  //아이콘
  icon = data.weather[0].icon;
  console.log(iconBox);
  iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  console.log(iconUrl);

  // iconBox.src = iconUrl;
  // iconBox.setAttribute("src", iconUrl);

  //내가 원하는 이미지넣기
  let sun;
  if (icon == "01d") {
    sun = "img/sun_kj.png";
  } else if (icon == "01n") {
    sun = "img/sun_kj.png";
  } else if (icon == "02d") {
    sun = "img/02d.png";
  } else if (icon == "03d") {
    sun = "img/04d.png";
  } else if (icon == "04d") {
    sun = "img/04d.png";
  } else if (icon == "09d") {
    sun = "img/09d.png";
  } else if (icon == "11d") {
    sun = "img/11d.png";
  } else if (icon == "13d") {
    sun = "img/13d.png";
  }

  imgWrap.src = sun;
};

getWeather();

seoulBtn.addEventListener("click", () => {
  cityname = "seoul";
  getWeather();
});

busanBtn.addEventListener("click", () => {
  cityname = "busan";
  getWeather();
});

jejuBtn.addEventListener("click", () => {
  cityname = "jeju";
  getWeather();
});
