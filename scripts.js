$(document).ready(function () {
    $("form").submit(function () {
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" +  $("input[type='text']").val() + "&&appid=3ce43ebf6f1a929aa6dff02138aa21f1";
        console.log(url);
        // your code here (build up your url)
        $.get(url, function (res) {
            console.log(res);
            console.log(res.name);
            console.log((res.main.temp * 9/5) - 459.67);
            $("h1").html(res.name)
            $("h5").html("Temperature: " + Math.floor((res.main.temp * (9/5)) - 459.67));
        }, "json");
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});