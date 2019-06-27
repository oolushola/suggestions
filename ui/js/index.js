$(()=>{

    $("#searchCities").click(()=>{
       $cityname = $("#cityname").val();
       if(!$cityname) {
        $("#cityname").focus();
        $("#notification").html("<i class='fa fa-location-arrow'></i> Enter any city suggestion of your choice, the application will auto-generate the latitude and longitude of your location.");
        return;
       }
        coordinates();
        
        $latitude = $("#latitude").val();
        $longitude = $("#longitude").val();
        

        /**
         * @method GET 
         * 
         * @query city, latutude and longitude
         * 
         * @response Array of object [{...}]
         */
        $baseUrl = 'https://get-dev-city-suggestions.herokuapp.com/api/v1/suggestions';
        const url = $baseUrl+'?q='+$cityname+'&latitude='+$latitude+'&longitude='+$longitude;


        $("#results").html("<img src='images/ajax.gif'>Please Wait...").css({fontSize:'11px'});

        $.getJSON(url, function(data){
            const networkStatus = window.navigator.onLine;
            if(!networkStatus){
                setTimeout(function(){
                    $("#notification")
                    .html(
                        '<i class="fa fa-unlink"></i> Oops! Connection lost. Please Check your internet connectivity.'
                        )
                    .css({
                        fontWeight:'bold', 
                        fontSize:'11px'
                    });
                })
                return false;
            }
            
            let cities = data.suggestions;
            const list = document.createElement("ul");
            list.className = 'row';

            const para = document.createElement("p");
            para.textContent = `City suggestions for ${$cityname}`;
            $("#para").html(para);
            
            //iterate over the cities object and return the key value pair
            cities.map((exactCity, index)=>{
                let listItemCityName = document.createElement("li");
                listItemCityName.className = 'col-md-3';
                let listItemCitylat = document.createElement("span");
                let listItemCitylng = document.createElement("span");

                listItemCityName.textContent = 'Name: '+exactCity.name;
                listItemCitylat.textContent = 'Latitude: '+exactCity.lat;
                listItemCitylng.textContent = 'Longitude: '+exactCity.lng;

                listItemCityName.appendChild(listItemCitylat);
                listItemCityName.appendChild(listItemCitylng);
                list.appendChild(listItemCityName);

                $("#results").html(list);
            })
                
        }, "json");
    });


    const coordinates = () =>{
        if ("geolocation" in navigator){ 
            navigator.geolocation.getCurrentPosition(position=>{
                $("#latitude").val(position.coords.latitude);
                $("#longitude").val(position.coords.longitude);
                });
        }else{
            alert("Your Browser doesn't support geolocation!");
        }
    }  
    
    
});