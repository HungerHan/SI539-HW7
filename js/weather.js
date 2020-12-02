function gettingJSON(){

    var apiKey = "500ea8191b84b11db737355d0ca19121";
    //Display the forecast
    // Your code here.
    document.querySelector("#forecast").style.display = "block";

    //Set default location if one isn't provided
    let location;
    // Your code here.
    if (document.querySelector("#location").value == "")
    {
        location = "Ann Arbor";
    }
    else
    {
        location = document.querySelector("location").value;
    }

    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let fomat;
    // Your code here.
    let cel = document.getElementById("celcius").checked;
    if (cel == true)
    {
        format = "metric";
    }
    else
    {
        format = "imperial";
    }

    console.log("Format is " + format);

    //set the query  
    let query;

    // Your code here.  
    if (Number.isInteger(location))
    {
        query = "https://api.openweathermap.org/data/2.5/weather?zip=" + location  + "&appid=" + apiKey + "&units=" + format;
    }
    else
    {
        query = "https://api.openweathermap.org/data/2.5/weather?q=" + location  + "&appid=" + apiKey + "&units=" + format;
    }


    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        loc = json["name"];
        document.getElementById("#loc").innerHTML = loc;

        temp = json["main"]["temp"];
        let tempExp = " with " + json["#weather"][0]["description"];
        document.querySelector("#temp").innerHTML = temp + tempExp;

        tempImg = json["weather"][0]["icon"];
        var setSrc = "http://openweathermap.org/img/wn/" + tempImg + ".png";
        var setAlt = json["weather"][0]["description"];
        var setTitle = "Weather Image";
        document.querySelector("#tempImg").setAttribute("src", setSrc);
        document.querySelector("#tempImg").setAttribute("alt", setAlt);
        document.querySelector("#tempImg").setAttribute("title", setTitle);
        
    });
}
