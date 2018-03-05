

  	$.get("http://ipinfo.io", function (response) {
    $("#loc").html(response.city + ", " + response.region);
    getWeather(response.city);
}, "jsonp");

  

/*("#city").click(function( ){
var city = document.getElementById("city").value;
     getWeather(city);
}); */
$("#search").click(function( ){
	
var city = document.getElementById("city").value;

    getWeather(city);
});

  function getWeather(city) {
  	console.log("city "+city);
const key = "55425e58955279263b6f5f14dd79be6b";
const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key;
console.log(url);
$.ajax({
    url: url,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(data) {
        var temp= Math.floor(data.main.temp * 9/5 - 459.67 );
        $("#temp").html(temp + " &degF");
        var loc=$("#loc").html(data.name );
        var wind=$("#wind").html("Wind speed <br><b>"+data.wind.speed +"mph</b>");
        var humidity=$("#humidity").html("Humidity <br><b>"+data.main.humidity+"%</b>" );
        var desc=$("#desc").html(data.weather[0].description);
        var image = document.getElementsByClassName("icon");
        image.src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
        console.log(data.weather[0].icon)
        document.querySelector('img[name="icon"]');
        document.querySelector('img[name="icon"]').src=image.src;
        var backgroundImage = chooseImage(data.weather[0].icon);
        $("body").css("background-image", "url(" + backgroundImage + ")");
        console.log("bg "+backgroundImage)
      console.log("Temp"+temp);
      console.log("Location is "+data.name);
      console.log("Wind Speed"+data.wind.speed);
      console.log("Description: "+data.weather[0].description);
      console.log("Humidity"+data.main.humidity);
      console.log(image.src);
 	
 	//Get forecast
     getForecast(city);    
    }});
}

function chooseImage(icon){
	if (icon=="01d")
		return "https://blog.thomascookairlines.com/wp-content/uploads/2015/05/Sunny-Skies-1050x701.jpg";
	else if(icon==("02n"||"03n"||"04n"))
		return "https://ak9.picdn.net/shutterstock/videos/7153729/thumb/1.jpg";
	else if(icon==("10d"||"09d"))
		return "http://cdn3.getoutofthebasement.com/wp-content/uploads/2016/07/rainy-day.jpg";
	else if(icon==("11d"||"11n"))
		return "http://mediad.publicbroadcasting.net/p/wuga/files/styles/x_large/public/201711/thunderstorm-orig.jpg";
	else if(icon==("13d"||"13n"))
		return "https://tallbloke.files.wordpress.com/2012/05/snowman.jpg";
	else if(icon=="50n")
		return "https://secure.i.telegraph.co.uk/multimedia/archive/02061/london-eye_2061536i.jpg";
	else
		return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPYq0emlFFzxgFVO97uWL5Aq1ccW1pDQBiv5kAO7Dgngt_ioCX";

	}

	




