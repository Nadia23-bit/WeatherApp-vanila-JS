let key='116346810d3292f103006a8c63389658';
link = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={116346810d3292f103006a8c63389658}`;


function fetching(city){
fetch("https://api.openweathermap.org/data/2.5/weather?q=" +   // fetching data from API
city +
"&units=metric&appid=116346810d3292f103006a8c63389658").then(response=>{
   return response.json();   // returning response in json format
}).then(data=>{
console.log(data);
// getting and showing temprature and other information in web page
   document.getElementById('heading').innerText=`Weather in ${data.name}`;
   document.getElementById('temp').innerHTML=`<p>${data.main.temp} °C</p>`;
   document.getElementById('feel-like').innerHTML=`Feels like: ${data.main.feels_like}</p>`;
   document.getElementById('humidity').innerHTML=`<p>humidity: ${data.main.humidity}%</p>`;
   document.getElementById('description').innerHTML=`<p>  ${data.weather[0].description}</p>`;
    document.getElementById('temp').addEventListener('click',()=>{
      var a=data.main.temp;
      var f=farenheit(a);
      document.getElementById('temp').innerHTML=`<p> ${f} F</p>`;
      console.log(a);
    });
   
}).catch(error=>{
   console.log(error);
});
}
 function load(){
   fetching("Lahore");  // by default location will be Lahore
 } 

let searchButton=document.getElementById('searchButton');
let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{

   let searchButton=document.getElementById('searchButton');
   let searchValue=searchButton.value ;
   if(searchValue==''){
      alert("Please enter a city name"); 
   }
   else{
   fetching(searchValue);  // The name of city entered in search filed will be sent as argument to fetching function to fetch data of that city
   searchButton.value='';
   }
});

function farenheit(temprature){
 var Farenheit=(temprature*1.8)+32;
 return Farenheit;
}