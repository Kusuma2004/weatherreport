const apiKey="3c50347c426f98b8f0087014786ce59a";
       const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
       const seachBox=document.querySelector(".search input");
       const searchBtn=document.querySelector(".search button");
       async function checkWeather(cityE1)
       {
          const response=await fetch(apiUrl + cityE1+`&appid=${apiKey}`);
          var data=await response.json();
          console.log(data);
          document.querySelector(".cityE1").innerHTML=data.name;
          document.querySelector(".tempE1").innerHTML=Math.round(data.main.temp);
          document.querySelector(".humidValue").innerHTML=data.main.humidity+"%";
          document.querySelector(".windValue").innerHTML=data.wind.speed+"KMPH";
       }
       
       searchBtn.addEventListener("click",()=>{
        checkWeather( seachBox.value);
       })