function getForecast(city){

	 	const fURL="https://api.openweathermap.org/data/2.5/forecast/daily?q="+city+"&cnt=6&appid=55425e58955279263b6f5f14dd79be6b";
$.ajax({
    url: fURL,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(data) {
    	var date1 = (new Date())
    	console.log("date "+(date1.getMonth() + 1) + '/' + date1.getDate() + '/' + date1.getFullYear());
    	$("#date1").html((date1.getMonth() + 1) + '/' + (date1.getDate()+1) + '/' + date1.getFullYear());
    	console.log(data.list[1].weather[0].icon)
    	$("#icon1").html("<img src='http://openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
		data.list[1].temp.min=Math.floor((data.list[1].temp.min)* 9/5 - 459.67 );
    	$("#temp-min1").html("Min temp : " +data.list[1].temp.min+ " F");
    	data.list[1].temp.max=Math.floor((data.list[1].temp.max)* 9/5 - 459.67 );
    	$("#temp-max1").html("Max temp : " +data.list[1].temp.max+ " F");
    	$("#pressure1").html("Pressure : " +data.list[1].pressure);
    	$("#humidity1").html("Humidity : " +data.list[1].humidity+"%");
    	$("#wind1").html("Wind speed : " +data.list[1].speed+"mph");
    	$("#desc1").html(data.list[1].weather[0].description);

    	$("#date2").html((date1.getMonth() + 1) + '/' + (date1.getDate()+2) + '/' + date1.getFullYear());
    	$("#icon2").html("<img src='http://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

		console.log("Forecast URL :"+fURL);
    	data.list[2].temp.min=Math.floor((data.list[2].temp.min)* 9/5 - 459.67 );
    	$("#temp-min2").html("Min temp : " +data.list[2].temp.min+ " F");
    	data.list[2].temp.max=Math.floor((data.list[2].temp.max)* 9/5 - 459.67 );
    	$("#temp-max2").html("Max temp : " +data.list[2].temp.max+ " F");
    	$("#pressure2").html("Pressure : " +data.list[2].pressure);
    	$("#humidity2").html("Humidity : " +data.list[2].humidity+"%");
    	$("#wind2").html("Wind speed : " +data.list[2].speed+"mph");
    	$("#desc2").html(data.list[2].weather[0].description);


    	$("#date3").html((date1.getMonth() + 1) + '/' + (date1.getDate()+3) + '/' + date1.getFullYear());
    	 $("#icon3").html("<img src='http://openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

		console.log("Forecast URL :"+fURL);
    	data.list[3].temp.min=Math.floor((data.list[3].temp.min)* 9/5 - 459.67 );
    	$("#temp-min3").html("Min temp : " +data.list[3].temp.min+ " F");
    	data.list[3].temp.max=Math.floor((data.list[3].temp.max)* 9/5 - 459.67 );
    	$("#temp-max3").html("Max temp : " +data.list[3].temp.max+ " F");
    	$("#pressure3").html("Pressure : " +data.list[3].pressure);
    	$("#humidity3").html("Humidity : " +data.list[3].humidity+"%");
    	$("#wind3").html("Wind speed : " +data.list[3].speed+"mph");
    	$("#desc3").html(data.list[3].weather[0].description);


    	$("#date4").html((date1.getMonth() + 1) + '/' + (date1.getDate()+4) + '/' + date1.getFullYear());
    	$("#icon4").html("<img src='http://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

		console.log("Forecast URL :"+fURL);
    	data.list[4].temp.min=Math.floor((data.list[4].temp.min)* 9/5 - 459.67 );
    	$("#temp-min4").html("Min temp : " +data.list[4].temp.min+ " F");
    	data.list[4].temp.max=Math.floor((data.list[4].temp.max)* 9/5 - 459.67 );
    	$("#temp-max4").html("Max temp : " +data.list[4].temp.max+ " F");
    	$("#pressure4").html("Pressure : " +data.list[4].pressure);
    	$("#humidity4").html("Humidity : " +data.list[4].humidity+"%");
    	$("#wind4").html("Wind speed : " +data.list[4].speed+"mph");
    	$("#desc4").html(data.list[4].weather[0].description);


    	$("#date5").html((date1.getMonth() + 1) + '/' + (date1.getDate()+5) + '/' + date1.getFullYear());
    	$("#icon5").html("<img src='http://openweathermap.org/img/w/" + data.list[5].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

		console.log("Forecast URL :"+fURL);
    	data.list[5].temp.min=Math.floor((data.list[5].temp.min)* 9/5 - 459.67 );
    	$("#temp-min5").html("Min temp : " +data.list[5].temp.min+ " F");
    	data.list[5].temp.max=Math.floor((data.list[5].temp.max)* 9/5 - 459.67 );
    	$("#temp-max5").html("Max temp : " +data.list[5].temp.max+ " F");
    	$("#pressure5").html("Pressure : " +data.list[5].pressure);
    	$("#humidity5").html("Humidity : " +data.list[5].humidity+"%");
    	$("#wind5").html("Wind speed : " +data.list[5].speed+"mph");
    	$("#desc5").html(data.list[5].weather[0].description);
    	    	
    	}});
}
