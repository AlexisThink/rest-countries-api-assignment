var request = superagent;
var apiURL = 'https://restcountries.eu/rest/v2/all';

request
    .get(apiURL)
    .then(function(response){
        var paises = response.body;
 
        paises.forEach(function(pais){
            console.log(pais);

            var div = document.createElement('div');
            div.className = 'country-card';
            document.querySelector('.countries-container').appendChild(div);

            var img = document.createElement('img');
            img.className = 'country-flag';
            img.src = pais.flag;
            div.appendChild(img);

            var h4 = document.createElement('h4');
            h4.className = 'country-name';
            h4.textContent = pais.name;
            div.appendChild(h4);

            var p = document.createElement('p');
            p.className = 'country-capital';
            p.textContent = pais.capital;
            div.appendChild(p);
        })
    });