document.addEventListener("DOMContentLoaded", () => {
  let clock = document.querySelector("#clock");
  let date = document.querySelector("#date");
  start = () => {
    let today = new Date();
    let hrs = today.getHours();
    let mins = today.getMinutes();
    let sec = today.getSeconds();

    let hrs2 = hrs < 12 ? "AM" : "PM";
    // 12시간제로 변환
    // hrs = hrs % 12 || 12;
    hrs = hrs > 9 ? hrs : `0${hrs}`;
    mins = mins > 9 ? mins : `0${mins}`;
    sec = sec > 9 ? sec : `0${sec}`;

    clock.innerHTML = `<p>${hrs}:${mins} <span class="ampm">${hrs2}</span></p>`;

    // 날짜 표시 (년, 월, 일, 요일)
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월 (0부터 시작하므로 1을 더함)
    let day = today.getDate(); // 일
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayOfWeek = weekdays[today.getDay()]; // 요일 (0:일요일, 1:월요일, ... 6:토요일)

    date.textContent = `${year}. ${month}. ${day} ${dayOfWeek}`;
  };
  setInterval(start, 1000);
});

let temp = document.querySelector("#temp");
let temp_min = document.querySelector("#temp_min");
let temp_max = document.querySelector("#temp_max");
let place = document.querySelector("#place");
let wind = document.querySelector("#wind");
let humidity = document.querySelector("#humidity");
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

  temp.textContent = `${data.main.temp}˚`;
  temp_min.textContent = `${data.main.temp_min}˚`;
  temp_max.textContent = `${data.main.temp_max}˚`;
  humidity.textContent = `${data.main.humidity}%`;
  place.textContent = data.name;
  wind.textContent = `${data.wind.speed} m/s`;
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
    sun = "img/sun.png";
  } else if (icon == "01n") {
    sun = "img/moon.png";
  } else if (icon == "02d") {
    sun = "img/suncloud.png";
  } else if (icon == "02n") {
    sun = "img/mooncloud.png";
  } else if (icon == "03d") {
    sun = "img/cloud.png";
  } else if (icon == "03n") {
    sun = "img/cloud.png";
  } else if (icon == "04d") {
    sun = "img/darkcloud.png";
  } else if (icon == "04n") {
    sun = "img/darkcloud.png";
  } else if (icon == "09d") {
    sun = "img/rain.png";
  } else if (icon == "09n") {
    sun = "img/rain.png";
  } else if (icon == "10d") {
    sun = "img/sunrain.png";
  } else if (icon == "10n") {
    sun = "img/nightrain.png";
  } else if (icon == "11d") {
    sun = "img/thunder.png";
  } else if (icon == "11n") {
    sun = "img/thunder.png";
  } else if (icon == "13d") {
    sun = "img/snow.png";
  } else if (icon == "13n") {
    sun = "img/snow.png";
  } else if (icon == "50d") {
    sun = "img/50d.png";
  } else if (icon == "50n") {
    sun = "img/50d.png";
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
