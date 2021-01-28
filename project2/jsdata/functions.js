/* add in your functions here */
function outputCountryBox(name, continent, cities, photos) {
    function outputCities(){
        for(i=0;i<cities.length;i++){
            document.write('<li>'+ cities[i] +'</li>'); 
        }
    }
    
    function outputPhotos(){
        for(i=0;i<photos.length;i++){
            document.write('<img src="images/'+ photos[i] +'\" class="photo">'); 
        }
    }
    document.write('<div class="item">'); 
    document.write('<h2>' + name + '</h2>');
    document.write('<p>' + continent + '</p>');
    document.write('<div class="inner-box">');
    document.write('<h3>Cities</h3>');
    document.write('<ul>');
    outputCities();
    document.write('</ul>');
    document.write('</div>');           
    document.write('<div class="inner-box">');
    document.write('<h3>Popular Photos</h3>'); 
    outputPhotos();
    document.write('</div>');
    document.write('<button>Visit</button>'); 
    document.write('</div>');
}
for (var j = 0; j < countries.length; j++) {
    outputCountryBox(countries[j].name, countries[j].continent, countries[j].cities, countries[j].photos);
}
