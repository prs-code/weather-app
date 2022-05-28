// api.openweathermap.org/data/2.5/weather?q=mashhad&appid=a2e69139d35c55685c6201e0e4734a68&units = metric
const form = document.querySelector(".top-banner form");
const inputText = document.querySelector(".top-banner input");
const massage = document.querySelector(".msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "a2e69139d35c55685c6201e0e4734a68";

form.addEventListener("submit", event => {
    event.preventDefault();
    let inputVal = inputText.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const {main, name, sys, weather} = data;
           const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
           console.log(icon);
           const li = document.createElement("li");
           li.classList.add("city");
           const markUp = `
           <h2 class= 'city-name' data-name=${name}, ${sys.country}>
                <span>${name}</span>
                <span>${sys.country}</span>
           </h2>
           <div class= 'city-temp'>${Math.round(main.temp)}</div>
           <figure>
                <img class= 'city-icon' src='${icon}' alt= 'city'>
                <figurecaption>${weather[0]["description"]} </figurecaption>
            </figure>
           `;
           li.innerHTML = markUp;
           list.appendChild(li);
           massage.innerText = " ";
    })
        .catch(() => {
            massage.innerText = "The City is not exist ! Try again";
        })
        inputText.value = "";
})